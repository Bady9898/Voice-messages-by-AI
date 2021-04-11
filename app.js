const greetings = [
    
    'EL Classico mei Reaal Maadrid jita, Lord Benzema nay barcelona ki maaar deeeee, sub millkur mere saath barsa pur haeso ha ha ha ha ha ha ha ha ha ha ha']

// const weather = [
//     'Weather is fine',
//     'You need a tan'
// ]

const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; 
const recognition = new SpeechRecognition ();

recognition.onstart = function () {
    console.log('voice is activated!');
};

recognition.onresult = function (event){
        const current = event.resultIndex;

        const transcript = event.results[current][0].transcript;
        content.textContent = transcript;
        readOutLoud(transcript); 
};

// add the listener to the btn

btn.addEventListener('click', ()=> {
    recognition.start();
})

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    
    // speech.text = 'I dont know what you said';

    if (message.includes('who won')) {
        const finalText= greetings
        speech.text= finalText;
    }
    speech.volume = 1;
    speech.rate = 0.25;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}