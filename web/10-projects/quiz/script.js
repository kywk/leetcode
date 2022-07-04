const quizEl = document.getElementById('quiz')
const questionEl = document.getElementById('question')
const answerEls = document.getElementsByName("answer")
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let quizData
let currentQuiz = 0
let correctAnswser = 0

fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple', {})
  .then((response) => {
    return response.json()
  }).then((data) => {
    let result = []
    for (let i = 0; i < data.results.length; i++) {
      let quiz = {
        "question": data.results[i].question,
        "options": data.results[i].incorrect_answers,
        "answer": 3
      }
      quiz.options.push(data.results[i].correct_answer)
      quiz.answer = Math.floor(Math.random() * 4)
      tmp = quiz.options[3]
      quiz.options[3] = quiz.options[quiz.answer]
      quiz.options[quiz.answer] = tmp
      result.push(quiz)
    }
    quizData = result
    submitBtn.disabled = false
    loadQuiz()

  }).catch((err) => {
    console.log('錯誤:', err)
})

function loadQuiz() {
  for (let i = 0; i < answerEls.length; i++) {
    answerEls[i].checked = false
  }

  let currentQuizData = quizData[currentQuiz]
  questionEl.innerHTML = currentQuizData.question
  a_text.innerHTML = currentQuizData.options[0]
  b_text.innerHTML = currentQuizData.options[1]
  c_text.innerHTML = currentQuizData.options[2]
  d_text.innerHTML = currentQuizData.options[3]
}

function getSelected() {
  for (let i = 0; i < answerEls.length; i++) {
    if (answerEls[i].checked)
      return answerEls[i].value
  }

  return undefined
}

submitBtn.addEventListener("click", () => {

  let answer = getSelected()
  if (answer === undefined) {
    return alert("Please select a valid answer")
  }

  if (answer == quizData[currentQuiz].answer)
    correctAnswser++

  currentQuiz++
  if (currentQuiz < quizData.length) {
    loadQuiz()
  } else {
    quiz.innerHTML = `<h2>You finished the quiz! Your make ${correctAnswser} / ${quizData.length} score</h2>`
  }
})
