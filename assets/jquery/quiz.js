$(document).ready(function () {
    let currentQuestionIndex = 0;
    let score = 0;
    let ideaUsedCount = 0; // Track the number of times the idea has been used

    // Function to shuffle an array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Function to shuffle the questions array
    function shuffleQuestions(array) {
        shuffleArray(array);
    }

    // Shuffle the quiz questions
    shuffleQuestions(quizData);

    // Select only the first 10 questions after shuffling
    const selectedQuestions = quizData.slice(0, 10);

    function loadQuestion() {
        const currentQuestion = selectedQuestions[currentQuestionIndex];
        $('.question').text(currentQuestion.question);
        $('.options').empty();

        // Shuffle options before displaying them
        const options = [...currentQuestion.options];
        shuffleArray(options);

        options.forEach(option => {
            const optionElement = $(`<div class="option">${option}</div>`);
            $('.options').append(optionElement);
        });
    }

    function checkAnswer(selectedOption) {
        const correctAnswer = selectedQuestions[currentQuestionIndex].answer;
        if (selectedOption === correctAnswer) {
            score++;
        }
    }

    $('.options').on('click', '.option', function () {
        const selectedOption = $(this).text();
        checkAnswer(selectedOption);

        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) {
            loadQuestion();
            $('.getIdeaImg svg').show();
        } else {
            $('.question-container').hide();
            $('.next-btn').hide();
            $('.result-container').show();
            $('.score').text(`You scored ${score} out of ${selectedQuestions.length}`);
        }
    });

    $('.next-btn').click(function () {
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) {
            loadQuestion();
            $('.getIdeaImg svg').show();
        } else {
            $('.question-container').hide();
            $('.next-btn').hide();
            $('.result-container').show();
            $('.score').text(`You scored ${score} out of ${selectedQuestions.length}`);
        }
    });

    $('.getIdeaImg svg').click(function () {
        if (ideaUsedCount >= 3) {
            alert("You have used all your help options!");
            return;
        }

        const correctAnswer = selectedQuestions[currentQuestionIndex].answer;

        // Highlight the correct answer in green
        $('.option').each(function () {
            if ($(this).text() === correctAnswer) {
                $(this).css('background-color', 'green');
                $('.getIdeaImg svg').hide();
            }
        });

        ideaUsedCount++;

        // Change SVG color based on the number of times help is used
        if (ideaUsedCount === 3) {
            $(this).css('fill', 'red');
        } else {
            $(this).css('fill', 'yellow');
        }
    });

    $('#next-btn-inp').change(function() {
        if ($(this).is(':checked')) {
            $('.options-container').show();
        } else {
            $('.options-container').hide();
        }
    });

    // Load the first question when the page is ready
    loadQuestion();
});
