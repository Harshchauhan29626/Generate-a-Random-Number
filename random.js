function myrandom (){
    let btn =Math.floor(Math.random() * 1000);

    document.getElementById("p1").innerHTML = "Random Number:" + btn;
}