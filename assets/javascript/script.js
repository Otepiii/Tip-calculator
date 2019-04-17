function calculate() {
    var bill = parseInt(document.getElementById("bill").value);
    var tip = parseInt(document.getElementById("tip").value) * .01;
    var persons = parseInt(document.getElementById("persons").value);

    if (bill === "" || tip === "") {
        alert("Please enter value");
        return;
    }

    if (persons <= 0) {
        persons = 1;
        document.getElementsByClassName("person-result").style.display = "none";
    } else {
        // document.getElementsByClassName("person-result").style.display = "block";
    }

    let totalTipPer = (bill * tip)/ persons;
    let totalPer = (bill + (tip*100))/ persons;
    let totalTip= bill * tip;
    let total = bill + (tip*100);

    totalTipPer = totalTipPer.toFixed(2);
    totalPer = totalPer.toFixed(2);
    total = total.toFixed(2);
    totalTip = totalTip.toFixed(2);

    document.getElementById("total-tip/person").style.display="block";
    document.getElementById("total-tip/person").innerHTML = totalTipPer; 
    document.getElementById("total-price/person").style.display="block";
    document.getElementById("total-price/person").innerHTML = totalPer; 
    document.getElementById("total-tip").style.display="block";
    document.getElementById("total-tip").innerHTML = totalTip; 
    document.getElementById("total-price").style.display="block";
    document.getElementById("total-price").innerHTML = total; 
}

function showSplit() {

}

function showResults() {
    
}

document.getElementById("total-tip/person").style.display="none";



document.getElementById("calculate").onclick = function() {
    calculate();
}




// button.onclick = function () {
//     if (content.className == "results") {
//         calcuTip();
//     } else {
//         content.className = "open";
//     }
// };



// function calcuTip(b,t) {
//     let tipValue = bill * tip;
//     let total = bill + tipValue;

//     return total
// }

// function splitBill() {
//     var persons = parseInt(document.getElementById("persons").value);
//     var billPerPerson = (bill + tipValue) / persons;
//     var tipPerPerson = tipValue / persons;

//     console.log(billPerPerson, tipPerPerson);
// }



