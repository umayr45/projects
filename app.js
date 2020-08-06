//document.querySelector("#hitbutton").addEventListener('click',cardify);
function ready(){
    let blackjackGame={
        'you':{'scorespan':'#your-blackjack-result','div':'#your-box','score':0},
        'dealer':{'scorespan':'#dealer-blackjack-result','div':'#dealer-box','score':0},
        'cards': ['2','3','4','5','6','7','8','9','10','J','K','Q','A'],
        'cardsMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'Q':10,'K':10,'Q':10,'A':[1,11] } };
   const YOU= blackjackGame['you'];
   const DEALER=blackjackGame['dealer'] ;
   const hitSound=new Audio('sounds/swish.m4a')
   



    document.querySelector("#hitbutton").addEventListener('click',blackjackhit);
    document.querySelector("#blackjack-stand-button").addEventListener('click',dealerLogic);
    document.querySelector("#blackjack-deal-button").addEventListener('click',blackjackDeal);
    function blackjackDeal(){
        computeWinner();
        let  yourImages=document.querySelector("#your-box").querySelectorAll('img');
        let  dealerrImages=document.querySelector("#dealer-box").querySelectorAll('img');

        for(let i=0;i<yourImages.length;i++){
            yourImages[i].remove();

        }
        for(let i=0;i<dealerrImages.length;i++){
            dealerrImages[i].remove();

        }
        YOU['score']=0;
        DEALER['score']=0;
        document.querySelector('#your-blackjack-result').textContent= 0;
        document.querySelector('#dealer-blackjack-result').textContent= 0;
        document.querySelector('#your-blackjack-result').style.color="white";
        document.querySelector('#dealer-blackjack-result').style.color="white";

    }
    function randomCard(){
        let randomIndex=Math.floor(Math.random() *13);
        return blackjackGame['cards'][randomIndex];
    }


    function blackjackhit(){
        let card=randomCard();
        showCard(YOU,card);
        updateScore(card,YOU);
        showScore(YOU)

        

    } 

    function showCard(activePlayer,card){
        if (activePlayer['score']<=21){
            let cardImage= document.createElement('img');
            cardImage.src=`images/${card}.png`;
            
            document.querySelector(activePlayer['div']).appendChild(cardImage);
            hitSound.play();

        }


    }
    function updateScore(card,activePlayer){
        if(card==='A'){
            if(activePlayer['score']+ blackjackGame['cardsMap'][card][1]<=21){

                activePlayer['score']+= blackjackGame['cardsMap'][card][1];
            }
            else{

                activePlayer['score']+= blackjackGame['cardsMap'][card][0];
            }
        }
        else{

            activePlayer['score']+=blackjackGame['cardsMap'][card];

        }
        


    }
    function showScore(activePlayer){
        if(activePlayer['score']>21){
            document.querySelector(activePlayer['scorespan']).textContent="BUST !!!"
            document.querySelector(activePlayer['scorespan']).style.color="red";
        }  
        else{
            document.querySelector(activePlayer['scorespan']).textContent=activePlayer['score'];

        }
    
        
    }
    function dealerLogic(){
        let card=randomCard();
        showCard(DEALER,card);
        updateScore(card,DEALER);
        showScore(DEALER);
    }
    function computeWinner(){
        let winner;
        if(YOU['score']<=21){
            if(YOU['score']<DEALER['score'] && DEALER['score']<=21){
                console.log("YOU LOST")
                winner=DEALER;
            }
            else if(YOU['score']> DEALER['score'] || (DEALER['score'] >21)){
                console.log('YOU WON');

                winner=YOU;
            }
            else if(YOU['score']===DEALER['score']){
                console.log("DRAWWWW");

            }
        }
        else if( YOU['score']>21 && DEALER['score']<=21){
            console.log("YOU LOST");
            winner=DEALER;
        }
        else if(YOU['score']>21 && DEALER['score']>21){
            console.log("DRAW");
        }
        return winner;
    }


    
}

function fn1(){
    var  age =Number(document.getElementById("age").value);
    var days=Number(age*365);
    document.getElementById("result").innerHTML=days;


}
function reset(){
    document.getElementById("result").remove()
}

function generate_cat() {
    var photo=document.createElement('img');
    photo.src="tenor.gif";
    photo.style.width='120px';
    var divs=document.getElementById('cat');
    divs.appendChild(photo)
}
function rpsGame(yourChoice){
    var humanChoice=yourChoice.id;
    var botChoice= Random_choice();
    var ans=judge(humanChoice,botChoice);
    var res=judgement(ans);
    display(res,humanChoice,botChoice);

}
function Random_choice(){

    var choice=Math.floor(Math.random() *3);
    return ['stone','paper','scissors'][choice];x

     
}
function judge(humanChoice,botChoice){
    var dict={'scissors':{'stone':0,'paper':1,'scissors':0.5},
    'stone':{'stone':0.5,'paper':0,'scissors':1},
    'paper':{'stone':1,'paper':0.5,'scissors':0} }

    var ans=dict[humanChoice][botChoice];
    return ans;

     
}

function judgement(ans){
    var res=document.createElement('div')
    
    if (ans===0){
        
        
        res.innerHTML="You Lose";

    }
    else if(ans===0.5){
        
       
        res.innerHTML="Draw";

    }
    else{

        
       
        res.innerHTML="You Won!";
    }


    return res;
}
function display(res,humanChoice,botChoice){

    
    var imageDatabase={
        'stone':document.getElementById('stone').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }


    document.getElementById('stone').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var output1=document.createElement('div');
    var output2=document.createElement('div');


    output1.innerHTML="<img src='"+ imageDatabase[humanChoice]+"' height=120 width=120 >";
    
    output2.innerHTML="<img src='"+ imageDatabase[botChoice]+"' height=120 width=120>";
    document.getElementById('flex-container-3').appendChild(output1);
    document.getElementById('flex-container-3').appendChild(res);
    document.getElementById('flex-container-3').appendChild(output2); 
}


 




