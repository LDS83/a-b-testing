const gameVariants = [
    { id: 'A', title: 'Battle of the Galaxies 3'},
    { id: 'B', title: 'Dragon Quest: The Last Warriors'}
];

const assignedVariant = gameVariants[Math.floor(Math.random() * gameVariants.length)];


// document.getElementById('gameTitle').textContent = assignedVariant.title;

console.log(`Assigned Game Variant: ${assignedVariant.title}`);