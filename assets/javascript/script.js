function is_numeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function calculate() {
    var bill = parseInt(document.getElementById("bill").value);
    var tip = parseInt(document.getElementById("tip").value) * .01;
    var persons = parseInt(document.getElementById("persons").value || 0);

    if (!is_numeric(bill) || !is_numeric(tip)) {
        alert("Please enter values for bill and tip");
        location.reload();
        return;
    };

    if (persons == 0 || persons <= 1) {
        persons = 1;

        document.getElementById("perPerson").style.display = "none";

    } else {

    }

    let totalTipPer = (bill * tip) / persons;
    let totalPer = (bill + (tip * 100)) / persons;
    let totalTip = bill * tip;
    let total = bill + (tip * 100);

    totalTipPer = totalTipPer.toFixed(2);
    totalPer = totalPer.toFixed(2);
    total = total.toFixed(2);
    totalTip = totalTip.toFixed(2);

    // document.getElementById("total-tip/person").style.display = "block";
    document.getElementById("total-tip/person").innerHTML = totalTipPer;
    // document.getElementById("total-price/person").style.display = "block";
    document.getElementById("total-price/person").innerHTML = totalPer;
    // document.getElementById("total-tip").style.display = "block";
    document.getElementById("total-tip").innerHTML = totalTip;
    // document.getElementById("total-price").style.display = "block";
    document.getElementById("total-price").innerHTML = total;
}

function showBetween() {
    document.getElementById('between').style.display = 'block';
    console.log("working");
}

document.getElementById("perPerson").style.display = 'block';


document.getElementById("calculate").onclick = function () {
    calculate();
    document.getElementById('results').style.display = 'block';
}




