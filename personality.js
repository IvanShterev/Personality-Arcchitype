
const h1El = document.querySelector('.header');
const h2El = document.querySelector('.subheader');
const btnEl = document.querySelector('.btn');

const questions = [
    'A close friend of yours is having a problem and is crying. I feel empaty towards him.',
    'You often have toughts of hurting others.',
    'You love spending time with other people.',
    'I hate seeing people being happy if I am feeling down.',
    'I like to finish an activity before starting a new one.',
    'I actively perticipate in my friends conversations.',
    'I see people as my equal',
    'I feel that my personal problems are important and worth mentioning.',
    'I have easy time making new friends.',
    'Emotions easily influence me.',
    'Listening to other people is as important as talking.',
    'Giving gifts is as important as receiving them.',
    'I try to understand different points of view.',
    'I think about deeper subjects like the meaning of life.',
    'Most people are good',
    'Center of attention is not where i like to be'
];

let isFirst = true;
let i = 1;

btnEl.addEventListener('click', () =>{
    if (isFirst){
        btnEl.innerText = 'Next';
        h1El.innerText = '';
        h2El.innerText = questions[0];
        isFirst = false;
    } else if (isFirst === false && i < questions.length - 1){
        h2El.innerText = questions[i];
        i++;
    } else if (isFirst === false && i === questions.length - 1){
        h1El.innerText = 'Result';
        h2El.innerText = 'Text';
        btnEl.parentNode.removeChild(btnEl);
    }

});