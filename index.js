var produto = document.querySelectorAll(".produtos ul li"),
    toggle = document.querySelector(".toggle");



toggle.addEventListener("click", function(){
    if(document.querySelector(".menu ._ ul").className != "attr"){
        document.querySelector(".menu ._ ul").classList.add("attr");
    }else{
        document.querySelector(".menu ._ ul").classList.remove("attr");
    }
})


produto.forEach((item)=>{
    item.classList.remove('point');
    item.addEventListener("click", function(e){
        e.preventDefault();
        (e.path[1].className == "point") ? item.classList.remove('point') : item.classList.add('point');
        document.querySelector(".produtoImg img").src = e.target.attributes.src.value;
    })
})

