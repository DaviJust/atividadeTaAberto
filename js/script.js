var button = document.querySelector (".buttonAbrir");
button.onclick = function() {
    button.style.backgroundColor = "red"
    document.createElement('div');
    var div = document.querySelector ("div");
    div.innerHTML =     `
    <p>Estamos abertos</p>
    `
    
}
var button2 = document.querySelector (".buttonFechar");
button2.onclick = function() { 
    button.style.backgroundColor = "white"
    var div = document.querySelector("div")
    div.innerText = "Estamos fechando";
    

}

// Pq teve que localizar o div novamente na outra funcao?