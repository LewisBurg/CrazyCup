var totalScore = 0;

document.getElementById("total").innerHTML = totalScore;



function hole1(){
    var a = document.getElementById("hole1");
    console.log("Hole One: " + a.value);
    if(a.value > 3){
        document.getElementById("hole1").style.color = "red";
    }
    if(a.value < 3){
        document.getElementById("hole1").style.color = "green";
    }
    if(a.value == 3){
        document.getElementById("hole1").style.color = "black";
    }

    totalScore = totalScore + parseInt(a.value);

    document.getElementById("total").innerHTML = totalScore;

    if(totalScore < 27){
        document.getElementById("total").style.color = "green";
    }
    if(totalScore > 27){
        document.getElementById("total").style.color = "red";
    }
    if(totalScore == 27){
        document.getElementById("total").style.color = "black";
    }
    
}

function hole2(){
    var b = document.getElementById("hole2");
    console.log("Hole Two: " + b.value);
    if(b.value > 3){
        document.getElementById("hole2").style.color = "red";
    }
    if(b.value < 3){
        document.getElementById("hole2").style.color = "green";
    }
    if(b.value == 3){
        document.getElementById("hole2").style.color = "black";
    }
    totalScore = totalScore + parseInt(b.value);

    document.getElementById("total").innerHTML = totalScore;

    if(totalScore < 27){
        document.getElementById("total").style.color = "green";
    }
    if(totalScore > 27){
        document.getElementById("total").style.color = "red";
    }
    if(totalScore == 27){
        document.getElementById("total").style.color = "black";
    }
}

function hole3(){
    var c = document.getElementById("hole3");
    console.log("Hole Three: " + c.value);
    if(c.value > 3){
        document.getElementById("hole3").style.color = "red";
    }
    if(c.value < 3){
        document.getElementById("hole3").style.color = "green";
    }
    if(c.value == 3){
        document.getElementById("hole3").style.color = "black";
    }
    totalScore = totalScore + parseInt(c.value);

    document.getElementById("total").innerHTML = totalScore;

    if(totalScore < 27){
        document.getElementById("total").style.color = "green";
    }
    if(totalScore > 27){
        document.getElementById("total").style.color = "red";
    }
    if(totalScore == 27){
        document.getElementById("total").style.color = "black";
    }
}

function hole4(){
    var d = document.getElementById("hole4");
    console.log("Hole Four: " + d.value);
    if(d.value > 3){
        document.getElementById("hole4").style.color = "red";
    }
    if(d.value < 3){
        document.getElementById("hole4").style.color = "green";
    }
    if(d.value == 3){
        document.getElementById("hole4").style.color = "black";
    }
    totalScore = totalScore + parseInt(d.value);

    document.getElementById("total").innerHTML = totalScore;

    if(totalScore < 27){
        document.getElementById("total").style.color = "green";
    }
    if(totalScore > 27){
        document.getElementById("total").style.color = "red";
    }
    if(totalScore == 27){
        document.getElementById("total").style.color = "black";
    }
}

function hole5(){
    var e = document.getElementById("hole5");
    console.log("Hole Five: " + e.value);
    if(e.value > 3){
        document.getElementById("hole5").style.color = "red";
    }
    if(e.value < 3){
        document.getElementById("hole5").style.color = "green";
    }
    if(e.value == 3){
        document.getElementById("hole5").style.color = "black";
    }
    totalScore = totalScore + parseInt(e.value);

    document.getElementById("total").innerHTML = totalScore;

    if(totalScore < 27){
        document.getElementById("total").style.color = "green";
    }
    if(totalScore > 27){
        document.getElementById("total").style.color = "red";
    }
    if(totalScore == 27){
        document.getElementById("total").style.color = "black";
    }
}

function hole6(){
    var f = document.getElementById("hole6");
    console.log("Hole Six: " + f.value);
    if(f.value > 3){
        document.getElementById("hole6").style.color = "red";
    }
    if(f.value < 3){
        document.getElementById("hole6").style.color = "green";
    }
    if(f.value == 3){
        document.getElementById("hole6").style.color = "black";
    }
    totalScore = totalScore + parseInt(f.value);

    document.getElementById("total").innerHTML = totalScore;

    if(totalScore < 27){
        document.getElementById("total").style.color = "green";
    }
    if(totalScore > 27){
        document.getElementById("total").style.color = "red";
    }
    if(totalScore == 27){
        document.getElementById("total").style.color = "black";
    }
}

function hole7(){
    var g = document.getElementById("hole7");
    console.log("Hole Seven: " + g.value);
    if(g.value > 3){
        document.getElementById("hole7").style.color = "red";
    }
    if(g.value < 3){
        document.getElementById("hole7").style.color = "green";
    }
    if(g.value == 3){
        document.getElementById("hole7").style.color = "black";
    }
    totalScore = totalScore + parseInt(g.value);

    document.getElementById("total").innerHTML = totalScore;

    if(totalScore < 27){
        document.getElementById("total").style.color = "green";
    }
    if(totalScore > 27){
        document.getElementById("total").style.color = "red";
    }
    if(totalScore == 27){
        document.getElementById("total").style.color = "black";
    }
}

function hole8(){
    var h = document.getElementById("hole8");
    console.log("Hole Eight: " + h.value);
    if(h.value > 3){
        document.getElementById("hole8").style.color = "red";
    }
    if(h.value < 3){
        document.getElementById("hole8").style.color = "green";
    }
    if(h.value == 3){
        document.getElementById("hole8").style.color = "black";
    }
    totalScore = totalScore + parseInt(h.value);

    document.getElementById("total").innerHTML = totalScore;

    if(totalScore < 27){
        document.getElementById("total").style.color = "green";
    }
    if(totalScore > 27){
        document.getElementById("total").style.color = "red";
    }
    if(totalScore == 27){
        document.getElementById("total").style.color = "black";
    }
    
}

function hole9(){
    var i = document.getElementById("hole9");
    console.log("Hole Nine: " + i.value);
    if(i.value > 3){
        document.getElementById("hole9").style.color = "red";
    }
    if(i.value < 3){
        document.getElementById("hole9").style.color = "green";
    }
    if(i.value == 3){
        document.getElementById("hole9").style.color = "black";
    }
    totalScore = totalScore + parseInt(i.value);

    document.getElementById("total").innerHTML = totalScore;

    if(totalScore < 27){
        document.getElementById("total").style.color = "green";
    }
    if(totalScore > 27){
        document.getElementById("total").style.color = "red";
    }
    if(totalScore == 27){
        document.getElementById("total").style.color = "black";
    }
}

function minusHole9(){
    totalScore = totalScore - parseInt(i.value);
}


function addTotal(){

    console.log(parseInt(totalScore));

    var overPar = totalScore - 27;

    var underPar = totalScore - 27;

    if (totalScore > 27){
        alert(totalScore+"!")
        alert("You shot " + overPar + " over par!" )
    }
    if (totalScore < 27){
        alert(totalScore+"!")
        alert("You shot " + underPar + " under par!" )
    }
    if (totalScore == 27){
        alert(totalScore+"!")
        alert("You shot level par!" )
    }

}



