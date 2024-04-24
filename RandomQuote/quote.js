//variables
let btn=document.querySelector('.button-area');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes=[
    {
        quote:'"The best way to find yourself is to lose yourself in the service of others"',
        person:'Mahatma Gandhi'
    },
    {
        quote:'"If you want to live a happy life, tie it to a goal,not to people or things"',
        person:'Albert Einstein'
    },
    {
        quote:'"Your time is limited so dont waste it living someone elses life"',
        person:'Steve Jobs'
    },
    

];


btn.addEventListener('click',function(){
let random=Math.floor(Math.random()*quotes.length);

quote.innerText=quotes[random].quote;
person.innerText=quotes[random].person;
})
   