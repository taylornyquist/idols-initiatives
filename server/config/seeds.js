const db = require('./connection');
const { User, Idol, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        {
            name: 'Athlete',
            id: 0
        },
        {
            name: 'Musician',
            id: 1
        },
        {
            name: 'Entrepreneur',
            id: 2
        },
        {
            name: 'Local Hero',
            id: 3
        }
    ]);

    console.log('categories seeded')

    await Idol.deleteMany();

    const idols = await Idol.insertMany([
        {
            name: "Lebron James",
            charity: "Lebron James Family Foundation",
            description: "Recognizing the life-changing importance of education, The LeBRecognizing the life-changing importance of education, The LeBRecognizing the life-changing importance of education, The LeBron James Family Foundation invest its time, resources, and attention in the kids of LeBron's hometown of Akron, Ohio.",
            hometown: "Akron, OH",
            charity_url: "https://www.lebronjamesfamilyfoundation.org/",
            image: "lebron.jpg",
            twitter_url: "https://twitter.com/KingJames",
            idol_category: categories[0]._id
        },
        {
            name: "Cristiano Ronoldo",
            charity: "Save the Children",
            description: "Ronaldo is an ambassador for three major charities - Save the Children, Unicef and World Vision",
            hometown: "Funchal, Portugal",
            charity_url: "https://www.savethechildren.org/",
            image: "cristiano.jpg",
            twitter_url: "https://twitter.com/Cristiano",
            idol_category: categories[0]._id
        },
        {
            name: "Serena Williams",
            charity: "Serena Williams Foundation",
            description: "Williams is a Goodwill Ambassador of the United Nations Children's Fund (UNICEF) and has done extensive charity work with the organization since 2006. She has also established the Yetunde Price Nursing Scholarship in association with the California Community Foundation.",
            hometown: "Akron, OH",
            charity_url: "https://www.unicef.org/",
            image: "serena.jpg",
            twitter_url: "https://twitter.com/serenawilliams",
            idol_category: categories[0]._id
        },
        {
            name: "Roger Federer",
            charity: "The Roger Federer Foundation",
            description: "The Roger Federer Foundation supports educational projects located in the region of southern Africa and Switzerland. The programmes on the African continent focus on the improvement of the quality of early learning and basic education and in Switzerland on the promotion of extra-curricular activities for children affected by poverty. ",
            hometown: "Basel, Switzerland",
            charity_url: "https://www.rogerfedererfoundation.org/en/who-we-are/mission/",
            image: "roger.jpg",
            twitter_url: "https://twitter.com/rogerfederer",
            idol_category: categories[0]._id
        },
        {
            name: "Lindsey Vonn",
            charity: "Lindsey Vonn Foundation",
            description: "The Lindsey Vonn Foundation provides future generations the tools they need to pursue their passion, overcome obstacles, and reach their goals through scholarships, programs, and mentorship. A scholarship from the Foundation is a financial aid option for academic, athletic, and enrichment activities.",
            hometown: "St. Paul, MN",
            charity_url: "https://www.lindseyvonnfoundation.org/about",
            image: "lindsey.jpg",
            twitter_url: "https://twitter.com/lindseyvonn",
            idol_category: categories[0]._id
        },
        {
            name: "Tiger Woods",
            charity: "TGR Foundation",
            description: "TGR Foundation was established in 1996 by Tiger Woods and his father, Earl Woods, to create and support community-based programs that improve the health, education, and welfare of all children in America",
            hometown: "Cypress, CA",
            charity_url: "https://tgrfoundation.org/",
            image: "tiger.jpg",
            twitter_url: "https://twitter.com/TigerWoods",
            idol_category: categories[0]._id
        },
        {
            name: "Colin Kaepernick",
            charity: "Colin Kaepernick Foundation",
            description: "Originally fully funded by Kaepernick, he founded the global Know Your Rights Camps to advance the liberation of Black and Brown people through education, self-empowerment, mass-mobilization and the creation of new systems that elevate the next generation of change leaders.",
            hometown: "Turlock, CA",
            charity_url: "https://kaepernick7.com/",
            image: "colin.jpg",
            twitter_url: "https://twitter.com/Kaepernick7",
            idol_category: categories[0]._id
        },
        {
            name: "Derek Jeter",
            charity: "Turn 2 Foundation",
            description: "Turn 2's mission is to create and support signature programs and activities that motivate young people to turn away from drugs and alcohol and Turn 2 healthy lifestyles. Through these ventures, the Foundation strives to create outlets that promote and reward academic excellence, leadership development, and positive behavior.",
            hometown: "Akron, OH",
            charity_url: "https://www.mlb.com/turn-2-foundation",
            image: "derek.jpg",
            twitter_url: "https://twitter.com/derek_jeter_2",
            idol_category: categories[0]._id
        },
        {
            name: "Peyton Manning",
            charity: "PeyBack Foundation",
            description: "The PeyBack Foundation reaches out to children and families of all backgrounds. Children need opportunities through which they can learn and grow.  The Foundation strives to make these opportunities available to children who might not otherwise have the chance to participate and looks strongly upon abused and neglected children, Boys & Girls clubs, after-school programs, summer camps, and foster children.",
            hometown: "Akron, OH",
            charity_url: "http://www.peytonmanning.com/",
            image: "peyton.jpg",
            twitter_url: "https://twitter.com/peytonnmanning",
            idol_category: categories[0]._id
        },
        {
            name: "Ronnie James Dio",
            charity: "Stand Up and Shout Cancer Fund",
            description: "The PeyBack Foundation reaches out to children and families of all backgrounds. Children need opportunities through which they can learn and grow.  The Foundation strives to make these opportunities available to children who might not otherwise have the chance to participate and looks strongly upon abused and neglected children, Boys & Girls clubs, after-school programs, summer camps, and foster children.",
            hometown: "Portsmouth, New Hampshire",
            charity_url: "https://diocancerfund.org/",
            image: "dio.jpg",
            twitter_url: "https://twitter.com/OfficialRJDio",
            idol_category: categories[1]._id
        },
        {
            name: "Elton John",
            charity: "EJAF",
            description: "Established by Sir Elton John in 1992, the Elton John AIDS Foundation (EJAF) is one of the world's leading organizations supporting innovative HIV prevention programs, efforts to eliminate stigma and discrimination associated with HIV/AIDS, and direct care and support services for people living with HIV/AIDS.",
            hometown: "Pinner, Middlesex, England",
            charity_url: "https://www.eltonjohnaidsfoundation.org/",
            image: "eltonjohn.jpg",
            twitter_url: "https://twitter.com/eltonofficial",
            idol_category: categories[1]._id
        },
        {
            name: "Pearl Jam",
            charity: "Vitology Foundation",
            description: "The Vitalogy Foundation is a public non-profit organization that was founded in 2006 by the members of Pearl Jam and their manager. The Foundation supports the efforts of non-profit organizations doing commendable work in the fields of community health, the environment, arts & education and social change.",
            hometown: "Seattle, WA",
            charity_url: "https://pearljam.com/acts/vitalogy",
            image: "pearljam.jpg",
            twitter_url: "https://twitter.com/PearlJam",
            idol_category: categories[1]._id
        },
        {
            name: "Eric Church",
            charity: "Chief Cares",
            description: "Thus far, donations have been used to aid underprivileged families and children throughout Tennessee and Eric’s home state of North Carolina, as well as to help an orphanage in Nepal get beds, clothing, and offer schooling to children that would otherwise never get the chance.",
            hometown: "Granite Falls, NC",
            charity_url: "https://www.ericchurch.com/chief-cares",
            image: "ericchurch.jpg",
            twitter_url: "https://twitter.com/ericchurch",
            idol_category: categories[1]._id
        },
        {
            name: "Akon",
            charity: "Konfidence Foundation",
            description: "Founded by Aliaune “Akon” Thiam and Ms. Kine Gueye Thiam in 2007, the Konfidence Foundation is dedicated to empowering youth in Senegal, West Africa and the United States by promoting health and education, and supporting impoverished families.",
            hometown: "Senegal",
            charity_url: "http://konfidence.org/",
            image: "akon.jpg",
            twitter_url: "https://twitter.com/Akon",
            idol_category: categories[1]._id
        },
        {
            name: "Chance the Rapper",
            charity: "SocialWorks",
            description: "Founded by Grammy-award-winning musician and humanitarian Chance the Rapper, aims to empower the youth through the arts, education, and civic engagement. SocialWorks’ programming focuses on education, mental health, homelessness, and performing and literary arts.",
            hometown: "Chicago, IL",
            charity_url: "https://www.socialworkschi.org/",
            image: "ctrapper.jpg",
            twitter_url: "https://twitter.com/chancetherapper",
            idol_category: categories[1]._id
        },
        {
            name: "Jon Bon Jovi",
            charity: "JBJ Soul Foundation",
            description: "Since 2006, the Jon Bon Jovi Soul Foundation has worked to break the cycle of hunger, poverty and homelessness through developing partnerships, creating programs and providing grant funding to support innovative community benefit organizations.",
            hometown: "Sayreville, NJ",
            charity_url: "https://jbjsf.org/",
            image: "bonjovi.jpg",
            twitter_url: "https://twitter.com/jonbonjovi",
            idol_category: categories[1]._id
        },
        {
            name: "Warren Buffett",
            charity: "The Giving Pledge",
            description: "Buffett has said he will give away more than 99% of his fortune, with the bulk going to the Bill and Melinda Gates Foundation; a charity founded by Buffett's late wife, Susan Thompson Buffett; and charities run by each of his three children.",
            hometown: "Omaha, NE",
            charity_url: "https://givingpledge.org/",
            image: "buffett.jpg",
            twitter_url: "https://twitter.com/warrenbuffett",
            idol_category: categories[2]._id
        },
        {
            name: "Bill Gates",
            charity: "Bill & Melinda Gates Foundation",
            description: "In developing countries, we focus on improving people’s health and wellbeing, helping individuals lift themselves out of hunger and extreme poverty. In the United States, we seek to ensure that all people—especially those with the fewest resources—can access the opportunities they need to succeed in school and life.",
            hometown: "Seattle, WA",
            charity_url: "https://www.gatesfoundation.org/",
            image: "gates.jpg",
            twitter_url: "https://twitter.com/BillGates",
            idol_category: categories[2]._id
        },
        {
            name: "Grant Emerson with Delta Rae",
            charity: "HUMANGOODKIND",
            description: "Pictured in 2018, this start up by band member and Full Stack Developer Grant Emerson sends a portion of all proceeds to charities that promote social justice and equality.",
            hometown: "Durham, NC",
            charity_url: "https://www.humangoodkind.com/",
            image: "deltarae.jpg",
            twitter_url: "https://twitter.com/DeltaRae",
            idol_category: categories[1]._id
        },
        {
            name: "Rick Schaden",
            charity: "America’s Road Home",
            description: "America’s Road Home works with government and nonprofit agencies to call attention to successful programs striving to end homelessness or alleviate its effects. Through a model of “causal capitalism,” ARH assists in fostering connections between donor funds and hundreds of organizations around the country that deliver direct services to families.",
            hometown: "Denver, CO",
            charity_url: "http://www.rickschaden.com/americas-road-home-helps-homeless-families/",
            image: "Rick_Schaden.jpg",
            twitter_url: "https://twitter.com/rickschaden",
            idol_category: categories[2]._id
        },
        {
            name: "Tony Hawk",
            charity: "Tony Hawk Foundation",
            description: "To-date, almost 600 recipients of grants from The Skatepark Project have opened their skateparks. These parks receive more than 6-million visits annually by youth who benefit from the active lifestyle and camaraderie the facilities promote.",
            hometown: "San Diego, CA",
            charity_url: "https://skatepark.org/",
            image: "t_hawk.jpg",
            twitter_url: "https://twitter.com/tonyhawk",
            idol_category: categories[0]._id
        },
        {
            name: "Craig Newmark",
            charity: "Thunder Bay, Ontario",
            description: "This founder of the famous Craigslist supports and funds nonprofit journalism, adopting the guidelines of the American Press Institute. \"Those who do well should take less and give more. Let's each do our part to serve the public interest. We need all hands on deck.\"",
            hometown: "Thunder Bay, Ontario",
            charity_url: "https://craignewmarkphilanthropies.org/",
            image: "craig-newmark.jpg",
            twitter_url: "https://twitter.com/craignewmark",
            idol_category: categories[2]._id
        },
        {
            name: "Jack and Kim Johnson",
            charity: "The Johnson Ohana Foundation",
            description: "Jack Johnson used every cent of his 2008 tour to start the Johnson Ohana Charitable Foundation, \“an endowment founded by Jack and Kim Johnson to support environmental art and music education now and into the future.\”",
            hometown: "Oahu, Hawaii",
            charity_url: "https://johnsonohana.org/about",
            image: "jack_johnson.jpg",
            twitter_url: "https://twitter.com/jackjohnson",
            idol_category: categories[1]._id
        },
        {
            name: "Rhonda Kremer",
            charity: "Volunteer Work",
            description: "Professional french horn player by night, full stack developer by day and volunteer tutor to a cohort of people who would be lost without her. We have no charity at this time, but please enjoy her french horn channel on youtube.",
            hometown: "Slack Channel Near You",
            charity_url: "https://www.youtube.com/playlist?list=PL0PQUYopKD-IPXoOc7TiqYCO09uQUhbVL",
            image: "rhonda.jpg",
            twitter_url: "https://twitter.com/rhonduhkremer",
            idol_category: categories[3]._id
        }
    ]);

    console.log('idols seeded');

    await User.deleteMany();

    await User.create({
        firstName: "Mike",
        lastName: 'Portu',
        username: "mportu",
        email: "mike@test.com",
        password: "password123",
        admin: 1,
        idols: [
            idols[1]._id, idols[4]._id, idols[10]._id
        ]
    });

    console.log('users seeded');

    process.exit();
});