const images=document.querySelectorAll(".image")
const lists=document.querySelectorAll("ul li")

lists.forEach((e,i)=>{
    e.addEventListener('click',()=>{
        images.forEach((el)=>{
            el.classList.remove("show")
        })
        lists.forEach((el)=>{
            el.classList.add('active')
        })
        e.classList.add('active')
        images[i].classList.add("show")
    })
})