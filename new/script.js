//function myfunc(){
//    alert(document.getElementById("language").value);
//}

var countQues=0;
var lang;
var score=0;

var HTMLquestions=[

    {
        question: "What is the primary ingredient in a cappuccino?",
        choices: ["Espresso","Steamed Milk","whipped cream"],
        answer: 1
    
    },
    
    {
        question: "Which of the following brewing methods is known for producing a strong and concentrated coffee?",
        choices: ["Drip Coffee","French Press","Espresso"],
        answer: 3
    
    },
    {
        question: "What does the term 'Barista' refer to in a coffee shop?",
        choices: ["Coffee Maker/Preparer","Coffee Farmer","Coffee Shop Owner"],
        answer: 1
    
    },
    {
        question: "Which coffee shop chain is famous for its green and white mermaid logo?",
        choices: ["Dunkin'","Starbucks","Costa Coffee"],
        answer: 2
    
    },
    {
        question: "What is the purpose of a coffee blend in a coffee?",
        choices: ["To increase acidity","To reduce caffeine content","To create a unique flavor profile"],
        answer: 3
    
    },
    
];


//alert(questions.length);
document.getElementById("score").textContent="Score : "+0;
document.querySelector(".view-results").style.display="none";
document.querySelector(".quiz").style.display="none";
document.querySelector(".final-result").style.display="none";








document.querySelector(".choose-lang").addEventListener("click",function(){

    lang="HTMLquestions";
    document.getElementById("ques-left").textContent="Question : "+(countQues+1)+"/"+window[lang].length;

//    alert(window[lang].length);
    //window["anything"] will convert "anything" string to object because window is also an object
    document.querySelector(".quiz").style.display="block";
    
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
     for (i=0;i<3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/
    
//    window.location.href="#score";

});





document.querySelector(".submit-answer").addEventListener("click",function(){
//     alert(window[lang][countQues].choices[window[lang][countQues].answer-1]);
//     alert(document.querySelector('input[name="options"]:checked').value);

    if(document.querySelector('input[name="options"]:checked').value===window[lang][countQues].choices[window[lang][countQues].answer-1]){
           
        score+=1;
        document.getElementById("score").textContent="Score : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle correct'>"+(countQues+1)+"</div>";
           
    }else{
    
        //score-=5;
        document.getElementById("score").textContent="Score : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle incorrect'>"+(countQues+1)+"</div>";
    };
    
    if (countQues<window[lang].length-1){
        countQues++;
    }else{
        document.querySelector(".submit-answer").style.display="none";
        document.querySelector(".view-results").style.display="unset";

    }
    
    document.getElementById("ques-left").textContent="Question : "+(countQues+1)+"/"+window[lang].length;
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
    for (i=0;i<3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/

});

document.querySelector(".view-results").addEventListener("click",function(){
    
    document.querySelector(".final-result").style.display="block";
    
    document.querySelector(".solved-ques-no").innerHTML="You Solved "+(countQues+1)+" questions of "+document.getElementById("language").value;
    
    var correct= document.getElementById("ques-view").getElementsByClassName("correct").length;
    
    document.querySelector(".right-wrong").innerHTML=correct+" were Right and "+((countQues+1)-correct)+" were Wrong";
    
    document.getElementById("display-final-score").innerHTML="Your Final Score is: "+score;
    
    if (correct/(countQues+1)>0.8){
        document.querySelector(".remark").innerHTML="Remark: OutStanding ! :)";
    }else if(correct/(countQues+1)>0.6){
        document.querySelector(".remark").innerHTML="Remark: Good, Keep Improving.";
    
    }else if(correct/(countQues+1)){
        document.querySelector(".remark").innerHTML="Remark: Satisfactory, Learn More.";
    }else{
        document.querySelector(".remark").innerHTML="Remark: Unsatisfactory, Try Again.";
    }
    
window.location.href="#display-final-score";

});

document.getElementById("restart").addEventListener("click",function(){
    location.reload();

});

document.getElementById("about").addEventListener("click",function(){
    alert("Quiz Website Project Created By 404");

});


/*Smooth Scroll*/


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});



/*Smooth Scroll End*/
