const quizData = [
    {
        question: "What is the largest internal organ in the human body?",
        options: ["Liver", "Lungs", "Kidneys", "Heart"],
        answer: "Liver"
    },
    {
        question: "Which planet is the hottest in our solar system?",
        options: ["Mercury", "Venus", "Mars", "Jupiter"],
        answer: "Venus"
    },
    {
        question: "What is the chemical symbol for potassium?",
        options: ["P", "Pt", "K", "Po"],
        answer: "K"
    },
    {
        question: "In which country did the Industrial Revolution begin?",
        options: ["Germany", "United States", "France", "United Kingdom"],
        answer: "United Kingdom"
    },
    {
        question: "Who was the 16th President of the United States?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "Andrew Johnson"],
        answer: "Abraham Lincoln"
    },
    {
        question: "Which ancient civilization is known for building the pyramids of Giza?",
        options: ["Mesopotamian", "Roman", "Egyptian", "Mayan"],
        answer: "Egyptian"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Ringgit"],
        answer: "Yen"
    },
    {
        question: "Which novel begins with the line 'It was the best of times, it was the worst of times'?",
        options: ["Great Expectations", "A Tale of Two Cities", "Pride and Prejudice", "Jane Eyre"],
        answer: "A Tale of Two Cities"
    },
    {
        question: "What is the main ingredient in traditional Japanese miso soup?",
        options: ["Soybean paste", "Seaweed", "Rice", "Tofu"],
        answer: "Soybean paste"
    },
    {
        question: "Which physicist is known for the discovery of electromagnetic induction?",
        options: ["Michael Faraday", "James Clerk Maxwell", "Nikola Tesla", "Albert Einstein"],
        answer: "Michael Faraday"
    },
    {
        question: "Which element has the atomic number 79?",
        options: ["Gold", "Silver", "Copper", "Platinum"],
        answer: "Gold"
    },
    {
        question: "What is the largest island in the Mediterranean Sea?",
        options: ["Sicily", "Crete", "Cyprus", "Sardinia"],
        answer: "Sicily"
    },
    {
        question: "Which country is known for inventing the telephone?",
        options: ["United States", "Germany", "France", "Italy"],
        answer: "United States"
    },
    {
        question: "What is the chemical symbol for the element silver?",
        options: ["Si", "Ag", "Au", "Sb"],
        answer: "Ag"
    },
    {
        question: "Who was the first female Prime Minister of the United Kingdom?",
        options: ["Margaret Thatcher", "Theresa May", "Priti Patel", "Harriet Harman"],
        answer: "Margaret Thatcher"
    },
    {
        question: "Which novel features the character Atticus Finch?",
        options: ["To Kill a Mockingbird", "The Great Gatsby", "1984", "Moby-Dick"],
        answer: "To Kill a Mockingbird"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: "Canberra"
    },
    {
        question: "What is the most common gas in the Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        answer: "Nitrogen"
    },
    {
        question: "Who painted 'The Persistence of Memory'?",
        options: ["Salvador Dalí", "Pablo Picasso", "Henri Matisse", "Marc Chagall"],
        answer: "Salvador Dalí"
    },
    {
        question: "Which famous battle took place in 1066?",
        options: ["Battle of Hastings", "Battle of Waterloo", "Battle of Gettysburg", "Battle of Thermopylae"],
        answer: "Battle of Hastings"
    },
    {
        question: "What is the capital of Sweden?",
        options: ["Oslo", "Stockholm", "Helsinki", "Copenhagen"],
        answer: "Stockholm"
    },
    {
        question: "Which scientist is famous for his work on the structure of DNA?",
        options: ["James Watson", "Francis Crick", "Rosalind Franklin", "Maurice Wilkins"],
        answer: "James Watson"
    },
    {
        question: "What is the hardest naturally occurring substance on Earth?",
        options: ["Gold", "Diamond", "Corundum", "Platinum"],
        answer: "Diamond"
    },
    {
        question: "Which composer wrote the 'Moonlight Sonata'?",
        options: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Franz Schubert"],
        answer: "Ludwig van Beethoven"
    },
    {
        question: "Which element is the primary component of natural gas?",
        options: ["Methane", "Ethane", "Propane", "Butane"],
        answer: "Methane"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "Which ancient wonder was located in Babylon?",
        options: ["Great Pyramid of Giza", "Hanging Gardens", "Statue of Zeus", "Colossus of Rhodes"],
        answer: "Hanging Gardens"
    },
    {
        question: "Who was the famous nurse during the Crimean War?",
        options: ["Florence Nightingale", "Clara Barton", "Mary Seacole", "Dorothea Dix"],
        answer: "Florence Nightingale"
    },
    {
        question: "What is the main language spoken in Egypt?",
        options: ["Arabic", "English", "French", "Spanish"],
        answer: "Arabic"
    },
    {
        question: "Which historical figure is known for the conquest of the Inca Empire?",
        options: ["Hernán Cortés", "Francisco Pizarro", "Vasco da Gama", "Ferdinand Magellan"],
        answer: "Francisco Pizarro"
    },
    {
        question: "Which planet in our solar system has the most moons?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: "Saturn"
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Liver", "Lungs", "Skin"],
        answer: "Skin"
    },
    {
        question: "Who is the author of the 'A Song of Ice and Fire' series?",
        options: ["J.K. Rowling", "J.R.R. Tolkien", "George R.R. Martin", "Stephen King"],
        answer: "George R.R. Martin"
    },
    {
        question: "Which river flows through Egypt?",
        options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
        answer: "Nile"
    },
    {
        question: "What is the chemical symbol for iron?",
        options: ["Fe", "Ir", "I", "In"],
        answer: "Fe"
    },
    {
        question: "What is the currency used in South Korea?",
        options: ["Won", "Yen", "Dollar", "Euro"],
        answer: "Won"
    },
    {
        question: "Which famous scientist developed the laws of motion and universal gravitation?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
        answer: "Isaac Newton"
    },
    {
        question: "What is the tallest building in the world as of 2024?",
        options: ["Burj Khalifa", "Shanghai Tower", "Abraj Al-Bait Clock Tower", "One World Trade Center"],
        answer: "Burj Khalifa"
    },
    {
        question: "What is the largest animal on Earth?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
        answer: "Blue Whale"
    },
    {
        question: "In which country would you find the historical site of Petra?",
        options: ["Jordan", "Egypt", "Greece", "Turkey"],
        answer: "Jordan"
    }        
]