// Existing brawlers and inventory logic...

const brawlers = [
    { name: "Shelly", rarity: "Common" },
    { name: "Colt", rarity: "Common" },
    { name: "Bull", rarity: "Common" },
    { name: "Nita", rarity: "Common" },
    { name: "Jessie", rarity: "Common" },
    { name: "Brock", rarity: "Common" },
    { name: "Poco", rarity: "Common" },
    { name: "Rico", rarity: "Common" },
    { name: "El Primo", rarity: "Common" },
    { name: "Barley", rarity: "Common" },
    { name: "Bea", rarity: "Rare" },
    { name: "Bibi", rarity: "Rare" },
    { name: "Bo", rarity: "Rare" },
    { name: "Carl", rarity: "Rare" },
    { name: "Daryl", rarity: "Rare" },
    { name: "Frank", rarity: "Rare" },
    { name: "Pam", rarity: "Rare" },
    { name: "Tara", rarity: "Rare" },
    { name: "Spike", rarity: "Rare" },
    { name: "Piper", rarity: "Super Rare" },
    { name: "Leon", rarity: "Super Rare" },
    { name: "Crow", rarity: "Super Rare" },
    { name: "Jean", rarity: "Super Rare" },
    { name: "Surge", rarity: "Super Rare" },
    { name: "Nani", rarity: "Super Rare" },
    { name: "Grom", rarity: "Epic" },
    { name: "Buzz", rarity: "Epic" },
    { name: "Ash", rarity: "Epic" },
    { name: "Colette", rarity: "Epic" },
    { name: "Mr. P", rarity: "Mythic" },
    { name: "Stu", rarity: "Mythic" },
    { name: "Griff", rarity: "Mythic" },
    { name: "Jacky", rarity: "Mythic" },
    { name: "Amber", rarity: "Mythic" },
    { name: "Meg", rarity: "Legendary" },
    { name: "Sandy", rarity: "Legendary" },
    { name: "8-Bit", rarity: "Legendary" },
    { name: "Gale", rarity: "Legendary" },
];

const inventory = new Set(); // Use a Set to avoid duplicates

document.getElementById('openBox').addEventListener('click', () => {
    const lid = document.getElementById('lid');
    const content = document.getElementById('content');
    const result = document.getElementById('result');

    // Animate lid
    lid.style.transform = 'rotateX(-90deg)';

    // Wait for the animation to finish
    setTimeout(() => {
        // Get random brawler
        const randomBrawler = brawlers[Math.floor(Math.random() * brawlers.length)];
        content.textContent = randomBrawler.name; // Show the brawler's name
        lid.style.transform = 'rotateX(0deg)'; // Close the lid again

        // Add brawler to inventory if not already collected
        inventory.add(randomBrawler.name);
        result.textContent = `You got: ${randomBrawler.name} (Rarity: ${randomBrawler.rarity})`; // Show the result

        // Update the inventory display
        updateInventory();
    }, 1000);
});

// Function to update the inventory display
function updateInventory() {
    const inventoryDiv = document.getElementById('inventory');
    inventoryDiv.innerHTML = ''; // Clear the current inventory display

    inventory.forEach(brawler => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('inventory-item');
        itemDiv.textContent = brawler;
        inventoryDiv.appendChild(itemDiv);
    });
}


