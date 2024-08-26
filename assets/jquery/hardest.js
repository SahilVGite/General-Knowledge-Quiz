const quizData = [
    {
        question: "What is the name of the process by which plants convert light energy into chemical energy?",
        options: ["Photosynthesis", "Respiration", "Transpiration", "Fermentation"],
        answer: "Photosynthesis"
    },
    {
        question: "Which physicist is known for the principle of uncertainty?",
        options: ["Werner Heisenberg", "Niels Bohr", "Erwin Schrödinger", "Paul Dirac"],
        answer: "Werner Heisenberg"
    },
    {
        question: "What is the most abundant isotope of hydrogen?",
        options: ["Deuterium", "Tritium", "Protium", "Neutronium"],
        answer: "Protium"
    },
    {
        question: "Who was the last Tsar of Russia?",
        options: ["Nicholas II", "Alexander III", "Peter the Great", "Ivan IV"],
        answer: "Nicholas II"
    },
    {
        question: "What is the name of the phenomenon where the light from distant galaxies shifts towards the red end of the spectrum?",
        options: ["Redshift", "Blueshift", "Doppler Effect", "Cosmic Microwave Background"],
        answer: "Redshift"
    },
    {
        question: "What is the rarest naturally occurring element on Earth?",
        options: ["Osmium", "Rhodium", "Ruthenium", "Rhenium"],
        answer: "Rhenium"
    },
    {
        question: "What ancient language is known for the Rosetta Stone's inscription?",
        options: ["Hieroglyphic", "Cuneiform", "Sumerian", "Latin"],
        answer: "Hieroglyphic"
    },
    {
        question: "Who was the first person to win two Nobel Prizes?",
        options: ["Marie Curie", "Albert Einstein", "Linus Pauling", "Gerty Cori"],
        answer: "Marie Curie"
    },
    {
        question: "Which type of star is the most common in the Milky Way galaxy?",
        options: ["Red Dwarf", "White Dwarf", "Neutron Star", "Blue Giant"],
        answer: "Red Dwarf"
    },
    {
        question: "What is the name of the protein that makes up hair and nails?",
        options: ["Keratin", "Collagen", "Elastin", "Actin"],
        answer: "Keratin"
    },
    {
        question: "What is the largest known star by volume?",
        options: ["VY Canis Majoris", "Betelgeuse", "Antares", "UY Scuti"],
        answer: "UY Scuti"
    },
    {
        question: "Which mathematician is known for his work on game theory?",
        options: ["John Nash", "Alan Turing", "Carl Gauss", "Leonhard Euler"],
        answer: "John Nash"
    },
    {
        question: "What is the name of the effect that causes the bending of light around massive objects?",
        options: ["Gravitational Lensing", "Doppler Effect", "Redshift", "Photoelectric Effect"],
        answer: "Gravitational Lensing"
    },
    {
        question: "Which philosopher is known for the concept of the 'Social Contract'?",
        options: ["John Locke", "Jean-Jacques Rousseau", "Thomas Hobbes", "Karl Marx"],
        answer: "Jean-Jacques Rousseau"
    },
    {
        question: "What is the rarest blood type in the world?",
        options: ["AB Negative", "O Positive", "B Negative", "A Positive"],
        answer: "AB Negative"
    },
    {
        question: "Which element has the highest melting point?",
        options: ["Tungsten", "Carbon", "Osmium", "Rhenium"],
        answer: "Tungsten"
    },
    {
        question: "What is the name of the deep-sea trench located in the western Pacific Ocean?",
        options: ["Mariana Trench", "Puerto Rico Trench", "Java Trench", "Tonga Trench"],
        answer: "Mariana Trench"
    },
    {
        question: "Who developed the theory of general relativity?",
        options: ["Albert Einstein", "Isaac Newton", "Niels Bohr", "Max Planck"],
        answer: "Albert Einstein"
    },
    {
        question: "What is the most distant galaxy observed from Earth?",
        options: ["Galaxy GN-z11", "Andromeda Galaxy", "Whirlpool Galaxy", "Sombrero Galaxy"],
        answer: "Galaxy GN-z11"
    },
    {
        question: "Which physicist is known for the uncertainty principle?",
        options: ["Werner Heisenberg", "Niels Bohr", "Erwin Schrödinger", "Paul Dirac"],
        answer: "Werner Heisenberg"
    },
    {
        question: "What is the name of the largest volcano in the solar system?",
        options: ["Olympus Mons", "Mount Everest", "Mauna Kea", "Kilauea"],
        answer: "Olympus Mons"
    },
    {
        question: "Which organ in the human body is primarily responsible for the production of insulin?",
        options: ["Pancreas", "Liver", "Kidneys", "Stomach"],
        answer: "Pancreas"
    },
    {
        question: "What is the name of the first artificial satellite launched into space?",
        options: ["Sputnik 1", "Explorer 1", "Vostok 1", "Apollo 11"],
        answer: "Sputnik 1"
    },
    {
        question: "Which ancient civilization developed the concept of zero?",
        options: ["Mayan", "Egyptian", "Mesopotamian", "Greek"],
        answer: "Mayan"
    },
    {
        question: "What is the largest known asteroid in the asteroid belt?",
        options: ["Ceres", "Vesta", "Pallas", "Hygiea"],
        answer: "Ceres"
    },
    {
        question: "Who is credited with the discovery of the circulation of blood?",
        options: ["William Harvey", "Andreas Vesalius", "Hippocrates", "Galen"],
        answer: "William Harvey"
    },
    {
        question: "What is the primary component of the Sun's atmosphere?",
        options: ["Hydrogen", "Helium", "Oxygen", "Carbon Dioxide"],
        answer: "Hydrogen"
    },
    {
        question: "Which country is the largest producer of coffee in the world?",
        options: ["Brazil", "Colombia", "Vietnam", "Ethiopia"],
        answer: "Brazil"
    },
    {
        question: "What is the name of the phenomenon where the moon appears red during a total lunar eclipse?",
        options: ["Blood Moon", "Blue Moon", "Supermoon", "Harvest Moon"],
        answer: "Blood Moon"
    },
    {
        question: "Which scientist is known for his work on electromagnetic theory and field equations?",
        options: ["James Clerk Maxwell", "Michael Faraday", "Albert Einstein", "Nikola Tesla"],
        answer: "James Clerk Maxwell"
    },
    {
        question: "Which disease did Edward Jenner develop the first vaccine for?",
        options: ["Smallpox", "Polio", "Measles", "Tuberculosis"],
        answer: "Smallpox"
    },
    {
        question: "What is the term for the study of earthquakes?",
        options: ["Seismology", "Volcanology", "Geology", "Hydrology"],
        answer: "Seismology"
    },
    {
        question: "Which philosopher is known for the concept of 'Tabula Rasa'?",
        options: ["John Locke", "Jean-Jacques Rousseau", "Immanuel Kant", "David Hume"],
        answer: "John Locke"
    },
    {
        question: "What is the name of the world’s largest coral reef system?",
        options: ["Great Barrier Reef", "Mesoamerican Barrier Reef", "Red Sea Coral Reef", "New Caledonian Barrier Reef"],
        answer: "Great Barrier Reef"
    },
    {
        question: "Which gas is commonly used in neon signs?",
        options: ["Neon", "Argon", "Krypton", "Xenon"],
        answer: "Neon"
    },
    {
        question: "What is the name of the phenomenon where an object in space appears to move backward against the background stars?",
        options: ["Retrograde Motion", "Prograde Motion", "Elliptical Orbit", "Precession"],
        answer: "Retrograde Motion"
    },
    {
        question: "Which Greek mathematician is known for his work on the properties of geometric shapes?",
        options: ["Euclid", "Pythagoras", "Archimedes", "Socrates"],
        answer: "Euclid"
    },
    {
        question: "What is the primary component of natural gas?",
        options: ["Methane", "Ethane", "Propane", "Butane"],
        answer: "Methane"
    },
    {
        question: "Who was the first emperor of China?",
        options: ["Qin Shi Huang", "Han Wudi", "Liu Bang", "Sun Yat-sen"],
        answer: "Qin Shi Huang"
    },
    {
        question: "What is the name of the process by which plants absorb water through their roots?",
        options: ["Osmosis", "Photosynthesis", "Transpiration", "Respiration"],
        answer: "Osmosis"
    },
    {
        question: "Which country has the largest number of official languages?",
        options: ["South Africa", "India", "Switzerland", "Belgium"],
        answer: "South Africa"
    },
    {
        question: "Which artist is known for his work 'The Persistence of Memory'?",
        options: ["Salvador Dalí", "Pablo Picasso", "Marc Chagall", "Henri Matisse"],
        answer: "Salvador Dalí"
    },
    {
        question: "What is the name of the effect where an object appears to be moving away due to the Doppler shift?",
        options: ["Redshift", "Blueshift", "Doppler Shift", "Cosmic Microwave Background"],
        answer: "Redshift"
    },
    {
        question: "Who developed the concept of 'Survival of the Fittest'?",
        options: ["Charles Darwin", "Alfred Russel Wallace", "Jean-Baptiste Lamarck", "Gregor Mendel"],
        answer: "Charles Darwin"
    },
    {
        question: "What is the name of the theory that explains the origin of the universe?",
        options: ["Big Bang Theory", "Steady State Theory", "String Theory", "Quantum Theory"],
        answer: "Big Bang Theory"
    },
    {
        question: "Which branch of science is concerned with the study of fungi?",
        options: ["Mycology", "Botany", "Zoology", "Bacteriology"],
        answer: "Mycology"
    },
    {
        question: "Who is known for formulating the laws of planetary motion?",
        options: ["Johannes Kepler", "Tycho Brahe", "Galileo Galilei", "Isaac Newton"],
        answer: "Johannes Kepler"
    },
    {
        question: "What is the name of the element with atomic number 118?",
        options: ["Oganesson", "Livermorium", "Tennessine", "Moscovium"],
        answer: "Oganesson"
    },
    {
        question: "Which novel features the fictional character of Atticus Finch?",
        options: ["To Kill a Mockingbird", "The Catcher in the Rye", "1984", "Pride and Prejudice"],
        answer: "To Kill a Mockingbird"
    },
    {
        question: "Who was the first person to win two Nobel Prizes?",
        options: ["Marie Curie", "Linus Pauling", "Albert Einstein", "Gerty Cori"],
        answer: "Marie Curie"
    },
    {
        question: "What is the most widely spoken Slavic language?",
        options: ["Russian", "Polish", "Czech", "Serbo-Croatian"],
        answer: "Russian"
    },
    {
        question: "Which famous mathematician is known for his contributions to number theory and prime numbers?",
        options: ["Euclid", "Fermat", "Gauss", "Riemann"],
        answer: "Fermat"
    },
    {
        question: "What is the name of the genetic condition caused by an extra chromosome 21?",
        options: ["Down Syndrome", "Turner Syndrome", "Klinefelter Syndrome", "Edwards Syndrome"],
        answer: "Down Syndrome"
    },
    {
        question: "Who was the first female Prime Minister of the United Kingdom?",
        options: ["Margaret Thatcher", "Theresa May", "Elizabeth II", "Priti Patel"],
        answer: "Margaret Thatcher"
    },
    {
        question: "What is the study of human cultures and societies called?",
        options: ["Anthropology", "Sociology", "Psychology", "Archaeology"],
        answer: "Anthropology"
    },
    {
        question: "Which astronomer is known for his work on the phases of Venus and the Moons of Jupiter?",
        options: ["Galileo Galilei", "Tycho Brahe", "Johannes Kepler", "Isaac Newton"],
        answer: "Galileo Galilei"
    },
    {
        question: "What is the capital city of Kazakhstan?",
        options: ["Astana", "Almaty", "Tashkent", "Baku"],
        answer: "Astana"
    },
    {
        question: "Who wrote the novel 'Brave New World'?",
        options: ["Aldous Huxley", "George Orwell", "H.G. Wells", "Ray Bradbury"],
        answer: "Aldous Huxley"
    },
    {
        question: "What is the name of the process by which cells divide to produce gametes?",
        options: ["Meiosis", "Mitosis", "Fission", "Binary Fission"],
        answer: "Meiosis"
    },
    {
        question: "Who invented the first practical telephone?",
        options: ["Alexander Graham Bell", "Thomas Edison", "Elisha Gray", "Michael Faraday"],
        answer: "Alexander Graham Bell"
    },
    {
        question: "Which famous physicist is known for his theory of quantum mechanics?",
        options: ["Niels Bohr", "Werner Heisenberg", "Erwin Schrödinger", "Max Planck"],
        answer: "Niels Bohr"
    },
    {
        question: "What is the largest and most active volcano on Earth?",
        options: ["Mauna Loa", "Mount St. Helens", "Kilauea", "Mount Fuji"],
        answer: "Mauna Loa"
    },
    {
        question: "Which artist is known for his 'Campbell's Soup Cans' series?",
        options: ["Andy Warhol", "Jackson Pollock", "Roy Lichtenstein", "Pablo Picasso"],
        answer: "Andy Warhol"
    },
    {
        question: "What is the term for a system of government where power is vested in a single ruler?",
        options: ["Monarchy", "Democracy", "Republic", "Oligarchy"],
        answer: "Monarchy"
    }
]