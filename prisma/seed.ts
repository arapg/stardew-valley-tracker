import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    // Create Rooms
    await prisma.room.createMany({
      data: [
        { name: 'Crafts Room', reward: 'Bridge Repair' },
        { name: 'Pantry', reward: 'Greenhouse' },
        { name: 'Fish Tank', reward: 'Glittering Boulder Removed' },
        { name: 'Boiler Room', reward: 'Minecarts Repaired' },
        { name: 'Bulletin Board', reward: 'Friendship' },
        { name: 'Vault', reward: 'Bus Repair' }
      ]
    });
    console.log('Room seeding completed.')

    // Create Bundles
    await prisma.bundle.createMany({
      data: [
        // Crafts Room
        { name: 'Spring Foraging', reward: '30x Spring Seeds', slots: 4, roomName: 'Crafts Room', url: 'https://stardewvalleywiki.com/mediawiki/images/8/8a/Spring_Foraging_Bundle.png' },
        { name: 'Summer Foraging', reward: '30x Summer Seeds', slots: 3, roomName: 'Crafts Room', url: 'https://stardewvalleywiki.com/mediawiki/images/f/fd/Summer_Foraging_Bundle.png' },
        { name: 'Fall Foraging', reward: '30x Fall Seeds', slots: 4, roomName: 'Crafts Room', url: 'https://stardewvalleywiki.com/mediawiki/images/3/3d/Fall_Foraging_Bundle.png'},
        { name: 'Winter Foraging', reward: '30x Winter Seeds', slots: 4, roomName: 'Crafts Room', url: 'https://stardewvalleywiki.com/mediawiki/images/1/17/Winter_Foraging_Bundle.png' },
        { name: 'Construction', reward: 'Charcoal Kiln', slots: 4, roomName: 'Crafts Room', url: 'https://stardewvalleywiki.com/mediawiki/images/7/7a/Construction_Bundle.png' },
        { name: 'Exotic Foraging', reward: "5x Autumn's Bounty", slots: 5, roomName: 'Crafts Room', url: 'https://stardewvalleywiki.com/mediawiki/images/5/5a/Exotic_Foraging_Bundle.png' },

        // Pantry
        { name: 'Spring Crops', reward: '20x Speed-Gro', slots: 4, roomName: 'Pantry', url: 'https://stardewvalleywiki.com/mediawiki/images/5/51/Spring_Crops_Bundle.png' },
        { name: 'Summer Crops', reward: 'Quality Sprinkler', slots: 4, roomName: 'Pantry', url: 'https://stardewvalleywiki.com/mediawiki/images/2/27/Summer_Crops_Bundle.png' },
        { name: 'Fall Crops', reward: 'Bee House', slots: 4, roomName: 'Pantry', url: 'https://stardewvalleywiki.com/mediawiki/images/0/0d/Fall_Crops_Bundle.png' },
        { name: 'Quality Crops', reward: 'Preserves Jar', slots: 3, roomName: 'Pantry', url: 'https://stardewvalleywiki.com/mediawiki/images/8/86/Quality_Crops_Bundle.png' },
        { name: 'Animal', reward: 'Cheese Press', slots: 5, roomName: 'Pantry', url: 'https://stardewvalleywiki.com/mediawiki/images/5/52/Animal_Bundle.png' },
        { name: 'Artisan', reward: 'Keg', slots: 6, roomName: 'Pantry', url: 'https://stardewvalleywiki.com/mediawiki/images/7/7a/Artisan_Bundle.png' },

        // Fish Tank
        { name: 'River Fish', reward: '30x Deluxe Bait', slots: 4, roomName: 'Fish Tank', url: 'https://stardewvalleywiki.com/mediawiki/images/c/c6/River_Fish_Bundle.png' },
        { name: 'Lake Fish', reward: 'Dressed Spinner', slots: 4, roomName: 'Fish Tank', url: 'https://stardewvalleywiki.com/mediawiki/images/4/46/Lake_Fish_Bundle.png' },
        { name: 'Ocean Fish', reward: '5x Beach Warp Totem', slots: 4, roomName: 'Fish Tank', url: 'https://stardewvalleywiki.com/mediawiki/images/a/ac/Ocean_Fish_Bundle.png' },
        { name: 'Night Fishing', reward: 'Glow Ring', slots: 3, roomName: 'Fish Tank', url: 'https://stardewvalleywiki.com/mediawiki/images/a/a7/Night_Fishing_Bundle.png' },
        { name: 'Crab Pot', reward: '3x Crab Pot', slots: 5, roomName: 'Fish Tank', url: 'https://stardewvalleywiki.com/mediawiki/images/2/22/Crab_Pot_Bundle.png' },
        { name: 'Specialty Fish', reward: '5x Dish O\' The Sea', slots: 4, roomName: 'Fish Tank', url: 'https://stardewvalleywiki.com/mediawiki/images/0/03/Specialty_Fish_Bundle.png' },

        // Boiler Room
        { name: 'Blacksmith\'s', reward: 'Furnace', slots: 3, roomName: 'Boiler Room', url: 'https://stardewvalleywiki.com/mediawiki/images/c/c8/Blacksmith_Bundle.png' },
        { name: 'Geologist\'s', reward: '5x Omni Geode', slots: 4, roomName: 'Boiler Room', url: 'https://stardewvalleywiki.com/mediawiki/images/6/68/Geologist%27s_Bundle.png' },
        { name: 'Adventurer\'s', reward: 'Small Magnet Ring', slots: 2, roomName: 'Boiler Room', url: 'https://stardewvalleywiki.com/mediawiki/images/5/5e/Adventurer%27s_Bundle.png' },

        // Bulletin Board
        { name: 'Chef\'s', reward: '3x Pink Cake', slots: 6, roomName: 'Bulletin Board', url: 'https://stardewvalleywiki.com/mediawiki/images/e/ea/Chef%27s_Bundle.png' },
        { name: 'Dye', reward: 'Seed Maker', slots: 6, roomName: 'Bulletin Board', url: 'https://stardewvalleywiki.com/mediawiki/images/a/a5/Dye_Bundle.png' },
        { name: 'Field Research', reward: 'Recycling Machine', slots: 4, roomName: 'Bulletin Board', url: 'https://stardewvalleywiki.com/mediawiki/images/8/86/Field_Research_Bundle.png' },
        { name: 'Fodder', reward: 'Heater', slots: 3, roomName: 'Bulletin Board', url: 'https://stardewvalleywiki.com/mediawiki/images/3/32/Fodder_Bundle.png' },
        { name: 'Enchanter\'s', reward: '5x Gold Bar', slots: 4, roomName: 'Bulletin Board', url: 'https://stardewvalleywiki.com/mediawiki/images/6/69/Enchanter%27s_Bundle.png' },

        // Vault
        { name: '2,500', reward: '3x Chocolate Cake', slots: 1, roomName: 'Vault', url: 'https://stardewvalleywiki.com/mediawiki/images/e/e2/2500_Bundle.png' },
        { name: '5,000', reward: '30x Quality Fertilizer', slots: 1, roomName: 'Vault', url: 'https://stardewvalleywiki.com/mediawiki/images/1/17/5000_Bundle.png' },
        { name: '10,000', reward: 'Lightning Rod', slots: 1, roomName: 'Vault', url: 'https://stardewvalleywiki.com/mediawiki/images/1/11/10000_Bundle.png' },
        { name: '25,000', reward: 'Crystalarium', slots: 1, roomName: 'Vault', url: 'https://stardewvalleywiki.com/mediawiki/images/a/a7/25000_Bundle.png' },
      ],
    });

    console.log('Bundle seeding completed.');

    // Create Items
    // Crafts Room
    await prisma.item.createMany({
      data: [
        // Spring Foraging Bundle
        { name: 'Wild Horseradish', quantity: 1, bundleName: 'Spring Foraging', url: 'https://stardewvalleywiki.com/mediawiki/images/9/90/Wild_Horseradish.png' },
        { name: 'Daffodil', quantity: 1, bundleName: 'Spring Foraging', url: 'https://stardewvalleywiki.com/mediawiki/images/4/4b/Daffodil.png' },
        { name: 'Leek', quantity: 1, bundleName: 'Spring Foraging', url: 'https://stardewvalleywiki.com/mediawiki/images/5/57/Leek.png' },
        { name: 'Dandelion', quantity: 1, bundleName: 'Spring Foraging', url: 'https://stardewvalleywiki.com/mediawiki/images/b/b1/Dandelion.png' },

        // Summer Foraging Bundle
        { name: 'Grape', quantity: 1, bundleName: 'Summer Foraging', url: 'https://stardewvalleywiki.com/mediawiki/images/c/c2/Grape.png' },
        { name: 'Spice Berry', quantity: 1, bundleName: 'Summer Foraging', url: 'https://stardewvalleywiki.com/mediawiki/images/c/c6/Spice_Berry.png' },
        { name: 'Sweet Pea', quantity: 1, bundleName: 'Summer Foraging', url: 'https://stardewvalleywiki.com/mediawiki/images/d/d9/Sweet_Pea.png' },

        // Fall Foraging Bundle
        { name: 'Common Mushroom', quantity: 1, bundleName: 'Fall Foraging', url: 'https://stardewvalleywiki.com/mediawiki/images/2/2e/Common_Mushroom.png' },
        { name: 'Wild Plum', quantity: 1, bundleName: 'Fall Foraging', url: 'https://stardewvalleywiki.com/mediawiki/images/3/3b/Wild_Plum.png' },
        { name: 'Hazelnut', quantity: 1, bundleName: 'Fall Foraging', url: 'https://stardewvalleywiki.com/mediawiki/images/3/31/Hazelnut.png' },
        { name: 'Blackberry', quantity: 1, bundleName: 'Fall Foraging', url: 'https://stardewvalleywiki.com/mediawiki/images/2/25/Blackberry.png' },

        // Winter Foraging Bundle
        { name: 'Winter Root', quantity: 1, bundleName: 'Winter Foraging', url: 'https://stardewvalleywiki.com/mediawiki/images/1/11/Winter_Root.png' },
        { name: 'Crystal Fruit', quantity: 1, bundleName: 'Winter Foraging', url: 'https://stardewvalleywiki.com/mediawiki/images/1/16/Crystal_Fruit.png' },
        { name: 'Snow Jam', quantity: 1, bundleName: 'Winter Foraging', url: 'https://stardewvalleywiki.com/mediawiki/images/3/3f/Snow_Yam.png' },
        { name: 'Crocus', quantity: 1, bundleName: 'Winter Foraging', url: 'https://stardewvalleywiki.com/mediawiki/images/2/2f/Crocus.png' },

        // Construction Bundle
        { name: 'Wood', quantity: 99, bundleName: 'Construction', url: 'https://stardewvalleywiki.com/mediawiki/images/d/df/Wood.png' },
        { name: 'Wood', quantity: 99, bundleName: 'Construction', url: 'https://stardewvalleywiki.com/mediawiki/images/d/df/Wood.png' },
        { name: 'Stone', quantity: 99, bundleName: 'Construction', url: 'https://stardewvalleywiki.com/mediawiki/images/d/d4/Stone.png' },
        { name: 'Hardwood', quantity: 10, bundleName: 'Construction', url: 'https://stardewvalleywiki.com/mediawiki/images/e/ed/Hardwood.png' },

        // Exotic Foraging Bundle
        { name: 'Coconut', quantity: 1, bundleName: 'Exotic Foraging', url: 'https://stardewvalleywiki.com/mediawiki/images/2/2f/Coconut.png' },
        { name: 'Cactus Fruit', quantity: 1, bundleName: 'Exotic Foraging', url: 'https://stardewvalleywiki.com/mediawiki/images/3/32/Cactus_Fruit.png' },
        { name: 'Cave Carrot', quantity: 1, bundleName: 'Exotic Foraging', url: 'https://stardewvalleywiki.com/mediawiki/images/3/34/Cave_Carrot.png' },
        { name: 'Red Mushroom', quantity: 1, bundleName: 'Exotic Foraging', url: 'https://stardewvalleywiki.com/mediawiki/images/e/e1/Red_Mushroom.png' },
        { name: 'Purple Mushroom', quantity: 1, bundleName: 'Exotic Foraging', url: 'https://stardewvalleywiki.com/mediawiki/images/4/4b/Purple_Mushroom.png' },
        { name: 'Maple Syrup', quantity: 1, bundleName: 'Exotic Foraging', url: 'https://stardewvalleywiki.com/mediawiki/images/6/6a/Maple_Syrup.png' },
        { name: 'Oak Resin', quantity: 1, bundleName: 'Exotic Foraging', url: 'https://stardewvalleywiki.com/mediawiki/images/4/40/Oak_Resin.png' },
        { name: 'Pine Tar', quantity: 1, bundleName: 'Exotic Foraging', url: 'https://stardewvalleywiki.com/mediawiki/images/c/ce/Pine_Tar.png' },
        { name: 'Morel', quantity: 1, bundleName: 'Exotic Foraging', url: 'https://stardewvalleywiki.com/mediawiki/images/b/b1/Morel.png' },
      ],
    });
    console.log('Items for Crafts Room seeding completed.')

    // Pantry
    await prisma.item.createMany({
      data: [
        // Spring Crops Bundle
        { name: 'Parsnip', quantity: 1, bundleName: 'Spring Crops', url: 'https://stardewvalleywiki.com/mediawiki/images/d/db/Parsnip.png' },
        { name: 'Green Bean', quantity: 1, bundleName: 'Spring Crops', url: 'https://stardewvalleywiki.com/mediawiki/images/5/5c/Green_Bean.png' },
        { name: 'Cauliflower', quantity: 1, bundleName: 'Spring Crops', url: 'https://stardewvalleywiki.com/mediawiki/images/a/aa/Cauliflower.png' },
        { name: 'Potato', quantity: 1, bundleName: 'Spring Crops', url: 'https://stardewvalleywiki.com/mediawiki/images/c/c2/Potato.png' },

        // Summer Crops Bundle
        { name: 'Tomato', quantity: 1, bundleName: 'Summer Crops', url: 'https://stardewvalleywiki.com/mediawiki/images/9/9d/Tomato.png' },
        { name: 'Hot Pepper', quantity: 1, bundleName: 'Summer Crops', url: 'https://stardewvalleywiki.com/mediawiki/images/f/f1/Hot_Pepper.png' },
        { name: 'Blueberry', quantity: 1, bundleName: 'Summer Crops', url: 'https://stardewvalleywiki.com/mediawiki/images/9/9e/Blueberry.png' },
        { name: 'Melon', quantity: 1, bundleName: 'Summer Crops', url: 'https://stardewvalleywiki.com/mediawiki/images/1/19/Melon.png' },

        // Fall Crops Bundle
        { name: 'Corn', quantity: 1, bundleName: 'Fall Crops', url: 'https://stardewvalleywiki.com/mediawiki/images/f/f8/Corn.png' },
        { name: 'Eggplant', quantity: 1, bundleName: 'Fall Crops', url: 'https://stardewvalleywiki.com/mediawiki/images/8/8f/Eggplant.png' },
        { name: 'Pumpkin', quantity: 1, bundleName: 'Fall Crops', url: 'https://stardewvalleywiki.com/mediawiki/images/6/64/Pumpkin.png' },
        { name: 'Yam', quantity: 1, bundleName: 'Fall Crops', url: 'https://stardewvalleywiki.com/mediawiki/images/5/52/Yam.png' },

        // Quality Crops Bundle
        { name: 'Gold Star Parsnip', quantity: 5, bundleName: 'Quality Crops', url: 'https://stardewvalleywiki.com/mediawiki/images/d/db/Parsnip.png' },
        { name: 'Gold Star Melon', quantity: 5, bundleName: 'Quality Crops', url: 'https://stardewvalleywiki.com/mediawiki/images/1/19/Melon.png' },
        { name: 'Gold Star Pumpkin', quantity: 5, bundleName: 'Quality Crops', url: 'https://stardewvalleywiki.com/mediawiki/images/6/64/Pumpkin.png' },
        { name: 'Gold Star Corn', quantity: 5, bundleName: 'Quality Crops', url: 'https://stardewvalleywiki.com/mediawiki/images/f/f8/Corn.png' },

        // Animal Bundle
        { name: 'Large Milk', quantity: 1, bundleName: 'Animal', url: 'https://stardewvalleywiki.com/mediawiki/images/6/67/Large_Milk.png' },
        { name: 'Large Brown Egg', quantity: 1, bundleName: 'Animal', url: 'https://stardewvalleywiki.com/mediawiki/images/9/91/Large_Brown_Egg.png' },
        { name: 'Large White Egg', quantity: 1, bundleName: 'Animal', url: 'https://stardewvalleywiki.com/mediawiki/images/5/5d/Large_Egg.png' },
        { name: 'Large Goat Milk', quantity: 1, bundleName: 'Animal', url: 'https://stardewvalleywiki.com/mediawiki/images/f/f2/Large_Goat_Milk.png' },
        { name: 'Wool', quantity: 1, bundleName: 'Animal', url: 'https://stardewvalleywiki.com/mediawiki/images/3/34/Wool.png' },
        { name: 'Duck Egg', quantity: 1, bundleName: 'Animal', url: 'https://stardewvalleywiki.com/mediawiki/images/3/31/Duck_Egg.png' },

        // Artisan Bundle
        { name: 'Truffle Oil', quantity: 1, bundleName: 'Artisan', url: 'https://stardewvalleywiki.com/mediawiki/images/3/3d/Truffle_Oil.png' },
        { name: 'Cloth', quantity: 1, bundleName: 'Artisan', url: 'https://stardewvalleywiki.com/mediawiki/images/5/51/Cloth.png' },
        { name: 'Goat Cheese', quantity: 1, bundleName: 'Artisan', url: 'https://stardewvalleywiki.com/mediawiki/images/c/c8/Goat_Cheese.png' },
        { name: 'Cheese', quantity: 1, bundleName: 'Artisan', url: 'https://stardewvalleywiki.com/mediawiki/images/a/a5/Cheese.png' },
        { name: 'Honey', quantity: 1, bundleName: 'Artisan', url: 'https://stardewvalleywiki.com/mediawiki/images/c/c6/Honey.png' },
        { name: 'Jelly', quantity: 1, bundleName: 'Artisan', url: 'https://stardewvalleywiki.com/mediawiki/images/0/05/Jelly.png' },
        { name: 'Apple', quantity: 1, bundleName: 'Artisan', url: 'https://stardewvalleywiki.com/mediawiki/images/7/7d/Apple.png' },
        { name: 'Apricot', quantity: 1, bundleName: 'Artisan', url: 'https://stardewvalleywiki.com/mediawiki/images/f/fc/Apricot.png' },
        { name: 'Orange', quantity: 1, bundleName: 'Artisan', url: 'https://stardewvalleywiki.com/mediawiki/images/4/43/Orange.png' },
        { name: 'Peach', quantity: 1, bundleName: 'Artisan', url: 'https://stardewvalleywiki.com/mediawiki/images/e/e2/Peach.png' },
        { name: 'Pomegranate', quantity: 1, bundleName: 'Artisan', url: 'https://stardewvalleywiki.com/mediawiki/images/1/1b/Pomegranate.png' },
        { name: 'Cherry', quantity: 1, bundleName: 'Artisan', url: 'https://stardewvalleywiki.com/mediawiki/images/2/20/Cherry.png' },
      ],
    });
    console.log('Items for Pantry seeding completed.')
    
    // Fish Tank
    await prisma.item.createMany({
      data: [
        // River Fishing Bundle
        { name: 'Sunfish', quantity: 1, bundleName: 'River Fish', url: 'https://stardewvalleywiki.com/mediawiki/images/5/56/Sunfish.png' },
        { name: 'Catfish', quantity: 1, bundleName: 'River Fish', url: 'https://stardewvalleywiki.com/mediawiki/images/9/99/Catfish.png' },
        { name: 'Shad', quantity: 1, bundleName: 'River Fish', url: 'https://stardewvalleywiki.com/mediawiki/images/e/ef/Shad.png' },
        { name: 'Tiger Trout', quantity: 1, bundleName: 'River Fish', url: 'https://stardewvalleywiki.com/mediawiki/images/0/01/Tiger_Trout.png' },

        // Lake Fish Bundle
        { name: 'Largemouth Bass', quantity: 1, bundleName: 'Lake Fish', url: 'https://stardewvalleywiki.com/mediawiki/images/1/11/Largemouth_Bass.png' },
        { name: 'Carp', quantity: 1, bundleName: 'Lake Fish', url: 'https://stardewvalleywiki.com/mediawiki/images/a/a8/Carp.png' },
        { name: 'Bullhead', quantity: 1, bundleName: 'Lake Fish', url: 'https://stardewvalleywiki.com/mediawiki/images/d/db/Bullhead.png' },
        { name: 'Sturgeon', quantity: 1, bundleName: 'Lake Fish', url: 'https://stardewvalleywiki.com/mediawiki/images/4/42/Sturgeon.png' },

        // Ocean Fish Bundle
        { name: 'Sardine', quantity: 1, bundleName: 'Ocean Fish', url: 'https://stardewvalleywiki.com/mediawiki/images/0/04/Sardine.png' },
        { name: 'Tuna', quantity: 1, bundleName: 'Ocean Fish', url: 'https://stardewvalleywiki.com/mediawiki/images/c/c5/Tuna.png' },
        { name: 'Red Snapper', quantity: 1, bundleName: 'Ocean Fish', url: 'https://stardewvalleywiki.com/mediawiki/images/d/d3/Red_Snapper.png' },
        { name: 'Tilapia', quantity: 1, bundleName: 'Ocean Fish', url: 'https://stardewvalleywiki.com/mediawiki/images/7/73/Tilapia.png' },

        // Night Fishing Bundle
        { name: 'Walleye', quantity: 1, bundleName: 'Night Fishing', url: 'https://stardewvalleywiki.com/mediawiki/images/0/05/Walleye.png' },
        { name: 'Bream', quantity: 1, bundleName: 'Night Fishing', url: 'https://stardewvalleywiki.com/mediawiki/images/8/82/Bream.png' },
        { name: 'Eel', quantity: 1, bundleName: 'Night Fishing', url: 'https://stardewvalleywiki.com/mediawiki/images/9/91/Eel.png' },

        // Crab Pot Bundle
        { name: 'Lobster', quantity: 1, bundleName: 'Crab Pot', url: 'https://stardewvalleywiki.com/mediawiki/images/9/9f/Lobster.png' },
        { name: 'Crayfish', quantity: 1, bundleName: 'Crab Pot', url: 'https://stardewvalleywiki.com/mediawiki/images/5/53/Crayfish.png' },
        { name: 'Crab', quantity: 1, bundleName: 'Crab Pot', url: 'https://stardewvalleywiki.com/mediawiki/images/6/63/Crab.png' },
        { name: 'Cockle', quantity: 1, bundleName: 'Crab Pot', url: 'https://stardewvalleywiki.com/mediawiki/images/a/ad/Cockle.png' },
        { name: 'Mussel', quantity: 1, bundleName: 'Crab Pot', url: 'https://stardewvalleywiki.com/mediawiki/images/a/aa/Mussel.png' },
        { name: 'Shrimp', quantity: 1, bundleName: 'Crab Pot', url: 'https://stardewvalleywiki.com/mediawiki/images/9/91/Shrimp.png' },
        { name: 'Snail', quantity: 1, bundleName: 'Crab Pot', url: 'https://stardewvalleywiki.com/mediawiki/images/d/d2/Snail.png' },
        { name: 'Periwinkle', quantity: 1, bundleName: 'Crab Pot', url: 'https://stardewvalleywiki.com/mediawiki/images/1/1d/Periwinkle.png' },
        { name: 'Oyster', quantity: 1, bundleName: 'Crab Pot', url: 'https://stardewvalleywiki.com/mediawiki/images/5/54/Oyster.png' },
        { name: 'Clam', quantity: 1, bundleName: 'Crab Pot', url: 'https://stardewvalleywiki.com/mediawiki/images/e/ed/Clam.png' },
        { name: 'Pufferfish', quantity: 1, bundleName: 'Specialty Fish', url: 'https://stardewvalleywiki.com/mediawiki/images/b/ba/Pufferfish.png' },
        { name: 'Ghostfish', quantity: 1, bundleName: 'Specialty Fish', url: 'https://stardewvalleywiki.com/mediawiki/images/7/72/Ghostfish.png' },
        { name: 'Sandfish', quantity: 1, bundleName: 'Specialty Fish', url: 'https://stardewvalleywiki.com/mediawiki/images/b/bb/Sandfish.png' },
        { name: 'Woodskip', quantity: 1, bundleName: 'Specialty Fish', url: 'https://stardewvalleywiki.com/mediawiki/images/9/97/Woodskip.png' },
      ],
    });
    console.log('Items for Fish Tank seeding completed.')

    // Boiler Room
    await prisma.item.createMany({
      data: [
        // Blacksmith's Bundle
        { name: 'Copper Bar', quantity: 1, bundleName: 'Blacksmith\'s', url: 'https://stardewvalleywiki.com/mediawiki/images/f/f1/Copper_Bar.png' },
        { name: 'Iron Bar', quantity: 1, bundleName: 'Blacksmith\'s', url: 'https://stardewvalleywiki.com/mediawiki/images/6/6c/Iron_Bar.png' },
        { name: 'Gold Bar', quantity: 1, bundleName: 'Blacksmith\'s', url: 'https://stardewvalleywiki.com/mediawiki/images/4/4e/Gold_Bar.png' },

        // Geologist's Bundle
        { name: 'Quartz', quantity: 1, bundleName: 'Geologist\'s', url: 'https://stardewvalleywiki.com/mediawiki/images/c/cf/Quartz.png' },
        { name: 'Earth Crystal', quantity: 1, bundleName: 'Geologist\'s', url: 'https://stardewvalleywiki.com/mediawiki/images/7/74/Earth_Crystal.png' },
        { name: 'Frozen Tear', quantity: 1, bundleName: 'Geologist\'s', url: 'https://stardewvalleywiki.com/mediawiki/images/e/ec/Frozen_Tear.png' },
        { name: 'Fire Quartz', quantity: 1, bundleName: 'Geologist\'s', url: 'https://stardewvalleywiki.com/mediawiki/images/5/5b/Fire_Quartz.png' },

        // Adventurer's Bundle
        { name: 'Slime', quantity: 99, bundleName: 'Adventurer\'s', url: 'https://stardewvalleywiki.com/mediawiki/images/3/38/Slime.png' },
        { name: 'Bat Wing', quantity: 10, bundleName: 'Adventurer\'s', url: 'https://stardewvalleywiki.com/mediawiki/images/3/35/Bat_Wing.png' },
        { name: 'Solar Essence', quantity: 1, bundleName: 'Adventurer\'s', url: 'https://stardewvalleywiki.com/mediawiki/images/f/f4/Solar_Essence.png' },
        { name: 'Void Essence', quantity: 1, bundleName: 'Adventurer\'s', url: 'https://stardewvalleywiki.com/mediawiki/images/1/1f/Void_Essence.png' },
      ],
    });
    console.log('Items for Boiler Room seeding completed.')

    // Bulletin Board
    await prisma.item.createMany({
      data: [
        // Chef's Bundle
        { name: 'Maple Syrup', quantity: 1, bundleName: 'Chef\'s', url: 'https://stardewvalleywiki.com/mediawiki/images/6/6a/Maple_Syrup.png' },
        { name: 'Fiddlehead Fern', quantity: 1, bundleName: 'Chef\'s', url: 'https://stardewvalleywiki.com/mediawiki/images/4/48/Fiddlehead_Fern.png' },
        { name: 'Truffle', quantity: 1, bundleName: 'Chef\'s', url: 'https://stardewvalleywiki.com/mediawiki/images/f/f2/Truffle.png' },

        // Dye Bundle
        { name: 'Poppy', quantity: 1, bundleName: 'Chef\'s', url: 'https://stardewvalleywiki.com/mediawiki/images/3/37/Poppy.png' },
        { name: 'Maki Roll', quantity: 1, bundleName: 'Chef\'s', url: 'https://stardewvalleywiki.com/mediawiki/images/b/b6/Maki_Roll.png' },
        { name: 'Fried Egg', quantity: 1, bundleName: 'Chef\'s', url: 'https://stardewvalleywiki.com/mediawiki/images/1/18/Fried_Egg.png' },
        { name: 'Red Mushroom', quantity: 1, bundleName: 'Dye', url: 'https://stardewvalleywiki.com/mediawiki/images/e/e1/Red_Mushroom.png' },
        { name: 'Sea Urchin', quantity: 1, bundleName: 'Dye', url: 'https://stardewvalleywiki.com/mediawiki/images/e/e7/Sea_Urchin.png' },
        { name: 'Sunflower', quantity: 1, bundleName: 'Dye', url: 'https://stardewvalleywiki.com/mediawiki/images/8/81/Sunflower.png' },
        { name: 'Duck Feather', quantity: 1, bundleName: 'Dye', url: 'https://stardewvalleywiki.com/mediawiki/images/f/f9/Duck_Feather.png' },
        { name: 'Aquamarine', quantity: 1, bundleName: 'Dye', url: 'https://stardewvalleywiki.com/mediawiki/images/a/a2/Aquamarine.png' },
        { name: 'Red Cabbage', quantity: 1, bundleName: 'Dye', url: 'https://stardewvalleywiki.com/mediawiki/images/2/2d/Red_Cabbage.png' },

        // Field Research Bundle
        { name: 'Purple Mushroom', quantity: 1, bundleName: 'Field Research', url: 'https://stardewvalleywiki.com/mediawiki/images/4/4b/Purple_Mushroom.png' },
        { name: 'Nautilus Shell', quantity: 1, bundleName: 'Field Research', url: 'https://stardewvalleywiki.com/mediawiki/images/a/a4/Nautilus_Shell.png' },
        { name: 'Chub', quantity: 1, bundleName: 'Field Research', url: 'https://stardewvalleywiki.com/mediawiki/images/b/bd/Chub.png' },
        { name: 'Frozen Geode', quantity: 1, bundleName: 'Field Research', url: 'https://stardewvalleywiki.com/mediawiki/images/b/bf/Frozen_Geode.png' },

        // Fodder Bundle
        { name: 'Wheat', quantity: 10, bundleName: 'Fodder', url: 'https://stardewvalleywiki.com/mediawiki/images/e/e2/Wheat.png' },
        { name: 'Hay', quantity: 10, bundleName: 'Fodder', url: 'https://stardewvalleywiki.com/mediawiki/images/a/aa/Hay.png' },
        { name: 'Apple', quantity: 3, bundleName: 'Fodder', url: 'https://stardewvalleywiki.com/mediawiki/images/7/7d/Apple.png' },

        // Enchanter's Bundle
        { name: 'Oak Resin', quantity: 1, bundleName: 'Enchanter\'s', url: 'https://stardewvalleywiki.com/mediawiki/images/4/40/Oak_Resin.png' },
        { name: 'Wine', quantity: 1, bundleName: 'Enchanter\'s', url: 'https://stardewvalleywiki.com/mediawiki/images/6/69/Wine.png' },
        { name: 'Rabbit\'s Foot', quantity: 1, bundleName: 'Enchanter\'s', url: 'https://stardewvalleywiki.com/mediawiki/images/c/ca/Rabbit%27s_Foot.png' },
        { name: 'Pomegranate', quantity: 1, bundleName: 'Enchanter\'s', url: 'https://stardewvalleywiki.com/mediawiki/images/1/1b/Pomegranate.png' },
      ],
    });
    console.log('Items for Bulletin Board seeding completed.')

    // Vault 
    await prisma.item.createMany({
      data: [
        { name: '2,500g', quantity: 1, bundleName: '2,500', url: 'https://stardewvalleywiki.com/mediawiki/images/1/10/Gold.png' },
        { name: '5,000g', quantity: 1, bundleName: '5,000', url: 'https://stardewvalleywiki.com/mediawiki/images/1/10/Gold.png' },
        { name: '10,000g', quantity: 1, bundleName: '10,000', url: 'https://stardewvalleywiki.com/mediawiki/images/1/10/Gold.png' },
        { name: '25,000g', quantity: 1, bundleName: '25,000', url: 'https://stardewvalleywiki.com/mediawiki/images/1/10/Gold.png' }
      ],
    });
    console.log('Items for Vault seeding completed.')

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
