// var timer =10;
// setInterval(function() {
// timer--;
// if(timer < 1) {
//     quiz.innerHTML = `
//     ${score}/${quizData.length} 
//    ${salah}/${quizData.length}
//    `
// }else{
//     document.getElementById("timer").innerHTML = timer;
// }
// }, 1000);

// const startingMinutes = 1
// let time = startingMinutes * 10

// const countdown = document.getElementById("timer")

// setInterval(updateCountdown, 1000 )

// function updateCountdown(){
//     const minutes = Math.floor(time / 60)
//     let seconds =  time % 60

//     seconds = seconds < 10 ? '0' + seconds : seconds

//     countdown.innerHTML = `${minutes}:${seconds}`
//     time--
    
//     if(time < -1){
//         quiz.innerHTML = `
//         <h2> Benar: ${score} 
//              Salah: ${salah} </h2>
//        `
//     }
    
// }

// setInterval(

//     function(){
    
//     document.getElementById('submit').click()
    
//     },10000)



const quizData = [
    {
        question: "apa nama dari komponen komputer diatas ?",
        a: " A. Motherboard",
        b: " B. Socket Processor",
        c: " C. Power Supply",
        correct: "a",
        imageUrl: "gambar/mb.png",
    },
    {
        question: "Kabel di atas menunjukan sunan dari kabel?",
        a: " A. Kabel straight",
        b: " B. Kabel cross",
        c: " C. Kabel straight & cross",
        correct: "a",
        imageUrl: "gambar/soal2.png",
    },
    {
        question: "Monitor diatas berfungsi sebagai alat yang menampilkan informasi baik gambar, video atau teks. Dalam istilah komputer Monitor disebut sebagai perangkat?",
        a: " A. Proses",
        b: " B. Input",
        c: " C. Output",
        correct: "c",
        imageUrl: "gambar/soal3.png",
    },
    {
        question: "Perangkat yang digunakan untuk memberi daya listrik pada komputer ini disebut?",
        a: " A. Power Supply Unit",
        b: " B. Adaptor",
        c: " C. Regulator",
        correct: "a",
        imageUrl: "gambar/soal4.png",
    },

    {
        question: "Kabel di atas menunjukan sunan dari kabel?",
        a: " A. Kabel straight",
        b: " B. Kabel cross", 
        c: " C. Kabel straight & cross",
        correct: "b",
        imageUrl: "gambar/soal5.png",
    },

    {
        question: "Gambar di atas merupakan susunan topologi?",
        a: " A. ring",
        b: " B. bus",
        c: " C. star",
        correct: "c",
        imageUrl: "gambar/soal6.png",
    },

    {
        question: "Dalam istilah komputer, keyboard disebut sebagai perangkat?",
        a: " A. Output",
        b: " B. Proses",
        c: " C. Input",
        correct: "c",
        imageUrl: "gambar/soal7.png",
    },

    {
        question: "Flashdisk berfungsi untuk?",
        a: " A. Menggandakan data",
        b: " B. Menyimpan data",
        c: " C. Menghilangkan data",
        correct: "b",
        imageUrl: "gambar/soal8.png",
    },

    {
        question: "Fungsi pasta yang dioleskan di Heatsink dan CPU adalah?",
        a: " A. Mengencangkan CPU",
        b: " B. Meredam panas yang dihasilkan CPU",
        c: " C. Meningkatkan kinerja CPU",
        correct: "b",
        imageUrl: "gambar/soal9.png",
    },

    {
        question: "apa nama dari komponen komputer diatas?",
        a: " A. RAM",
        b: " B. Harddisk",
        c: " C. Heatsink",
        correct: "a",
        imageUrl: "gambar/soal10.png",
    },

];
const nilai = document.getElementById('nilai')
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
let salah = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    document.getElementById("question-image").src =  currentQuizData.imageUrl;
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score ++
       } 
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
            ${score}/${quizData.length} 
           ${salah}/${quizData.length}
           `
       }
    }
})

const startingMinutes = 10
let time = startingMinutes * 60

const countdown = document.getElementById("timer")

setInterval(updateCountdown, 1000 )

function updateCountdown(){
    const minutes = Math.floor(time / 60)
    let seconds =  time % 60

    seconds = seconds < 10 ? '0' + seconds : seconds

    countdown.innerHTML = `${minutes}:${seconds}`
    time--
    
    if(time < -1){
        quiz.innerHTML = `
        <h2> poin: ${score} 
             </h2>
       `
    }
    
}
