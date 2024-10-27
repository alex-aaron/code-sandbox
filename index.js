
const colors = [
    'Red',
    'Blue',
    'White',
    'Black',
    'Orange',
    'Purple',
    'Brown', 
    'Teal',
    'Gold',
    'Silver',
    'Yellow',
    'Burgundy',
    'Sky Blue',
    'Egg shell white',
    'Choral',
    'Periwinkle Purple',
    'Grey',
    'Hot Pink',
    'Neon Green',
    'Royal Blue',
    'Light Brown',
    'Khaki'
];

const words = [
    'Fernweh',
    'Wanderlust',
    'Weltschmerz',
    'Zweisamkeit',
    'Mutterseelenallein',
    'Waldeinsamkeit',
    'Flughafenbegrussungsfreude',
    'Abgrundanziehung',
    'Torschlusspanik',
    'Kopfkino',
    'Backpfeifengesicht',
    'Lebensmüde',
    'Kuddelmuddel',
    'Schwarmerei',
    'Sehnsucht',
    'Geborgenheit',
    'Mauerbauertraurigkeit',
    'Sturmfrei',
    'Luftschloss',
    'Götterdämmerung',
    'Freudentränen',
    'Vergangenheitsbewaeltigung',
    'Schockstarre',
    'Fuchsteufelswild',
    'Schnapsidee',
    'Lebenskunstle',
    'Zumzwang'
];

const names = [
    'Alex',
    'Steph',
    'Buena',
    'Anna',
    'Kyle',
    'Stan',
    'Stan, Sr',
    'Andrew',
    'Sean',
    'John',
    'Celeste',
    'Robby',
    'Emma',
    'Courtney',
    'Christine',
    'Lissy',
    'Janel'
];

function assignColor(colors, players, output=[], count=0){
    if (players.length === 0){
        return output;
    }
    let playerCopy = players.slice();
    const pIndex = Math.floor(Math.random() * playerCopy.length);
    const cIndex = Math.floor(Math.random() * colors.length);
    const player = playerCopy[pIndex];
    const color = colors[cIndex];
    output.push(`${player}: ${color}`);
    colors.splice(cIndex, 1);
    playerCopy.splice(pIndex, 1);

    return assignColor(colors, playerCopy, output, count + 1);
}

console.log(words.length);

