let i = 1,
    numb = document.querySelector('.numb'),
    addCarro = document.querySelector(".input_carro"),
    toggle = document.querySelector(".toggle"),
    icrementa = document.querySelector('.inputs_asc'),
    decrementa = document.querySelector('.inputs_desc'),
    produto = document.querySelectorAll(".produtos ul li"),
    preco = document.querySelector('.informacao p span');
    countProduto = document.querySelector(".count-produto");










// menu toggle
toggle.addEventListener("click", function(){
    if(document.querySelector(".menu ._ ul").className != "attr"){
        document.querySelector(".menu ._ ul").classList.add("attr");
    }else{
        document.querySelector(".menu ._ ul").classList.remove("attr");
    }
})

// controlers de produtos no catalogo
produto.forEach((item)=>{
    item.addEventListener("click", function(e){
        e.preventDefault();
        clear();
        (e.path[1].className == "point") ? item.classList.remove('point') : item.classList.add('point');
        document.querySelector(".produtoImg img").src = e.target.attributes.src.value;
    })
})


function clear(){
    produto.forEach((item)=>{
        item.classList.remove('point');    
    })
}

icrementa.addEventListener("click", function(){
    i++
    numb.innerHTML = i;
    // preco.innerHTML = preco.innerText*i;
})

decrementa.addEventListener("click", function(){
    (i < 1) ? i=1 : i--;
    (i >= 1) ? numb.innerHTML = i : '';
    // (i > 0) ? preco.innerHTML = (preco.innerText*i/2) : '';
})

addCarro.addEventListener("click", function(){
    let produtoItens = parseInt(parseInt(numb.innerText)+parseInt(countProduto.innerText));
    countProduto.innerHTML = produtoItens;

    // salva sessao
    localStorage.setItem("carro", parseInt(countProduto.innerText));
})




// sessao banco improvisado
if(!window.localStorage.getItem("carro"))
{
  localStorage.setItem("carro","0");
  countProduto.innerHTML = localStorage.getItem("carro");
}
else
{
    countProduto.innerHTML = localStorage.getItem("carro");
}


// repositirio de dados
let dados = [
    {id: 1, produto: ""}
]