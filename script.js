
// ===================================
// 1. STUDY STREAK LOGIC
// ===================================

let streakCount = parseInt(localStorage.getItem('icpasStreak')) || 3;

const todayDate = new Date().toDateString();
const lastCheckin = localStorage.getItem('icpasLastCheckin');

function updateStreakDisplay() {
    document.getElementById('navStreak').innerText = streakCount;
    document.getElementById('mainStreak').innerText = streakCount;

    if (lastCheckin === todayDate) {
        const btn = document.getElementById('checkinBtn');

        btn.innerText = '🎉 Checked In Today!';
        btn.classList.add('checked');

        document.getElementById('streakStatus').innerText =
            'Great job! You completed your daily study check-in.';
    }
}

function logStudyDay() {
    if (localStorage.getItem('icpasLastCheckin') !== todayDate) {

        streakCount++;

        localStorage.setItem('icpasStreak', streakCount);
        localStorage.setItem('icpasLastCheckin', todayDate);

        updateStreakDisplay();
    }
}

updateStreakDisplay();


// ===================================
// 2. PROGRAM FILTER
// ===================================

function filterProgram(program, btn) {

    document.querySelectorAll('.tab-btn').forEach(button => {
        button.classList.remove('active');
    });

    btn.classList.add('active');

    document.querySelectorAll('.card').forEach(card => {

        if (program === 'all' || card.dataset.program === program) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }

    });
}


// ===================================
// 3. SEARCH FUNCTION
// ===================================

function filterCards() {

    const input = document.getElementById('searchInput').value.toLowerCase();

    document.querySelectorAll('.card').forEach(card => {

        const text = card.innerText.toLowerCase();

        card.style.display = text.includes(input) ? 'flex' : 'none';

    });
}


// ===================================
// 4. QUIZ MODAL
// ===================================

function openQuiz() {
    document.getElementById('quizModal').style.display = 'flex';
}

function closeQuiz() {
    document.getElementById('quizModal').style.display = 'none';
}


// ===================================
// 5. CHECK QUIZ ANSWER
// ===================================

function checkAnswer(button, isCorrect) {

    const feedback = document.getElementById('quizFeedback');

    if (isCorrect) {
        feedback.innerText = '✅ Correct! Assets and expenses increase with a debit.';
        feedback.style.color = 'green';
    } else {
        feedback.innerText = '❌ Incorrect. Try again!';
        feedback.style.color = 'red';
    }

}
