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
const equal = document.getElementById("equal");
const result = document.getElementById("result");
const record = document.getElementById("record");
const show = document.getElementById("show");

var finalResult;
var plusActive = 0;
var minusActive = 0;
var divideActive = 0;
var multiActive = 0;
var adcClicked = 0;
var showClicked = 0;
ac.addEventListener("click", function(){
    result.textContent = "";
         plusActive = 0;
         minusActive = 0;
         divideActive = 0;
         multiActive = 0;
    return minusActive, plusActive, divideActive, multiActive

})
one.addEventListener("click", function(){
    result.textContent += 1;
})
two.addEventListener("click", function(){
    result.textContent += 2;
})
three.addEventListener("click", function(){
    result.textContent += 3;
})
four.addEventListener("click", function(){
    result.textContent += 4;
})
five.addEventListener("click", function(){
    result.textContent += 5;
})
six.addEventListener("click", function(){
    result.textContent += 6;
})
seven.addEventListener("click", function(){
    result.textContent += 7;
})
eight.addEventListener("click", function(){
    result.textContent += 8;
})
nine.addEventListener("click", function(){
    result.textContent += 9;
})
zero.addEventListener("click", function(){
    result.textContent += 0;
})
equal.addEventListener("click", function(){
    if (plusActive == 1 ) {
        plusActive = 0;
        const showenResult = result.textContent;
        result.textContent = parseInt(finalResult) + parseInt(showenResult);
        console.log(finalResult);
        console.log(showenResult);

    }
    if (minusActive == 1 ) {
        minusActive = 0;
        const showenResult = result.textContent;
        result.textContent = parseInt(finalResult) - parseInt(showenResult);
        console.log(finalResult);
        console.log(showenResult);

    }
    if (divideActive == 1 ) {
        divideActive = 0;
        const showenResult = result.textContent;
        result.textContent = parseInt(finalResult) / parseInt(showenResult);
        console.log(finalResult);
        console.log(showenResult);

    }
    if (multiActive == 1 ) {
        multiActive = 0;
        const showenResult = result.textContent;
        result.textContent = parseInt(finalResult) * parseInt(showenResult);
        console.log(finalResult);
        console.log(showenResult);

    }
    return minusActive, plusActive, divideActive, multiActive
})
plus.addEventListener("click", function(){
     finalResult = result.textContent ;
     plusActive = 1;
     minusActive = 0;
     divideActive = 0;
     multiActive = 0;
     result.textContent = "";
     console.log(finalResult);
     return finalResult, plusActive, minusActive, divideActive, multiActive

})
minus.addEventListener("click", function(){
    finalResult = result.textContent ;
    plusActive = 0;
    minusActive = 1;
    divideActive = 0;
    multiActive = 0;
    result.textContent = "";
    console.log(finalResult);
    return finalResult, plusActive, minusActive, divideActive, multiActive


})
divide.addEventListener("click", function(){
    finalResult = result.textContent ;
    plusActive = 0;
    minusActive = 0;
    divideActive = 1;
    multiActive = 0;
    result.textContent = "";
    console.log(finalResult);
    return finalResult, plusActive, minusActive, divideActive, multiActive
    

})
multi.addEventListener("click", function(){
    finalResult = result.textContent ;
    plusActive = 0;
    minusActive = 0;
    divideActive = 0;
    multiActive = 1;
    result.textContent = "";
    console.log(finalResult);
    return finalResult, plusActive, minusActive, divideActive, multiActive


})
perc.addEventListener("click", function(){
    result.textContent = result.textContent / 100;
})
setNeg.addEventListener("click", function(){
    result.textContent = result.textContent += "-";
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
record.addEventListener("click", function(){
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
        document.getElementById("lastRecord").style.visibility = "visible";
        document.getElementById("lastRecord").innerHTML = localStorage.getItem("Result");
        return showClicked
    }
    if (showClicked == 1) {
        showClicked = 0;
        document.getElementById("lastRecord").style.visibility = "hidden";
        return showClicked
    }
})
