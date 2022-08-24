const ac = document.getElementById("ac");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const divide = document.getElementById("divide");
const multi = document.getElementById("multi");
const setNeg = document.getElementById("setNeg");
const perc = document.getElementById("perc");
const square = document.getElementById("square");
const cube = document.getElementById("cube");
const dot = document.getElementById("dot");
const pi = document.getElementById("pi");
const sqrt = document.getElementById("sqrt");
const exp = document.getElementById("exp");
const tenk = document.getElementById("tenk");
const round = document.getElementById("round");
const copy = document.getElementById("copy");
const paste = document.getElementById("paste");
const equal = document.getElementById("equal");
const result = document.getElementById("result");
const record = document.getElementById("record");
const show = document.getElementById("show");
const opInfo = document.getElementById("operationInfo");

var recordNumber = 0;
var finalResult;
var plusActive = 0;
var minusActive = 0;
var divideActive = 0;
var multiActive = 0;
var expActive = 0;
var tenkActive = 0;
var adcClicked = 0;
var showClicked = 0;
var exClicked = 0;
ac.addEventListener("click", function(){
    opInfo.textContent ="";
    result.style.fontSize = "30px";
    result.textContent = "";
         plusActive = 0;
         minusActive = 0;
         divideActive = 0;
         multiActive = 0;
         expActive = 0;
         tenkActive = 0;
    return minusActive, plusActive, divideActive, multiActive, expActive, tenkActive

})
one.addEventListener("click", function(){
    controlLength();
    result.textContent += 1;
})
two.addEventListener("click", function(){
    controlLength();
    result.textContent += 2;
})
three.addEventListener("click", function(){
    controlLength();
    result.textContent += 3;
})
four.addEventListener("click", function(){
    controlLength();
    result.textContent += 4;
})
five.addEventListener("click", function(){
    controlLength();
    result.textContent += 5;
})
six.addEventListener("click", function(){
    controlLength();
    result.textContent += 6;
})
seven.addEventListener("click", function(){
    controlLength();
    result.textContent += 7;
})
eight.addEventListener("click", function(){
    controlLength();
    result.textContent += 8;
})
nine.addEventListener("click", function(){
    controlLength();
    result.textContent += 9;
})
zero.addEventListener("click", function(){
    controlLength();
    result.textContent += 0;
})
equal.addEventListener("click", function(){
    opInfo.textContent ="=";
    if (plusActive == 1 ) {
        controlLength();
        plusActive = 0;
        const showenResult = result.textContent;
        result.textContent = parseFloat(finalResult) + parseFloat(showenResult);
        console.log(finalResult);
        console.log(showenResult);

    }
    if (minusActive == 1 ) {
        controlLength();
        minusActive = 0;
        const showenResult = result.textContent;
        result.textContent = parseFloat(finalResult) - parseFloat(showenResult);
        console.log(finalResult);
        console.log(showenResult);

    }
    if (divideActive == 1 ) {
        controlLength();
        divideActive = 0;
        const showenResult = result.textContent;
        result.textContent = parseFloat(finalResult) / parseFloat(showenResult);
        console.log(finalResult);
        console.log(showenResult);

    }
    if (multiActive == 1 ) {
        controlLength();
        multiActive = 0;
        const showenResult = result.textContent;
        result.textContent = parseFloat(finalResult) * parseFloat(showenResult);
        console.log(finalResult);
        console.log(showenResult);

    }
    if (expActive == 1 ) {
        controlLength();
        expActive = 0;
        const showenResult = result.textContent;
        result.textContent = parseFloat(finalResult) ** parseFloat(showenResult);
        console.log(finalResult);
        console.log(showenResult);

    }
    if (tenkActive == 1 ) {
        controlLength();
        tenkActive = 0;
        const showenResult = result.textContent;
        const tenkControl =  10 ** parseFloat(showenResult);
        result.textContent = parseFloat(finalResult) * tenkControl ;
        console.log(finalResult);
        console.log(showenResult);

    }
    return minusActive, plusActive, divideActive, multiActive, expActive, tenkActive
})
plus.addEventListener("click", function(){
     opInfo.textContent ="+";
     finalResult = result.textContent ;
     plusActive = 1;
     minusActive = 0;
     divideActive = 0;
     multiActive = 0;
     expActive = 0;
     tenkActive = 0;
     result.textContent = "";
     console.log(finalResult);
     return finalResult, plusActive, minusActive, divideActive, multiActive, expActive, tenkActive

})
minus.addEventListener("click", function(){
    opInfo.textContent ="-";
    finalResult = result.textContent ;
    plusActive = 0;
    minusActive = 1;
    divideActive = 0;
    multiActive = 0;
    expActive = 0;
    tenkActive = 0;
    result.textContent = "";
    console.log(finalResult);
    return finalResult, plusActive, minusActive, divideActive, multiActive, expActive, tenkActive


})
divide.addEventListener("click", function(){
    opInfo.textContent ="/";
    finalResult = result.textContent ;
    plusActive = 0;
    minusActive = 0;
    divideActive = 1;
    multiActive = 0;
    expActive = 0;
    tenkActive = 0;
    result.textContent = "";
    console.log(finalResult);
    return finalResult, plusActive, minusActive, divideActive, multiActive, expActive, tenkActive
    

})
multi.addEventListener("click", function(){
    opInfo.textContent ="*";
    finalResult = result.textContent ;
    plusActive = 0;
    minusActive = 0;
    divideActive = 0;
    multiActive = 1;
    expActive = 0;
    tenkActive = 0;
    result.textContent = "";
    console.log(finalResult);
    return finalResult, plusActive, minusActive, divideActive, multiActive, expActive, tenkActive


})
exp.addEventListener("click", function(){
    finalResult = result.textContent ;
    plusActive = 0;
    minusActive = 0;
    divideActive = 0;
    multiActive = 0;
    expActive = 1;
    tenkActive = 0;
    result.textContent = "";
    console.log(finalResult);
    return finalResult, plusActive, minusActive, divideActive, multiActive, expActive, tenkActive


})
tenk.addEventListener("click", function(){
    finalResult = result.textContent ;
    plusActive = 0;
    minusActive = 0;
    divideActive = 0;
    multiActive = 0;
    expActive = 0;
    tenkActive = 1;
    result.textContent = "";
    console.log(finalResult);
    return finalResult, plusActive, minusActive, divideActive, multiActive, expActive, tenkActive


})
perc.addEventListener("click", function(){
    result.textContent = result.textContent / 100;
})
setNeg.addEventListener("click", function(){
    result.textContent = result.textContent += "-";
})
square.addEventListener("click", function(){
    result.textContent = result.textContent * result.textContent;
    controlLength();
})
cube.addEventListener("click", function(){
    result.textContent = result.textContent * result.textContent * result.textContent;
    controlLength();

})
dot.addEventListener("click", function(){
    result.textContent = result.textContent += ".";
})
pi.addEventListener("click", function(){
    result.textContent = "3.14159265359";
    controlLength();

})
sqrt.addEventListener("click", function(){
    result.textContent = Math.sqrt(result.textContent);
    controlLength();

})
copy.addEventListener("click", function(){
    navigator.clipboard.writeText(result.textContent);
})
paste.addEventListener("click", function(){
    navigator.clipboard.readText().then(cliptext => (result.textContent = cliptext)), err => console.log(err);
    controlLength();
})
function numbersaDots(value){
    if(Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0; 
}
round.addEventListener("click", function(){
    
    const newNumber = String(result.textContent);
    var newWord;
    const numberLength = newNumber.length;
    const lastLet = newNumber.slice(-2);
    var newRound;
    if (lastLet > 0 && lastLet < 5) {
        newRound = 0;
    }
    if (lastLet > 5 && lastLet < 10 || lastLet == 10) {
        newRound = 10;
    }
    if (lastLet > 10 && lastLet < 15) {
        newRound = 10;
    }
    if (lastLet > 15 && lastLet < 20) {
        newRound = 20;
    }
    
    if (lastLet > 20 && lastLet < 25) {
        newRound = 20;
    }
    if (lastLet > 25 && lastLet < 30) {
        newRound = 30;
    }
    if (lastLet > 30 && lastLet < 35) {
        newRound = 30;
    }
    if (lastLet > 35 && lastLet < 40) {
        newRound = 40;
    }
    if (lastLet > 40 && lastLet < 45) {
        newRound = 40;
    }
    if (lastLet > 45 && lastLet < 50) {
        newRound = 50;
    }
    if (lastLet > 50 && lastLet < 55) {
        newRound = 50;
    }
    if (lastLet > 55 && lastLet < 60) {
        newRound = 60;
    }
    if (lastLet > 60 && lastLet < 65) {
        newRound = 60;
    }
    if (lastLet > 65 && lastLet < 70) {
        newRound = 70;
    }
    if (lastLet > 70 && lastLet < 75) {
        newRound = 70;
    }
    if (lastLet > 75 && lastLet < 80) {
        newRound = 80;
    }
    if (lastLet > 80 && lastLet < 85) {
        newRound = 80;
    }
    if (lastLet > 85 && lastLet < 90) {
        newRound = 90;
    }
    if (lastLet > 90 && lastLet < 95) {
        newRound = 90;
    }
    if (lastLet > 95 && lastLet < 100) {
        newRound = 00;
    }
    if (lastLet == 5) {
        newRound = 10;
    }
    if (lastLet == 15) {
        newRound = 15;
    }
    if (lastLet == 25) {
        newRound = 25;
    }
    if (lastLet == 35) {
        newRound = 35;
    }
    if (lastLet == 45) {
        newRound = 45;
    }
    if (lastLet == 55) {
        newRound = 55;
    }
    if (lastLet == 65) {
        newRound = 65;
    }
    if (lastLet == 75) {
        newRound = 75;
    }
    if (lastLet == 85) {
        newRound = 85;
    }
    if (lastLet == 95) {
        newRound = 95;
    }

 
   
    if (newNumber.indexOf(".")>-1) {
        var sliceCount;
        var newControlNumberRound;
       const dotLength = numbersaDots(newNumber); 
       console.log(dotLength);
       var resultRounded;
       const wordLength = numberLength - dotLength;
       const slicedNumber = newNumber.slice(wordLength);
       const controlOfDot = numberLength - 1;
        sliceCount = dotLength - controlOfDot;
        newControlNumberRound = String(slicedNumber.slice(0, -sliceCount));
       

       console.log(newControlNumberRound);
       if (newControlNumberRound > 4 && newControlNumberRound < 10) {
        newWord = newNumber.slice(0, -dotLength-1);
        console.log(newWord);
        console.log(wordLength);
        console.log(newControlNumberRound);
        console.log(dotLength); 
        

        resultRounded = parseFloat(newWord) + 1;
        result.textContent = resultRounded;
       }
       else if (newControlNumberRound > -1 && newControlNumberRound < 5) {
        newWord = newNumber.slice(0, -dotLength-1);
        console.log(newControlNumberRound);
        console.log(newWord);
        console.log(wordLength);

        resultRounded = parseFloat(newWord);
        result.textContent = resultRounded;
       }
    }
    else{
    
    newWord = newNumber.slice(0, -2);
    result.textContent = newWord+newRound;
    }
    controlLength();

})


document.getElementById("advancedBtn").addEventListener("click", function(){
    if (adcClicked == 0) {
        adcClicked = 1;
        document.getElementById("advancedMenu").style.display = "block";
        document.getElementById("advancedBtn").classList.add("animatedMenu");
        document.getElementById("advancedBtn").classList.remove("animatedMenuB");

        return adcClicked
    }
    if (adcClicked == 1) {
        adcClicked = 0;
        document.getElementById("advancedMenu").style.display = "none";
        document.getElementById("advancedBtn").classList.remove("animatedMenu");
        document.getElementById("advancedBtn").classList.add("animatedMenuB");

        return adcClicked
    }
})
document.getElementById("extrasBtn").addEventListener("click", function(){
    if (exClicked == 0) {
        exClicked = 1;
        document.getElementById("extras").style.display = "block";
        document.getElementById("extrasBtn").classList.add("animatedMenu");
        document.getElementById("extrasBtn").classList.remove("animatedMenuB");

        return exClicked
    }
    if (exClicked == 1) {
        exClicked = 0;
        document.getElementById("extras").style.display = "none";
        document.getElementById("extrasBtn").classList.remove("animatedMenu");
        document.getElementById("extrasBtn").classList.add("animatedMenuB");

        return exClicked
    }
})
record.addEventListener("click", function(){
    
        if (localStorage.getItem("Result") == "") {
            localStorage.setItem("Result", result.textContent);
            
        }
        else{
            localStorage.removeItem("Result");
            localStorage.setItem("Result", result.textContent);
        }
        
    

    if (localStorage.getItem("Result") == "") {
        localStorage.setItem("Result", result.textContent);
        
        
    }
    else{
        localStorage.removeItem("Result");
        localStorage.setItem("Result", result.textContent);
    }
})
show.addEventListener("click",function(){


    if (showClicked == 0) {
        showClicked = 1;
        document.getElementById("lastRecord").setAttribute("onclick", "addResultFromSave("+localStorage.getItem("Result")+")");
        document.getElementById("lastRecord").style.visibility = "visible";
        document.getElementById("lastRecord").innerHTML = localStorage.getItem("Result");
        return showClicked
    }
    if (showClicked == 1) {
        showClicked = 0;
        document.getElementById("lastRecord").style.visibility = "hidden";
        return showClicked
    }
    
}
)
function controlLength(){
    if (result.textContent.length > 13) {
        result.style.fontSize = "25px";
    }
    if (result.textContent.length > 16) {
        result.style.fontSize = "20px";
    }
    if (result.textContent.length > 20) {
        result.style.fontSize = "15px";
    }
    if (result.textContent.length > 24) {
        result.style.fontSize = "15px";
    }
    if (result.textContent.length > 25) {
        result.textContent ="max";
    }
}
function addResultFromSave(valueOfSave){
    result.textContent = valueOfSave;
}


