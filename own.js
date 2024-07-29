let btn = document.getElementById('btn');

let result = document.getElementById('result');

let author = document.getElementById('author');

let clear= document.getElementById('clear');

btn.addEventListener('click', showQuote);

function showQuote(){
    let quoteArray=[
           {
            qoute:'Education is the most powerful weapon which you can use to change the world.',
            author:"Nelson Mandela"
           },
           {
            qoute:'THE BEST WAY TO FIND YOURSELF IS TO LOSE YOURSELF IN THE SERVICE OF OTHERS.',
            author:"MOTHER TERESA"
           },
           {
            qoute:'IF YOU WANT TO LIFT YOURSELF UP,LIFT UP SOMEONE ELSE.',
            author:"BOOKER T.WASHINGTON"
           },
           {
            qoute:'THE PURPOSE OF HUMAN LIFE IS TO SERVE AND TO SHOW COMPASSION AND THE WILL TO HELP OTHERS.',
            author:"ALBERT SCHWEITZER"
           },
           {
            qoute:'I BELIEVE THAT EVERY HUMAN MIND FEELS PLEASURE IN DOING GOOD TO ANOTHER.',
            author:"THOMAS JEFFERSON"
           },
           {
            qoute:'THERE IS NO SUBSTITUTE FOR HARD WORK.',
            author:"THOMAS EDISON"
           },
           {
            qoute:'THE ONLY WAY TO DO GREAT WORK IS TO LOVE WHAT YOU DO.',
            author:"STEVE JOBS"
           },
           {
            qoute:'EDUCATION IS THE MOST POWERFUL WEAPON WHICH YOU CAN USE TO CHANGE THE WORLD.',
            author:"NELSON MANDELA"
           },
           {
            qoute:'WITHOUT A STRONG ARMY, A NATION HAS NO PROTECTION, NO SECURITY, AND NO FUTURE.',
            author:"GEORGE WASHINGTON"
           },
           {
            qoute:'CLEANLINESS IS A FUNDAMENTAL VALUE THAT OUGHT TO BE INSTALLED IN EVERY HUMAN BEING. IT IS THE CORNERSTONE OF GOOD HEALTH AND PEACE OF MIND..',
            author:"NELSON MANDELA"
           },
           {
            qoute:'A NATION WHICH MAKES THE FINAL SACRIFICE FOR LIFE AND FREEDOM DOES NOT BEATEN.',
            author:"MUSTAFA KEMAL ATATURK"
           },
           {
            qoute:'QUALITY IS NOT AN ACT, IT IS A HABBIT.',
            author:"ARISTOTLE"
           },
           {
            qoute:'HAPPINESS DEPENDS UPON OURSELVES.',
            author:"ARISTOTLE"
           },
           {
            qoute:'HOPE IS A WAKING DREAM.',
            author:"ARISTOTLE"
           },
           {
            qoute:'YOU CANNOT ESCAPE THE RESPONSIBILTY OF TOMORROW BY EVADING IT TODAY.',
            author:"ABRAHAM LINCOLN"
           },
           {
            qoute:'THE ONLY LASTING BEAUTY IS THE BEAUTY OF THE HEART.',
            author:"MAULANA RUMI"
           },
           {
            qoute:'THE MOON STAYS BRIGHT WHEN IT DOES NOT AVOID THE NIGHT.',
            author:"MAULANA RUMI"
           },
           {
            qoute:'WHAT YOU SEEK IS SEEKING YOU.',
            author:"MAULANA RUMI"
           },
           {
            qoute:'ATTITUDE IS A LITTLE THING THAT MAKES A BIG DIFFERENCE.',
            author:"WINSTON CHURCHILL"
           },
           {
            qoute:'I FEAR NOT THE MAN WHO HAS PRACTICED 10,000 KICKS ONCE, BUT I FEAR THE MAN WHO HAS PRACTICED ONE KICK 10,000 TIMES.',
            author:"BRUCE LEE"
           },

    ];

    

    let random=Math.random()*quoteArray.length;
    let floor=Math.floor(random);


    
    result.textContent='"' + quoteArray[floor].qoute + '"';
    author.textContent="By " + quoteArray[floor].author;

    clear.style.display= 'block';
}

clear.addEventListener('click', empty);
 
function empty(){
     result.textContent="";
     author.textContent="";
     clear.style.display= "none";
}