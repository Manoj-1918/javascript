let btn=document.querySelector('#btn1');
let btn1=document.querySelector('#mode');
let head=document.querySelector('#heading');
let quotes=document.querySelector('#quote');
let names=document.querySelector('#author');


let quoteList=[
    {
        "quote": "Happiness is the meaning and the purpose of life, the whole aim and end of human existence.",
        "author": "– Aristotle"
    },
    {
        "quote": "Wise men speak because they have something to say; fools because they have to say something.",
        "author": "– Plato"
    },
    {
        "quote": "The unexamined life is not worth living.",
        "author": "– Socrates"
    },
    {
        "quote": "I think, therefore I am.",
        "author": "– René Descartes"
    },
    {
        "quote": "Science is organized knowledge. Wisdom is organized life.",
        "author": "– Immanuel Kant"
    },
    {
        "quote": "He who has a why to live can bear almost any how.",
        "author": "– Friedrich Nietzsche"
    },
    {
        "quote": "Man is condemned to be free.",
        "author": "– Jean-Paul Sartre"
    },
    {
        "quote": "It does not matter how slowly you go as long as you do not stop.",
        "author": "– Confucius"
    },
    {
        "quote": "Knowing others is intelligence; knowing yourself is true wisdom.",
        "author": "– Lao Tzu"
    },
    {
        "quote": "The highest activity a human being can attain is learning for understanding, because to understand is to be free.",
        "author": "– Baruch Spinoza"
    },
    {
        "quote": "No man's knowledge here can go beyond his experience.",
        "author": "– John Locke"
    },
    {
        "quote": "A wise man proportions his belief to the evidence.",
        "author": "– David Hume"
    },
    {
        "quote": "Leisure is the mother of philosophy.",
        "author": "– Thomas Hobbes"
    },
    {
        "quote": "A man who fears suffering is already suffering from what he fears.",
        "author": "– Michel de Montaigne"
    },
    {
        "quote": "The philosophers have only interpreted the world in various ways. The point, however, is to change it.",
        "author": "– Karl Marx"
    },
    {
        "quote": "One is not born, but rather becomes, a woman.",
        "author": "– Simone de Beauvoir"
    },
    {
        "quote": "The heart has its reasons, which reason does not know.",
        "author": "– Blaise Pascal"
    },
    {
        "quote": "Do not spoil what you have by desiring what you have not.",
        "author": "– Epicurus"
    },
    {
        "quote": "You have power over your mind – not outside events. Realize this, and you will find strength.",
        "author": "– Marcus Aurelius"
    },
    {
        "quote": "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
        "author": "– Rumi"
    },
    {
        "quote": "An ounce of action is worth a ton of theory.",
        "author": "– Ralph Waldo Emerson"
    },
    {
        "quote": "The only thing I know is that I know nothing.",
        "author": "– Socrates"
    },
    {
        "quote": "Hell is other people.",
        "author": "– Jean-Paul Sartre"
    },
    {
        "quote": "Man is the measure of all things.",
        "author": "– Protagoras"
    },
    {
        "quote": "Life must be understood backward. But it must be lived forward.",
        "author": "– Søren Kierkegaard"
    },
    {
        "quote": "Happiness depends upon ourselves.",
        "author": "– Aristotle"
    },
    {
        "quote": "Without music, life would be a mistake.",
        "author": "– Friedrich Nietzsche"
    },
    {
        "quote": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        "author": "– Aristotle"
    },
    {
        "quote": "Liberty consists in doing what one desires.",
        "author": "– John Stuart Mill"
    },
    {
        "quote": "The mind is everything. What you think you become.",
        "author": "– Buddha"
    },
    {
        "quote": "That which does not kill us makes us stronger.",
        "author": "– Friedrich Nietzsche"
    },
    {
        "quote": "Freedom is nothing else but a chance to be better.",
        "author": "– Albert Camus"
    },
    {
        "quote": "Happiness is not an ideal of reason, but of imagination.",
        "author": "– Immanuel Kant"
    },
    {
        "quote": "To be is to be perceived.",
        "author": "– George Berkeley"
    },
    {
        "quote": "God is dead! He remains dead! And we have killed him.",
        "author": "– Friedrich Nietzsche"
    },
    {
        "quote": "Injustice anywhere is a threat to justice everywhere.",
        "author": "– Martin Luther King Jr."
    },
    {
        "quote": "I can control my passions and emotions if I can understand their nature.",
        "author": "– Spinoza"
    },
    {
        "quote": "He who opens a school door, closes a prison.",
        "author": "– Victor Hugo"
    },
    {
        "quote": "The life of man is solitary, poor, nasty, brutish, and short.",
        "author": "– Thomas Hobbes"
    },
    {
        "quote": "A man is but the product of his thoughts. What he thinks, he becomes.",
        "author": "– Mahatma Gandhi"
    },
    {
        "quote": "The function of prayer is not to influence God, but rather to change the nature of the one who prays.",
        "author": "– Søren Kierkegaard"
    },
    {
        "quote": "What is rational is actual and what is actual is rational.",
        "author": "– Georg Wilhelm Friedrich Hegel"
    },
    {
        "quote": "Philosophy is the highest music.",
        "author": "– Plato"
    },
    {
        "quote": "Happiness is not something ready-made. It comes from your own actions.",
        "author": "– Dalai Lama"
    },
    {
        "quote": "Man is the only creature who refuses to be what he is.",
        "author": "– Albert Camus"
    },
    {
        "quote": "A journey of a thousand miles begins with a single step.",
        "author": "– Lao Tzu"
    },
    {
        "quote": "Doubt is an uncomfortable condition, but certainty is a ridiculous one.",
        "author": "– Voltaire"
    }
];

btn.addEventListener("click",function(){
    let i=Math.floor(Math.random()*quoteList.length);
    quotes.innerText=quoteList[i].quote;
    names.innerText=quoteList[i].author;
    })

let mode=true;
let contentall=document.querySelector(".content");

btn1.addEventListener("click",function(){
    if(mode==true){
    head.style.backgroundColor="white";
    head.style.color="black"
    head.style.border.color="black";
    contentall.style.backgroundColor=`rgba(0,0,0,0.7)`;
    contentall.style.color="white";
    btn.style.backgroundColor="white";
    btn.style.color="black";
    btn1.innerHTML="Light Mode";

    mode=false;
    }
    else{
        head.style.backgroundColor="black";
        head.style.color="white"
        head.style.border.color="white";
        mode=true;
        contentall.style.backgroundColor=`rgba(255,255,255,0.7)`;
        contentall.style.color="black";
        btn.style.backgroundColor="black";
        btn.style.color="white";
        btn1.innerHTML="Dark Mode";
        
    }
})

