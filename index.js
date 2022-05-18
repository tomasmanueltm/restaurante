var produto = document.querySelectorAll(".produtos ul li");




produto.forEach((item)=>{
    item.classList.remove('point');
    item.addEventListener("click", function(e){
        e.preventDefault();
        // console.log(e.path[1].className);
        // (e.path[1].className == "point") ? item.classList.remove('point') : item.classList.add('point');
        document.querySelector(".produtoImg img").src = e.target.attributes.src.value;
    })
})