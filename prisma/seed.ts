import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    // Achievements
    await prisma.achievement.createMany({
        data: [
            {
                name: 'Greenhorn',
                description: 'Earn 15,000g',
                url: 'https://stardewvalleywiki.com/mediawiki/images/1/1d/Achievement_Greenhorn.jpg',
            }, {
                name: 'Cowpoke',
                description: 'Earn 50,000g',
                url: 'https://stardewvalleywiki.com/mediawiki/images/2/24/Achievement_Cowpoke.jpg',
            }, {
                name: 'Homesteader',
                description: 'Earn 250,000g',
                url: 'https://stardewvalleywiki.com/mediawiki/images/f/fb/Achievement_Homesteader.jpg',
            }, {
                name: 'Millionaire',
                description: 'Earn 1,000,000g',
                url: 'https://stardewvalleywiki.com/mediawiki/images/9/91/Achievement_Millionaire.jpg',
            }, {
                name: 'Legend',
                description: 'Earn 10,000,000g',
                url: 'https://stardewvalleywiki.com/mediawiki/images/b/bb/Achievement_Legend.jpg',
            }, {
                name: 'A Complete Collection',
                description: 'Complete the museum collection',
                url: 'https://stardewvalleywiki.com/mediawiki/images/c/c6/Achievement_A_Complete_Collection.jpg',
            }, {
                name: 'A New Friend',
                description: 'Reach a 5-heart friend level with someone',
                url: 'https://stardewvalleywiki.com/mediawiki/images/c/cd/Achievement_A_New_Friend.jpg',
            }, {
                name: 'Best Friends',
                description: 'Reach a 10-heart friend level with someone',
                url: 'https://stardewvalleywiki.com/mediawiki/images/e/e8/Achievement_Best_Friends.jpg',
            }, {
                name: 'The Beloved Farmer',
                description: 'Reach a 10-heart friend level with 8 people',
                url: 'https://stardewvalleywiki.com/mediawiki/images/5/5d/Achievement_The_Beloved_Farmer.jpg',
            }, {
                name: 'Cliques',
                description: 'Reach a 5-heart friend level with 4 people',
                url: 'https://stardewvalleywiki.com/mediawiki/images/2/26/Achievement_Cliques.jpg',
            }, {
                name: 'Networking',
                description: 'Reach a 5-heart friend level with 10 people',
                url: 'https://stardewvalleywiki.com/mediawiki/images/5/5e/Achievement_Networking.jpg',
            }, {
                name: 'Popular',
                description: 'Reach a 5-heart friend level with 20 people',
                url: 'https://stardewvalleywiki.com/mediawiki/images/a/a4/Achievement_Popular.jpg',
            }, {
                name: 'Cook',
                description: 'Cook 10 different recipes',
                url: 'https://stardewvalleywiki.com/mediawiki/images/c/c6/Achievement_Cook.jpg',
            }, {
                name: 'Sous Chef',
                description: 'Cook 25 different recipes',
                url: 'https://stardewvalleywiki.com/mediawiki/images/4/44/Achievement_Sous_Chef.jpg',
            }, {
                name: 'Gourmet Chef',
                description: 'Cook every recipe',
                url: 'https://stardewvalleywiki.com/mediawiki/images/d/dd/Achievement_Gourmet_Chef.jpg',
            }, {
                name: 'Moving Up',
                description: 'Upgrade your house',
                url: 'https://stardewvalleywiki.com/mediawiki/images/b/bd/Achievement_Moving_Up.jpg',
            }, {
                name: 'Living Large',
                description: 'Upgrade your house to the maximum size',
                url: 'https://stardewvalleywiki.com/mediawiki/images/6/65/Achievement_Living_Large.jpg',
            }, {
                name: 'D.I.Y.',
                description: 'Craft 15 different items',
                url: 'https://stardewvalleywiki.com/mediawiki/images/2/2e/Achievement_DIY.jpg',
            }, {
                name: 'Artisan',
                description: 'Craft 30 different items',
                url: 'https://stardewvalleywiki.com/mediawiki/images/2/20/Achievement_Artisan.jpg',
            }, {
                name: 'Craft Master',
                description: 'Craft every item',
                url: 'https://stardewvalleywiki.com/mediawiki/images/6/60/Achievement_Master_Craft.jpg',
            }, {
                name: 'Fisherman',
                description: 'Catch 10 different fish',
                url: 'https://stardewvalleywiki.com/mediawiki/images/0/00/Achievement_Fisherman.jpg',
            }, {
                name: 'Ol\' Mariner',
                description: 'Catch 24 different fish',
                url: 'https://stardewvalleywiki.com/mediawiki/images/a/af/Achievement_Ol_Mariner.jpg',
            }, {
                name: 'Master Angler',
                description: 'Catch every fish',
                url: 'https://stardewvalleywiki.com/mediawiki/images/6/65/Achievement_Master_Angler.jpg',
            }, {
                name: 'Mother Catch',
                description: 'Catch 100 fish',
                url: 'https://stardewvalleywiki.com/mediawiki/images/0/0f/Achievement_Mother_Catch.jpg',
            }, {
                name: 'Treasure Trove',
                description: 'Donate 40 different items to the museum',
                url: 'https://stardewvalleywiki.com/mediawiki/images/5/55/Achievement_Treasure_Trove.jpg',
            }, {
                name: 'Gofer',
                description: 'Complete 10 \'Help Wanted\' requests',
                url: 'https://stardewvalleywiki.com/mediawiki/images/2/27/Achievement_Gofer.jpg',
            }, {
                name: 'A Big Help',
                description: 'Complete 40 \'Help Wanted\' requests',
                url: 'https://stardewvalleywiki.com/mediawiki/images/3/37/Achievement_A_Big_Help.jpg',
            }, {
                name: 'Polyculture',
                description: 'Ship 15 of each crop',
                url: 'https://stardewvalleywiki.com/mediawiki/images/7/7f/Achievement_Polyculture.jpg',
            }, {
                name: 'Monoculture',
                description: 'Ship 300 of one crop',
                url: 'https://stardewvalleywiki.com/mediawiki/images/2/2c/Achievement_Monoculture.jpg',
            }, {
                name: 'Full Shipment',
                description: 'Ship every item',
                url: 'https://stardewvalleywiki.com/mediawiki/images/b/b8/Achievement_Full_Shipment.jpg',
            }, {
                name: 'Prairie King',
                description: 'Beat \'Journey Of The Prairie King\'',
                url: 'https://stardewvalleywiki.com/mediawiki/images/7/79/Achievement_Prarie_King.jpg',
            }, {
                name: 'The Bottom',
                description: 'Reach the bottom of the mine',
                url: 'https://stardewvalleywiki.com/mediawiki/images/3/3b/Achievement_The_Bottom.jpg',
            }, {
                name: 'Local Legend',
                description: 'Restore the Pelican Town Community Center',
                url: 'https://stardewvalleywiki.com/mediawiki/images/7/72/Achievement_Local_Legend.jpg',
            }, {
                name: 'Joja Co. Member Of The Year',
                description: 'Purchase all Joja Community Development Projects',
                url: 'https://stardewvalleywiki.com/mediawiki/images/0/02/Achievement_Joja_Co._Member_Of_The_Year.jpg',
            }, {
                name: 'Mystery Of the Stardrops',
                description: 'Find every stardrop',
                url: 'https://stardewvalleywiki.com/mediawiki/images/e/e0/Achievement_Mystery_Of_The_Stardrops.jpg',
            }, {
                name: 'Full House',
                description: 'Get married and have 2 kids',
                url: 'https://stardewvalleywiki.com/mediawiki/images/e/e4/Achievement_Full_House.jpg',
            }, {
                name: 'Single Talent',
                description: 'Reach level 10 in a skill',
                url: 'https://stardewvalleywiki.com/mediawiki/images/6/6f/Achievement_Singular_Talent.jpg',
            }, {
                name: 'Master Of The Five Ways',
                description: 'Reach level 10 in every skill',
                url: 'https://stardewvalleywiki.com/mediawiki/images/4/49/Achievement_Master_Of_The_Five_Ways.jpg',
            }, {
                name: 'Protector Of The Valley',
                description: 'Complete all of the Adventure Guild Monster Slayer goals',
                url: 'https://stardewvalleywiki.com/mediawiki/images/6/66/Achievement_Protector_Of_The_Valley.jpg',
            }, {
                name: 'Fector\'s Challenge',
                description: 'Beat \'Journey Of The Prairie King\' without dying',
                url: 'https://stardewvalleywiki.com/mediawiki/images/f/f2/Achievement_Fector%27s_Challenge.jpg',
            }, {
                name: 'A Distant Shore',
                description: 'Reach Ginger Island',
                url: 'https://stardewvalleywiki.com/mediawiki/images/5/5b/Achievement_A_Distant_Shore.jpg',
            }, {
                name: 'Well-Read',
                description: 'Read every power book',
                url: 'https://stardewvalleywiki.com/mediawiki/images/1/1b/Achievement_Well-Read.jpg',
            }, {
                name: 'Two Thumbs Up',
                description: 'See a movie',
                url: 'https://stardewvalleywiki.com/mediawiki/images/c/ca/Achievement_Two_Thumbs_Up.jpg',
            }, {
                name: 'Blue Ribbon',
                description: 'Get 1st place in the Stardew Valley Fair',
                url: 'https://stardewvalleywiki.com/mediawiki/images/7/7a/Achievement_Blue_Ribbon.jpg',
            }, {
                name: 'An Unforgettable Soup',
                description: 'Delight the Governor',
                url: 'https://stardewvalleywiki.com/mediawiki/images/c/c8/Achievement_An_Unforgettable_Soup.jpg',
            }, {
                name: 'Good Neighbors',
                description: 'Help your forest neighbors grow their family',
                url: 'https://stardewvalleywiki.com/mediawiki/images/0/00/Achievement_Good_Neighbors.jpg',
            }, {
                name: 'Danger In The Deep',
                description: 'Reach the bottom of the dangerous mines',
                url: 'https://stardewvalleywiki.com/mediawiki/images/9/99/Achievement_Danger_In_The_Deep.jpg',
            }, {
                name: 'Infinite Power',
                description: 'Obtain the most powerful weapon (Infinity Blade)',
                url: 'https://stardewvalleywiki.com/mediawiki/images/0/0c/Achievement_Infinite_Power.jpg',
            }, {
                name: 'Perfection',
                description: 'Reach the summit',
                url: 'https://stardewvalleywiki.com/mediawiki/images/8/8b/Achievement_Perfection.jpg',
            }
        ]
    })
    console.log('Achievements created successfully');

    // Monster Eradication Goals
    await prisma.monsterEradicationGoal.createMany({
        data: [{
                monster: 'Slimes',
                quantity: 1000,
                url: 'https://stardewvalleywiki.com/mediawiki/images/5/51/Slime_Charmer_Ring.png',
                reward: 'Slime Charmer Ring'
            }, {
                monster: 'Void Spirits',
                quantity: 150,
                url: 'https://stardewvalleywiki.com/mediawiki/images/5/55/Savage_Ring.png',
                reward: 'Savage Ring'
            }, {
                monster: 'Bats',
                quantity: 200,
                url: 'https://stardewvalleywiki.com/mediawiki/images/a/a8/Vampire_Ring.png',
                reward: 'Vampire Ring'
            }, {
                monster: 'Skeletons',
                quantity: 50,
                url: 'https://stardewvalleywiki.com/mediawiki/images/1/12/Skeleton_Mask.png',
                reward: 'Skeleton Mask'
            }, {
                monster: 'Cave Insects',
                quantity: 80,
                url: 'https://stardewvalleywiki.com/mediawiki/images/3/35/Insect_Head.png',
                reward: 'Insect Head'
            }, {
                monster: 'Duggies',
                quantity: 30,
                url: 'https://stardewvalleywiki.com/mediawiki/images/0/08/Hard_Hat.png',
                reward: 'Hard Hat'
            }, {
                monster: 'Dust Sprites',
                quantity: 500,
                url: 'https://stardewvalleywiki.com/mediawiki/images/8/8b/Burglar%27s_Ring.png',
                reward: 'Burglar\'s Ring'
            }, {
                monster: 'Rock Crabs',
                quantity: 60,
                url: 'https://stardewvalleywiki.com/mediawiki/images/e/eb/Crabshell_Ring.png',
                reward: 'Crabshell Ring'
            }, {
                monster: 'Mummies',
                quantity: 100,
                url: 'https://stardewvalleywiki.com/mediawiki/images/c/c7/Arcane_Hat.png',
                reward: 'Arcane Hat'
            }, {
                monster: 'Pepper Rexes',
                quantity: 50,
                url: 'https://stardewvalleywiki.com/mediawiki/images/6/62/Knight%27s_Helmet.png',
                reward: 'Knight\'s Helmet'
            }, {
                monster: 'Serpents',
                quantity: 250,
                url: 'https://stardewvalleywiki.com/mediawiki/images/8/82/Napalm_Ring.png',
                reward: 'Napalm Ring'
            }, {
                monster: 'Magma Sprites',
                quantity: 150,
                url: 'https://stardewcommunitywiki.com/mediawiki/images/1/1d/Marlon_Icon.png',
                reward: 'Marlon\'s Phone Number'
            }
        ]
    })
    console.log('Monster Eradication Goals created successfully');

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
