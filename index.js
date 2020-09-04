
let card =[
    {name:'circle', value:'./images/circle.svg'},
    {name:'plus',value:'./images/plus.svg'},
    {name:'waves', value:'./images/waves.svg'},
    {name:'square',value:'./images/star.svg'}
];

var count =0;
var countGuess=0;
var showFront = false;
var missed = 0;


// let answer;
// var SpeechRecognition = webkitSpeechRecognition;
// var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
// var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
// var grammar = '#JSGF V1.0; grammar cards; public <cards> = star | plus | waves | circle | square;'
// var recognition = new SpeechRecognition();
// var speechRecognitionList = new SpeechGrammarList();
// speechRecognitionList.addFromString(grammar, 1);
// recognition.grammars = speechRecognitionList;
// recognition.continuous = false;
// recognition.lang = 'en-US';
// recognition.interimResults = false;
// recognition.maxAlternatives = 1;

// //start the game
// function start(){
//     var speech = new SpeechSynthesisUtterance('I am going to test you for extra sensory power. The other side of this card is a circle, plus, waves, square, or star. Clear your mind. When you are ready, say the name out loud.');
//     window.speechSynthesis.speak(speech);

//     $('.start-messege').hide();//hide the messeage to start the game
//     setTimeout(voice,20000);
    
// }
// function voice(){
//     recognition.start();
// }
// recognition.onresult = function(event) {
//     answer=event.results[0][0].transcript;
//     toggle(answer);
// };
// recognition.onspeechend= function(){
//     recognition.stop();
    
// }

// function nextCall(){
//     var speech = new SpeechSynthesisUtterance('What about this one?');
//     window.speechSynthesis.speak(speech);
//     setTimeout(voice, 2000);
// }

//Getting the elements
var circle_btn = document.querySelector("#circle-symbol-btn");
var plus_btn = document.querySelector("#plus-symbol-btn");
var waves_btn = document.querySelector("#waves-symbol-btn");
var square_btn= document.querySelector("#square-symbol-btn");
var star_btn = document.querySelector("#star-symbol-btn");
var count_play = document.getElementById("count-play");
var guess_right= document.getElementById("correct-answer");
var guess_missed = document.getElementById("missed-answer");
var back_face = document.querySelector(".card-back");
var front_face = document.querySelector(".card-front");
var modal = document.getElementsByClassName("modal-title");
var modal = document.querySelector(".modal-title");
var close_btn = document.querySelector(".close");
//open the modal
function openModal(){
    document.getElementById("Mymodal").style.display ='block';
    document.getElementById("Mymodal").className +='show';
}
function closeModal(){
    document.getElementById("Mymodal").style.display = 'none';
    document.getElementById("Mymodal").className +=document.getElementById("Mymodal").className.replace('show','');
}
async function  halloween(){
    let sound = await new Audio('./music/Halloween.mp3');
    sound.play();
}

//toggle the cards
function toggle(guess){
    let deck =_.shuffle(card);
    showFront = !showFront;
    if(count != 11){
        //if the guess
        if(showFront){
        
            let card = deck.pop();
            console.log(card.name);
            count++;
            if(guess == card.name){
                countGuess++;
                count_play.innerHTML=count;
                guess_right.innerHTML= countGuess;
                halloween();
            }
            else{
                missed++;
                guess_missed.innerHTML = missed;
                navigator.vibrate(500);
            }
            count_play.innerHTML = count;
            back_face.style.display= 'none';
            
            front_face.innerHTML = `<img src="${card.value}" alt="${card.name}"/>`;
            front_face.style.display = 'block';
            
            
            setTimeout(toggle, 2000);
        
        }
        else{
            front_face.style.display='none';
            
            back_face.style.display= 'block'; // $('.card-back').show();
           

        }
    
    }
    else{
            
            front_face.style.display='none';
            back_face.style.display= 'block'; // $('.card-back').show();
        
            if(count == 11){
                if(countGuess >= 5){
                    modal.innerHTML ='You are ESP is' + countGuess +'. You are great Guessing';
                    openModal();
                    // count=0;
                    // countGuess=0;
                    // $('#count-play').text(count);
                }
                else{
                    modal.innerHTML = 'Sorry you guees was ' + countGuess +'. You need to practice more!!';
                    openModal();
                }
    
        }
    }
    
    //move to the next card
    //


};

circle_btn.addEventListener('click', function(){
    let circle_figure = circle_btn.getAttribute('value');
    toggle(circle_figure);
});
plus_btn.addEventListener('click', function(){
    let plus_figure = plus_btn.getAttribute('value');
    toggle(plus_figure);
});
waves_btn.addEventListener('click', function(){
    let waves_figure = waves_btn.getAttribute('value');
    toggle(waves_figure);
});
square_btn.addEventListener('click', function(){
    let square_figure = square_btn.getAttribute('value');
    toggle(square_figure);
});
star_btn.addEventListener('click', function(){
    let star_figure = star_btn.getAttribute('value');
    toggle(star_figure);
});
close_btn.addEventListener('click', function(){
    closeModal();
});

    

