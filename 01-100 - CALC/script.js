function insert(num){
    var numero = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = numero + num;
}

function clean(){
    document.getElementById('res').innerHTML = "";
}