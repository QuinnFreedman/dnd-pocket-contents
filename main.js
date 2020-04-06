(() => {
// const items = JSON.parse()

function randomFromList(probabilityList) {
    const sum = probabilityList.reduce((a, b) => a + b, 0) 
    let index = Math.random() * sum
    for (let i = 0; i < probabilityList.length; i++) {
        const probability = probabilityList[i]
        if (index < probability) {
            return i
        }
        index -= probability
    }
}

function normalRandom(mean, stddev) {
    var V1, V2, S
    do {
        var U1 = Math.random()
        var U2 = Math.random()
        V1 = 2*U1-1
        V2 = 2*U2-1
        S = V1*V1+V2*V2
    } while(S >= 1)
    if (S===0) return 0
    return mean+stddev*(V1*Math.sqrt(-2*Math.log(S)/S))
}

const masterSlider = document.querySelector("#master_level")
const advancedCheck = document.querySelector("#show_advanced")
const mundaneSlider = document.querySelector("#mundane_slider")
const minorMagicalSlider = document.querySelector("#minor_magical_slider")
const preciousSlider = document.querySelector("#precious_slider")
const numItemSlider = document.querySelector("#num_items_slider")
const cashSlider = document.querySelector("#cash_slider")

const mainDiv = document.querySelector("#main_controls")
const advancedDiv = document.querySelector("#advanced_controls")

const resultTable = document.querySelector("#result_table")

let advanced = false

function showControls() {
    advanced = advancedCheck.checked
    if (advanced) {
        advancedDiv.style.maxHeight = advancedDiv.scrollHeight + "px"
        mainDiv.style.maxHeight = null
    } else {
        mainDiv.style.maxHeight = mainDiv.scrollHeight + "px"
        advancedDiv.style.maxHeight = null
    }
}

advancedCheck.onchange = showControls
showControls()
mainDiv.classList.add("hideable")
advancedDiv.classList.add("hideable")

const prefabNames = [
    "Commoner",
    "Adventurer",
    "Wealthy",
    "Noble",
]

const setMasterSliderTooltip = 
    () => masterSlider.title = prefabNames[masterSlider.value]

masterSlider.onchange = setMasterSliderTooltip
setMasterSliderTooltip()

fetch("items.json")
    .then((response) => response.json())
    .then((items) => {
        document.querySelector("#generate")
            .addEventListener("click", () => generateResult(items))
    })
    .catch(alert)

function generateResult(items) {
    let mundaneFraction, magicalFraction, preciousFraction, numItems, cashValue
    if (!advancedCheck.checked) {
        switch (parseInt(masterSlider.value)) {
            case 0: {
                mundaneFraction = 1
                magicalFraction = 0
                preciousFraction = 0
                numItems = Math.round(normalRandom(2.2, 0.5))
                cashValue = Math.random() < 0.4 
                        ? Math.max(0, Math.round(normalRandom(10, 5)))
                        : 0
            } break;
            case 1: {
                mundaneFraction = .7
                magicalFraction = .1
                preciousFraction = .2
                numItems = Math.round(normalRandom(2.6, 0.5))
                cashValue = Math.random() < 0.6 
                        ? Math.round(normalRandom(150, 20))
                        : 0
            } break;
            case 2: {
                mundaneFraction = .5
                magicalFraction = .2
                preciousFraction = .3
                numItems = Math.round(normalRandom(2.6, 0.5))
                cashValue = Math.random() < 0.8 
                        ? Math.round(normalRandom(1000, 100))
                        : 0
            } break;
            case 3: {
                mundaneFraction = .1
                magicalFraction = .3
                preciousFraction = .6
                numItems = Math.round(normalRandom(2.6, 0.5))
                cashValue = Math.random() < 0.9 
                        ? Math.round(normalRandom(10000, 1000))
                        : 0
            } break;
        }
    } else {
        const normalize = (list) => {
            const sum = list.reduce((a, b) => a + b) 
            return list.map((x) => x / sum)
        }
        [mundaneFraction, magicalFraction, preciousFraction] = normalize([
            mundaneSlider.value,
            minorMagicalSlider.value,
            preciousSlider.value
        ].map(parseFloat))

        numItems = parseInt(numItemSlider.value)
        const cashSliderValue = parseFloat(cashSlider.value) * 10000
        cashValue = Math.round(normalRandom(cashSliderValue, cashSliderValue / 6)) 
    }
    const outputItems = []
    for (let i = 0; i < numItems; i++) {
        const listIndex = randomFromList([
            mundaneFraction, magicalFraction, preciousFraction])
        const listName = ["mundane", "minor_magical", "precious"][listIndex]
        const itemList = items[listName]
        let index
        do {
            index = Math.floor(Math.random() * itemList.length)
        } while (outputItems.find((x) => x.index === index))
        const item = itemList[index]
        outputItems.push({
            index,
            description: item,
            category: listName
        })
    }

    if (cashValue > 0) {
        const denominations = [
            {value: 100, label: "gp"},
            {value: 10, label: "sp"},
            {value: 1, label: "cp"},
        ]
        let description = ""
        for (let {value, label} of denominations) {
            let numCoins = Math.floor(cashValue / value)
            cashValue -= numCoins * value
            if (numCoins > 0) {
                if (description.length > 0) {
                    description += ", "
                }
                description += `<div class="coin ${label}"></div>` + numCoins + label
            }
        }

        outputItems.push({
            description,
            category: "cash"
        })
    }

    // Create Table
    const categoryNames = {
        "mundane": "Mundane",
        "minor_magical": "Minor Magical",
        "precious": "Precious",
    }
    while (resultTable.firstChild) {
        resultTable.removeChild(resultTable.firstChild)
    }
    for (let {description, category} of outputItems) {
        const tr = document.createElement("tr")
        const categoryName = categoryNames[category]
        if (categoryName) {
            const tdCategory = document.createElement("td")
            const square = document.createElement("div")
            square.classList.add("color-square")
            square.classList.add(category)
            square.setAttribute("title", categoryName)
            tdCategory.appendChild(square)
            tr.appendChild(tdCategory)
        }
        const tdDescription = document.createElement("td")
        if (!categoryName) {
            tdDescription.setAttribute("colspan", 2)
        }
        tdDescription.innerHTML = description
        tr.appendChild(tdDescription)
        resultTable.appendChild(tr)
    }
}
})();
