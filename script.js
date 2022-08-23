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
const equal = document.getElementById("equal");
const result = document.getElementById("result");
const record = document.getElementById("record");
const show = document.getElementById("show");

var finalResult;
var plusActive = 0;
var minusActive = 0;
var divideActive = 0;
var multiActive = 0;
var expActive = 0;
var adcClicked = 0;
var showClicked = 0;
var exClicked = 0;
ac.addEventListener("click", function(){
    result.style.fontSize = "30px";
    result.textContent = "";
         plusActive = 0;
         minusActive = 0;
         divideActive = 0;
         multiActive = 0;
    return minusActive, plusActive, divideActive, multiActive

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
    return minusActive, plusActive, divideActive, multiActive, expActive
})
plus.addEventListener("click", function(){
     finalResult = result.textContent ;
     plusActive = 1;
     minusActive = 0;
     divideActive = 0;
     multiActive = 0;
     expActive = 0;
     result.textContent = "";
     console.log(finalResult);
     return finalResult, plusActive, minusActive, divideActive, multiActive, expActive

})
minus.addEventListener("click", function(){
    finalResult = result.textContent ;
    plusActive = 0;
    minusActive = 1;
    divideActive = 0;
    multiActive = 0;
    expActive = 0;
    result.textContent = "";
    console.log(finalResult);
    return finalResult, plusActive, minusActive, divideActive, multiActive, expActive


})
divide.addEventListener("click", function(){
    finalResult = result.textContent ;
    plusActive = 0;
    minusActive = 0;
    divideActive = 1;
    multiActive = 0;
    expActive = 0;
    result.textContent = "";
    console.log(finalResult);
    return finalResult, plusActive, minusActive, divideActive, multiActive, expActive
    

})
multi.addEventListener("click", function(){
    finalResult = result.textContent ;
    plusActive = 0;
    minusActive = 0;
    divideActive = 0;
    multiActive = 1;
    expActive = 0;
    result.textContent = "";
    console.log(finalResult);
    return finalResult, plusActive, minusActive, divideActive, multiActive, expActive


})
exp.addEventListener("click", function(){
    finalResult = result.textContent ;
    plusActive = 0;
    minusActive = 0;
    divideActive = 0;
    multiActive = 0;
    expActive = 1;
    result.textContent = "";
    console.log(finalResult);
    return finalResult, plusActive, minusActive, divideActive, multiActive, expActive


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


