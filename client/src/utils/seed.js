const idols = [
    {
        id: 1,
        name: "Lebron James",
        charity: "Lebron James Family Foundation",
        description: "Recognizing the life-changing importance of education, The LeBRecognizing the life-changing importance of education, The LeBRecognizing the life-changing importance of education, The LeBron James Family Foundation invest its time, resources, and attention in the kids of LeBron's hometown of Akron, Ohio.",
        hometown: "Akron, OH",
        charity_url: "https://www.lebronjamesfamilyfoundation.org/",
        image: "lebron.jpg",
        twitter_url: "https://twitter.com/KingJames",
        idol_category: "Athlete"
    },
    {
        id: 2,
        name: "Cristiano Ronoldo",
        charity: "Lebron James Family Foundation",
        description: "Ronaldo is an ambassador for three major charities - Save the Children, Unicef and World Vision",
        hometown: "Funchal, Portugal",
        charity_url: "https://www.savethechildren.org/",
        image: "cristiano.jpg",
        twitter_url: "https://twitter.com/Cristiano",
        idol_category: "Athlete"
    },
    {
        id: 3,
        name: "Serena Williams",
        charity: "Serena Williams Foundation",
        description: "Williams is a Goodwill Ambassador of the United Nations Children's Fund (UNICEF) and has done extensive charity work with the organization since 2006. She has also established the Yetunde Price Nursing Scholarship in association with the California Community Foundation.",
        hometown: "Akron, OH",
        charity_url: "https://www.unicef.org/",
        image: "serena.jpg",
        twitter_url: "https://twitter.com/serenawilliams",
        idol_category: "Athlete"
    },
    {
        id: 4,
        name: "Roger Federer",
        charity: "The Roger Federer Foundation",
        description: "The Roger Federer Foundation supports educational projects located in the region of southern Africa and Switzerland. The programmes on the African continent focus on the improvement of the quality of early learning and basic education and in Switzerland on the promotion of extra-curricular activities for children affected by poverty. ",
        hometown: "Basel, Switzerland",
        charity_url: "https://www.rogerfedererfoundation.org/en/who-we-are/mission/",
        image: "roger.jpg",
        twitter_url: "https://twitter.com/rogerfederer",
        idol_category: "Athlete"
    },
    {
        id: 5,
        name: "Lindsey Vonn",
        charity: "Lindsey Vonn Foundation",
        description: "The Lindsey Vonn Foundation provides future generations the tools they need to pursue their passion, overcome obstacles, and reach their goals through scholarships, programs, and mentorship. A scholarship from the Foundation is a financial aid option for academic, athletic, and enrichment activities.",
        hometown: "St. Paul, MN",
        charity_url: "https://www.lindseyvonnfoundation.org/about",
        image: "lindsey.jpg",
        twitter_url: "https://twitter.com/lindseyvonn",
        idol_category: "Athlete"
    },
    {
        id: 6,
        name: "Tiger Woods",
        charity: "TGR Foundation",
        description: "TGR Foundation was established in 1996 by Tiger Woods and his father, Earl Woods, to create and support community-based programs that improve the health, education, and welfare of all children in America",
        hometown: "Cypress, CA",
        charity_url: "https://tgrfoundation.org/",
        image: "tiger.jpg",
        twitter_url: "https://twitter.com/TigerWoods",
        idol_category: "Athlete"
    },
    {
        id: 7,
        name: "Colin Kaepernick",
        charity: "Colin Kaepernick Foundation",
        description: "Originally fully funded by Kaepernick, he founded the global Know Your Rights Camps to advance the liberation of Black and Brown people through education, self-empowerment, mass-mobilization and the creation of new systems that elevate the next generation of change leaders.",
        hometown: "Turlock, CA",
        charity_url: "https://kaepernick7.com/",
        image: "colin.jpg",
        twitter_url: "https://twitter.com/Kaepernick7",
        idol_category: "Athlete"
    },
    {
        id: 8,
        name: "Derek Jeter",
        charity: "Turn 2 Foundation",
        description: "Turn 2's mission is to create and support signature programs and activities that motivate young people to turn away from drugs and alcohol and Turn 2 healthy lifestyles. Through these ventures, the Foundation strives to create outlets that promote and reward academic excellence, leadership development, and positive behavior.",
        hometown: "Akron, OH",
        charity_url: "https://www.mlb.com/turn-2-foundation",
        image: "derek.jpg",
        twitter_url: "https://twitter.com/derek_jeter_2",
        idol_category: "Athlete"
    },
    {
        id: 9,
        name: "Peyton Manning",
        charity: "PeyBack Foundation",
        description: "The PeyBack Foundation reaches out to children and families of all backgrounds. Children need opportunities through which they can learn and grow.  The Foundation strives to make these opportunities available to children who might not otherwise have the chance to participate and looks strongly upon abused and neglected children, Boys & Girls clubs, after-school programs, summer camps, and foster children.",
        hometown: "Akron, OH",
        charity_url: "http://www.peytonmanning.com/",
        image: "peyton.jpg",
        twitter_url: "https://twitter.com/peytonnmanning",
        idol_category: "Athlete"
    },
    {
        id: 10,
        name: "Ronnie James Dio",
        charity: "Stand Up and Shout Cancer Fund",
        description: "The PeyBack Foundation reaches out to children and families of all backgrounds. Children need opportunities through which they can learn and grow.  The Foundation strives to make these opportunities available to children who might not otherwise have the chance to participate and looks strongly upon abused and neglected children, Boys & Girls clubs, after-school programs, summer camps, and foster children.",
        hometown: "Portsmouth, New Hampshire",
        charity_url: "https://diocancerfund.org/",
        image: "dio.jpg",
        idol_category: "Musician"
    },
    {
        id: 11,
        name: "Elton John",
        charity: "EJAF",
        description: "Established by Sir Elton John in 1992, the Elton John AIDS Foundation (EJAF) is one of the world's leading organizations supporting innovative HIV prevention programs, efforts to eliminate stigma and discrimination associated with HIV/AIDS, and direct care and support services for people living with HIV/AIDS.",
        hometown: "Pinner, Middlesex, England",
        charity_url: "https://www.eltonjohnaidsfoundation.org/",
        image: "eltonjohn.jpg",
        idol_category: "Musician"
    },
    {
        id: 12,
        name: "Pearl Jam",
        charity: "Vitology Foundation",
        description: "The Vitalogy Foundation is a public non-profit organization that was founded in 2006 by the members of Pearl Jam and their manager. The Foundation supports the efforts of non-profit organizations doing commendable work in the fields of community health, the environment, arts & education and social change.",
        hometown: "Seattle, WA",
        charity_url: "https://pearljam.com/acts/vitalogy",
        image: "pearljam.jpg",
        idol_category: "Musician"
    },
    {
        id: 13,
        name: "Eric Church",
        charity: "Chief Cares",
        description: "Thus far, donations have been used to aid underprivileged families and children throughout Tennessee and Eric’s home state of North Carolina, as well as to help an orphanage in Nepal get beds, clothing, and offer schooling to children that would otherwise never get the chance.",
        hometown: "Granite Falls, NC",
        charity_url: "https://www.ericchurch.com/chief-cares",
        image: "ericchurch.jpg",
        idol_category: "Musician"
    },
    {
        id: 14,
        name: "Akon",
        charity: "Konfidence Foundation",
        description: "Founded by Aliaune “Akon” Thiam and Ms. Kine Gueye Thiam in 2007, the Konfidence Foundation is dedicated to empowering youth in Senegal, West Africa and the United States by promoting health and education, and supporting impoverished families.",
        hometown: "Senegal",
        charity_url: "http://konfidence.org/",
        image: "akon.jpg",
        idol_category: "Musician"
    },
    {
        id: 15,
        name: "Chance the Rapper",
        charity: "SocialWorks",
        description: "Founded by Grammy-award-winning musician and humanitarian Chance the Rapper, aims to empower the youth through the arts, education, and civic engagement. SocialWorks’ programming focuses on education, mental health, homelessness, and performing and literary arts.",
        hometown: "Chicago, IL",
        charity_url: "https://www.socialworkschi.org/",
        image: "ctrapper.jpg",
        idol_category: "Musician"
    },
    {
        id: 15,
        name: "Jon Bon Jovi",
        charity: "JBJ Soul Foundation",
        description: "Since 2006, the Jon Bon Jovi Soul Foundation has worked to break the cycle of hunger, poverty and homelessness through developing partnerships, creating programs and providing grant funding to support innovative community benefit organizations.",
        hometown: "Sayreville, NJ",
        charity_url: "https://jbjsf.org/",
        image: "bonjovi.jpg",
        idol_category: "Musician"
    },
];

export default idols;