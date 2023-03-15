
const h1El = document.querySelector('.header');
const h2El = document.querySelector('.subheader');
const btnEl = document.querySelector('.btn');
const stronglyAgreeEl = document.getElementById('#strongly-agree');
const agreeEl = document.getElementById('#agree');
const neutralEl = document.getElementById('#neutral');
const disagreeEl = document.getElementById('#disagree');
const stronglyDisagreeEl = document.getElementById('#strongly-disagree');
const opinionButtonsContainerEl = document.querySelector('.opinion-buttons-container');

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

const personalityArchitypes = ['Psychopath', 'Party Beast', 'Loner', 'Balanced']
//Psycho: 38; 2.Party: 62; 3.Loner: 45; 4.Balanced: 54;
let isFirst = true;
let i = 1;
let points = 0;

btnEl.addEventListener('click', () =>{
    if (isFirst){
        opinionButtonsContainerEl.style.display = 'block'
        btnEl.innerText = 'Next';
        h1El.innerText = '';
        h2El.innerText = questions[0];
        isFirst = false;
    }

    else if (isFirst === false && i < questions.length - 1){
        h2El.innerText = questions[i];
        i++;
    } 

    else if (isFirst === false && i === questions.length - 1){
        let result = ''
        if (points <= 38){
            result = personalityArchitypes[0];
        }

        else if(points > 38 && points <= 45){
            result = personalityArchitypes[2];
        }

        else if(points > 45 && points <= 54){
            result = personalityArchitypes[3];
        }

        else if(points > 54 && points <= 62){
            result = personalityArchitypes[1];
        }
        h1El.innerText = result;
        if (result === personalityArchitypes[0]){
            h2El.innerText = "You have zero or none sympathy towards others. You tend to see only your goals and ponts of view as right. You love to manipulate others to achieve what you desire. You don't like weak people and you like to test them.";
        }
        else if(result === personalityArchitypes[1]){
            h2El.innerText = "You are the soul of your friends' group. You like parties and events with a lot of people. You like to experience different cultures and get to know more people. Social interactions give you energy and you help you relax and escape from your problems.";
        }
        else if(result === personalityArchitypes[2]){
            h2El.innerText = 'You like spending time alone away from others. Social interactions are not your strong side. You tend to hold secrets and prefer not to be the center of attention.';
        }
        else if(result === personalityArchitypes[3]){
            h2El.innerText = 'You are the perfect balance between an introver and an extrovert. You are also not as judgmental and prefer to first hear and think about what others say before forming an opinion. You like spiritual matters and think a lot about life. You try to be the best version of yourself.';
        }
        opinionButtonsContainerEl.style.display = 'none';
        btnEl.parentNode.removeChild(btnEl);
    }

});

stronglyAgreeEl.addEventListener('click', () =>{
    points += 5;
});

agreeEl.addEventListener('click', () =>{
    points += 4;
});

neutralEl.addEventListener('click', () =>{
    points += 3;
});

disagreeEl.addEventListener('click', () =>{
    points += 2;
});

stronglyDisagreeEl.addEventListener('click', () =>{
    points += 1;
});