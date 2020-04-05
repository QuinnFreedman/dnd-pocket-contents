(() => {
const items = JSON.parse(`{
    "mundane": [
        "Small change purse, empty",
        "A love letter",
        "A flint & steel",
        "A set of rusty keys",
        "Pouch of dried (seed) beans",
        "Small whetstone",
        "A needle and thread",
        "A rabbit's foot",
        "A religious symbol, token, or idol",
        "Loose tea in a leather pouch",
        "A piece of cheese wrapped in cloth (half eaten)",
        "Loose tea in a leather pouch",
        "A deck of unique cards and a booklet with instructions to play a game of war with them",
        "A paper with the last thing a PC did or said written on it",
        "A feather from a rare bird",
        "A small, simple pen knife. The handle is old and the wood is worn so that the maker’s mark is no longer visible",
        "Used handkerchief",
        "An invitation to join the local thieves guild",
        "A half-eaten bread snack wrapped in leaves",
        "A key to a secret lockbox kept under the NPC’s bed",
        "A weighted bone die (always high-rolling)",
        "A small pouch of nuts and dried meats",
        "A worn letter from a prominent noble granting some favor or pardon to the NPC",
        "A full set of cutlery (knife, fork, spoon)",
        "A scrap of parchment that has a map drawn on it. It seems to be of streets in a city, but you can’t tell where",
        "A half eaten piece of jerky",
        "An envelope with money and a small letter apologizing for the small amount, promising not to spend any on food next time so the kids will have more",
        "An old, tarnished ring obviously not worn in a while",
        "A small wooden figurine carved into the shape of an owlbear",
        "An invitation to join the local thieves’ guild",
        "A spool of string",
        "Some leather thongs",
        "A piece of wood carved with a good-luck charm",
        "Letter of acceptance into a mage's school",
        "A jar of mysterious salve",
        "A comb",
        "A note regarding a merchant caravan needing guards",
        "A four leafed clover",
        "A bloodied rag",
        "A small pocket book detailing the rise and fall of an old empire",
        "A pocket book of prayers",
        "A letter detailing a plot to overthrow the local government",
        "A set of knuckle bone dice",
        "A pouch containing psychoactive herbs",
        "3 candles",
        "A water skin",
        "An entire wheel of cheese",
        "A small rodent (1d4 damage bite)",
        "A glass flask of alcohol",
        "A strand of beads or bells used for religious warship"
    ],

    "minor_magical": [
        "A rough crystal, always warm.",
        "A glowing vial containing an imprisoned Will-o’-Wisp",
        "A magical anti-pickpocket snaptrap. It snaps on the thief’s fingers loudly and painfully with needle-like teeth and turns the thief’s hand bright purple as though indelibly dyed",
        "A very small  pocket-spellbook containing 3 cantrips and 2 first-level spells",
        "A bottle of poison",
        "A small good-luck charm (Luckstone: +1 to all ability checks and saving throws)",
        "A necklace with a pendent in the shape of a chimera. While wearing it, a druid’s wildshape can turn them into mixed animals (different parts from different species)",
        "A cut yellow chrysanthemum that never dies and slowly grows back if crushed or torn",
        "A tiny iron cage (a couple inches cubed) containing a tiny faerie (pixie?)",
        "A stoppered glass vial containing a bit of ooze (gelatinous cube, black pudding, slime mold... DM’s choice). Will slowly grow into the full-sized version if released",
        "A small moonstone (translucent white) that glows with light according to the strength of the moon (only at night – brightest at a full moon)",
        "A block of ice that never melts",
        "A silver lightning bolt pendent that vibrates and zooms around when a storm is coming",
        "An ocarina that perfectly mimics bird calls. With attunement and practice, it can mimic other animal sounds",
        "A tumbler glass or flask that turns any liquid in it into high-quality alcohol",
        "A small boat that has been enchanted to fold down small enough to fit in a pocket",
        "A small mirror, big enough to reach your arm through, that is enchanted to be a portal to its maker’s workshop",
        "A magical coin purse that screams when someone other than the attuned owner opens is",
        "A twig covered in buds. If planted in the ground, it will grow into a tree with healing fruits",
        "A clay jar of brownish-red ointment with no label. Will either burn or heal skin that touches it (DM’s choice)",
        "A whistle/pipe that will open magically sealed doors when blown",
        "A small orb with water and a small living jellyfish inside",
        "A pouch of yellow powder that burns excruciatingly if even a few grains touch your skin",
        "An unusually small humanoid skull",
        "A vial of demon’s blood",
        "An amulet that makes the wearer appear older",
        "A potion of healing",
        "A potion of resistance",
        "A potion of gaseous form",
        "A scroll with 3 cantrips",
        "A scroll containing a 1st level spell",
        "A scroll with a 2nd level spell",
        "A small bone knife carved with runes and pulsing faintly with magic, this hobgoblin good luck charm allows one to reroll an attack roll or any skill check involving a melee or ranged weapon once per day.",
        "A small book with all blank pages. When a question is asked, the pages show an answer that is usually so cryptic as to be useless",
        "Rust bag of tricks",
        "A Tanglefoot Bag",
        "Cloak of Elvenkind (advantage on steal roles)",
        "A silver figurine of a raven (Figurine of Wondrous Power – can become a raven for 12 hours every 2 days. While in raven form, you can cast Animal Messenger at will)",
        "A +1 dagger",
        "A ring of invisibility (doesn’t hide your shadow)"
    ],

    "precious": [
        "An old coin, showing a hare on one side and the moon on the reverse",
        "A set of balance weights",
        "An oversized coin from an ancient empire",
        "A silver ring carved in the shape of entwined serpents",
        "A silver locket with a tiny painting of a loved one",
        "An ornate golden key with no label. Worth 4GP just for the materials but probably opens a coffer or secret room in the owner’s house",
        "An invitation/ticket to an exclusive upcoming event in the nearest city",
        "Gold bracelet (30GP)",
        "Handful of Azurite (30GP)",
        "Bloodstone Gem (50GP)",
        "A star rose quartz (50GP)",
        "Sealing wax and a stamp with the seal of the local magistrate",
        "A gold ring engraved with the seal of a noble house",
        "A pouch of coins of a foreign currency the PC’s haven’t seen before",
        "A signed promissory note for a large sum of money from a local noble",
        "An arm band in the shape of a snake, with emeralds for eyes",
        "A gold necklace with an emerald pendant worth 100GP",
        "A detailed map, a sealed letter and a lucrative contract to deliver to a place on the map, promised to be paid by the recipient. The PC’s don’t recognize where the map is of, though",
        "A coin purse filled with coins and a message in thieves cant. The message warns the thief to return the purse or they will regret it",
        "A carved jade figurine of the animal featured in the owner’s house crest",
        "A rough gem of a kind that no one has ever seen before",
        "A dragon’s scale",
        "A small mechanical timepiece (very rare)",
        "A silver ring set with a green gem",
        "A fine gold chain set with a fire opal"
    ]
}`)

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


// fetch("items.json").then((x) => console.log(x)).catch(alert)
document.querySelector("#generate").addEventListener("click", () => {
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
})
})();
