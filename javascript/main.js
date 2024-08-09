let btn = document.querySelector('.turn');

btn.addEventListener("mouseenter", ()=>{
    setTimeout(() => {
        let mainFace = document.querySelector('.face5');
        mainFace.classList.add('start')
        mainFace.innerText = '';
    }, 3000);
})

