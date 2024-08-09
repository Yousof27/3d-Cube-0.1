let btn = document.querySelector('.turn');

btn.addEventListener("mouseenter", ()=>{
    setTimeout(() => {
        let mainFace = document.querySelector('.face5');
        mainFace.style.backgroundImage = `url(../imgs/5.jpg)`;
        mainFace.innerText = '';
    }, 3000);
})