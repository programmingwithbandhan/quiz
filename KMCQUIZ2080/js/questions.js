// group b

let div = document.querySelector('.container')
let questions = [
    'If (y – 70o) and (70o – y ) are corresponding angles between parallel lines, then the value of y is…….',
    'Who is the first space woman of the world?',
    'Who was the first Prime Minister after the end of Rana Rule in Nepal?',
    'As Ostrich is the largest Land Bird, what is the largest Sea Bird?',
    'How many legs do butterflies have?',
    'One kilobyte is equal to how many bytes?',
    'Which is the country with its map on the national flag?',
    'What name is given to the proportion of water vapour in the atmosphere?',
    'On a computer key board, which letter lies between “B” and “M”?',
    'When Nepal was declared republic nation?',
    'Which district of Nepal is stretched from the northern part of Nepal to southern in part of Nepal?',
    'Who was the first communist Prime Minister of Nepal?',
    'Which is the nearest star to Earth?',
    'What is the science that studies the structure of body called?',
    'When did Afghanistan become SAARC Member?',
    'Which famous British Band does Sir John Lenon belong to?',
    'Who is the author of the Harry Potter novel series?',
    'Which reknown actor plays the role of Bamkaji in the movie Kabbadi 4?',
    'Which basketball player is also known as the Baby faced assassin?',
    'Which dance form is a cultural hallmark of the Tamang community?'

]
let answers= [
    'Answer: 70 Degrees',
    'Valentina Tereskova',
    'Mohan Samsher',
    'Albatross',
    'Answer - 6',
    '1024 bytes',
    'Cyprus',
    'Humidity',
    'N',
    '15thJestha, 2065',
    'Dhadhing',
    'Manmohan Adhikari',
    'The Sun',
    'Anatomy',
    '2005 AD',
    'The Beatles',
    'J.K. Rowling',
    'Actor SaugatMalla',
    'Stephen Curry',
    'TamangSelo'
]
function showQuestion(num){

    div.innerHTML = `
    <style>
        .question{
            position: relative;
            top: 30%;
            font-size: 2em;
            display: grid;
            place-items: center;
            color: #fff;
        }
        .question a{
            margin-top: 35px;
        }
    </style>
    <a id="startBtn" class="btn btn-success fw-bold fs-3" onclick="location.href='./general.html'"> < BACK</a>
    <div class='question'>${questions[num]}
    <a id="" class="btn btn-success fw-bold fs-3" onclick="showAnswer(${num})">SHOW ANSWER >>></a>
    </div>
    
    `
    // alert(questions[num])
}
function showAnswer(num){

    div.innerHTML =   `

    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
    crossorigin="anonymous"
  />
    <a id="startBtn" class="btn btn-success fw-bold fs-3" onclick="location.href='./general.html'"> < BACK</a>
    <div class="container w-100 vh-100 text-primary"><h1 style="color: #fff; "> ${answers[num]} </h1> </div>
    <style>
    body{
     background: radial-gradient(
         circle,
         rgba(67, 69, 112, 1) 3%,
         rgba(35, 36, 57, 1) 60%
       );

 }

    .container{
        place-items: center;
        align- items: center;
        justify-content: center;
        height: 100%;
        display: flex;
        display: grid;
    }
    .btn{
        position: relative;
        top: 35%
    }
     </style>



`
}










let subjectQuestions = [
        science = [
            'What is the process called to remove excess of water from a plant?',
            'What is the locomotory organ of euglena',
            'Which component of a cell makes a fruit colourful',
            'What is the SI unit of weight of a body?',
            'What is the range of temperature in laboratory thermometer?'
        ],
        mathematics = [
            'Sabina has stamp from different countries, 1/3rd of them is from Nepal’s stamp. If she has 36 Nepali stamps. How many stamps she had in total?',
            'Two angle of a triangle measures 35 degrees and 65 degrees. What is the measure of the third angle of the triangle?',
            'What is the simplest form of fraction 16/24?',
            'There are 35 sweets and we should give away these sweets for 7 children, how many sweets each child will have?',
            'What is the mixed fraction of a proper fraction 5/2?'
        ],
        literature = [
            'Who is the writer of the poem ‘Sky, Sea, Shore’?',
            'Which word the poet has used to rhyme with ‘Laze’?',
            'What is the synonym of the word Vexed?',
            'What did Dedalus use to bid the feathers?',
            'Who is the author of the story ‘The Magic Shop’?'
        ],
        social = [
            'What is the national game of Nepal?',
            'Who is known as the iron man of Nepali Politics?',
            'What is the full form of UNESCO?',
            'Who was the first elected Prime Minister of Nepal?',
            'If “Margaret Thatcher” is known as the IRON LADY, who is known as the NIGHTMARE OF THE EUROPE” '
        ],
        culture = [
            'Which is the oldest temple of Nepal?',
            '“Geeta” is the religious books of which religion?',
            'In which place did Ram live during 14 years exile?',
            'Where is the kingdom Tilaurakot of king Suddhodan now?',
            'Where is the tallest statue of lord Shiva in Nepal located?'
        ],
        sports = [
            'Who Bagged 4 consecutive Gold Medals in SAF Games?',
            'Who was the first Nepali player to get international medal?',
            'Which popular English Footballer visited Nepal during 2072 earthquake?',
            'What is the national game of China?',
            'What is the full form of ANFA?'
        ],
        computer = [
            'Shortcut Key to minimize all currently running programs',
            'What do we call a group of computers and other devices connected together in close proximity',
            'Who is father of computer',
            'Who invented mouse',
            'Shortcut key to permanently delete a file from a system?'
        ],
        health = [
            'How many bones are there in an adult body?',
            'Which part of our body oxygenates the blood?',
            'How many blood groups are there?',
            'Which virus causes common cold?',
            'Which part of our body is affected by meningitis?'
        ],
        geography = [
            'Which is the Nepals deepest valley?',
            'Which is the nearest mountain from Kathmandu?',
            'How long is the Araniko Highway',
            'Name the city which is also called the gateway of Nepal?',
            'What is the average length of Nepal?'
        ],
        history = [
            'When did the politician Girija Prasad Koirala die?',
            'Who started the tradition of using Golden coins in Nepal?',
            'Which female singer recorded song first time in Nepal?',
            'Who is the first scientist of Nepal?',
            'When was Nepal Scout Founded?'
        ]

]
let prnt = console.log.bind(console)

// prnt(subjectQuestions[0][0])
l