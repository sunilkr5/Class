function bill(){
    var Idli =parseInt(document.getElementById("Idli").value)*20;
    var Pulav =parseInt(document.getElementById("Pulav").value)*40;
    var Poori =parseInt(document.getElementById("Poori").value)*40;
    var Dosa =parseInt(document.getElementById("Dosa").value)*40;
    var Cofee =parseInt(document.getElementById("Cofee").value)*40;
    var Tea =parseInt(document.getElementById("Tea").value)*40;;

    var total =idli + Pulav + Poori + Dosa + Coffe

    var bill = document.getElementById("total");
    bill.innerHTML = "Yout Total Amount is :"+" "+total;

    
}
