const quizData = [
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Rome", "Berlin"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Earth", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "Who wrote the famous book Harry Potter",
        options: ["J.R.R. Tolkien", "George R.R. Martin", "J.K. Rowling", "C.S. Lewis"],
        answer: "J.K. Rowling"
    },
    {
        question: "In which year did World War II end?",
        options: ["1950", "1941", "1939", "1945"],
        answer: "1945"
    },
    {
        question: "What is the chemical symbol for the element gold?",
        options: ["Ag", "Au", "Pb", "Gd"],
        answer: "Au"
    },
    {
        question: "Which organ in the human body is responsible for pumping blood?",
        options: ["Brain", "Kidneys", "Heart", "Liver"],
        answer: "Heart"
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Antarctic", "Arabian", "Gobi", "Sahara"],
        answer: "Antarctic"
    },
    {
        question: "Who painted the famous artwork The Starry Night?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
        answer: "Vincent van Gogh"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Topaz", "Diamond", "Quartz", "Corundum"],
        answer: "Diamond"
    },
    {
        question: "Which element has the highest atomic number on the periodic table?",
        options: ["Radon", "Uranium", "Plutonium", "Oganesson"],
        answer: "Oganesson"
    },
    {
        question: "What is the capital of Italy?",
        options: ["Rome", "Paris", "Madrid", "Berlin"],
        answer: "Rome"
    },
    {
        question: "What is the tallest animal in the world?",
        options: ["Elephant", "Giraffe", "Lion", "Tiger"],
        answer: "Giraffe"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "What is the main language spoken in Brazil?",
        options: ["Spanish", "English", "Portuguese", "French"],
        answer: "Portuguese"
    },
    {
        question: "What is the smallest continent by land area?",
        options: ["Europe", "Australia", "Antarctica", "South America"],
        answer: "Australia"
    },
    {
        question: "Who is known as the 'Father of Computers'?",
        options: ["Bill Gates", "Steve Jobs", "Charles Babbage", "Alan Turing"],
        answer: "Charles Babbage"
    },
    {
        question: "What is the longest river in the world?",
        options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
        answer: "Nile"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "India"],
        answer: "Japan"
    },
    {
        question: "Which scientist is known for the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Marie Curie"],
        answer: "Albert Einstein"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale"
    },
    {
        question: "Which is the largest organ in the human body?",
        options: ["Heart", "Liver", "Skin", "Brain"],
        answer: "Skin"
    },
    {
        question: "What is the fastest land animal?",
        options: ["Cheetah", "Lion", "Tiger", "Elephant"],
        answer: "Cheetah"
    },
    {
        question: "Who was the first person to walk on the moon?",
        options: ["Yuri Gagarin", "Buzz Aldrin", "Neil Armstrong", "Michael Collins"],
        answer: "Neil Armstrong"
    },
    {
        question: "Which country is famous for its pyramids?",
        options: ["Greece", "Italy", "Egypt", "Mexico"],
        answer: "Egypt"
    },
    {
        question: "Which is the smallest planet in our solar system?",
        options: ["Mars", "Venus", "Mercury", "Pluto"],
        answer: "Mercury"
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        answer: "Ottawa"
    },
    {
        question: "Who discovered penicillin?",
        options: ["Alexander Fleming", "Marie Curie", "Isaac Newton", "Albert Einstein"],
        answer: "Alexander Fleming"
    },
    {
        question: "What is the largest land animal?",
        options: ["Elephant", "Hippopotamus", "Giraffe", "Rhinoceros"],
        answer: "Elephant"
    },
    {
        question: "What is the most spoken language in the world?",
        options: ["English", "Mandarin Chinese", "Spanish", "Hindi"],
        answer: "Mandarin Chinese"
    },
    {
        question: "Which country is home to the Great Barrier Reef?",
        options: ["New Zealand", "Australia", "Indonesia", "Fiji"],
        answer: "Australia"
    },
    {
        question: "What is the currency of the United Kingdom?",
        options: ["Euro", "Pound Sterling", "Dollar", "Yen"],
        answer: "Pound Sterling"
    },
    {
        question: "Who is the author of 'Harry Potter' series?",
        options: ["J.K. Rowling", "J.R.R. Tolkien", "Stephen King", "George R.R. Martin"],
        answer: "J.K. Rowling"
    },
    {
        question: "What is the largest island in the world?",
        options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
        answer: "Greenland"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        options: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Jane Goodall"],
        answer: "Marie Curie"
    },
    {
        question: "Which is the deepest ocean in the world?",
        options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Southern Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Which metal is liquid at room temperature?",
        options: ["Mercury", "Iron", "Aluminum", "Copper"],
        answer: "Mercury"
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        answer: "8"
    },
    {
        question: "What is the boiling point of water at sea level?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        answer: "100°C"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        answer: "Harper Lee"
    },
    {
        question: "What is the most abundant gas in the Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Nitrogen"
    },
    {
        question: "Which continent has the highest number of countries?",
        options: ["Africa", "Asia", "Europe", "South America"],
        answer: "Africa"
    },
    {
        question: "Who is known for painting the Sistine Chapel ceiling?",
        options: ["Michelangelo", "Raphael", "Donatello", "Leonardo da Vinci"],
        answer: "Michelangelo"
    },
    {
        question: "What is the main component of the sun?",
        options: ["Helium", "Oxygen", "Hydrogen", "Nitrogen"],
        answer: "Hydrogen"
    },
    {
        question: "Who is the author of 'The Odyssey'?",
        options: ["Homer", "Virgil", "Ovid", "Sophocles"],
        answer: "Homer"
    },
    {
        question: "Which instrument is used to measure atmospheric pressure?",
        options: ["Thermometer", "Barometer", "Anemometer", "Hygrometer"],
        answer: "Barometer"
    },
    {
        question: "What is the chemical symbol for sodium?",
        options: ["S", "Na", "So", "N"],
        answer: "Na"
    },
    {
        question: "Which planet is known as the Morning Star?",
        options: ["Venus", "Mercury", "Mars", "Jupiter"],
        answer: "Venus"
    },
    {
        question: "What is the smallest bone in the human body?",
        options: ["Stapes", "Incus", "Malleus", "Humerus"],
        answer: "Stapes"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "George Bernard Shaw", "Christopher Marlowe", "Thomas Middleton"],
        answer: "William Shakespeare"
    },
    {
        question: "Which element is known for its ability to form four bonds?",
        options: ["Carbon", "Nitrogen", "Oxygen", "Hydrogen"],
        answer: "Carbon"
    },
    {
        question: "What is the capital of Brazil?",
        options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        answer: "Brasília"
    },
    {
        question: "What is the largest city by population in the world?",
        options: ["New York", "Tokyo", "Shanghai", "Delhi"],
        answer: "Tokyo"
    },
    {
        question: "Which organ in the human body is responsible for detoxification?",
        options: ["Liver", "Kidneys", "Heart", "Lungs"],
        answer: "Liver"
    },
    {
        question: "Which famous scientist developed the theory of evolution by natural selection?",
        options: ["Charles Darwin", "Albert Einstein", "Isaac Newton", "Louis Pasteur"],
        answer: "Charles Darwin"
    },
    {
        question: "What is the longest river in Asia?",
        options: ["Mekong", "Ganges", "Yangtze", "Lena"],
        answer: "Yangtze"
    }    
];
