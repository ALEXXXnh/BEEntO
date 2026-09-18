const milk = document.getElementById('milk');
const audio = document.getElementById('sound');
const audio2 = document.getElementById('sound2');
const sushi = document.querySelector('.Buttontobento');

    milk.addEventListener('click', () => {
    audio.currentTime = 0; 
    audio.play();
    });

    const egg = document.getElementById('egg');
    egg.addEventListener('click', () => {
    audio.currentTime = 0; 
    audio.play();
    });

    const rice = document.getElementById('rice');
    rice.addEventListener('click', () => {
    audio.currentTime = 0; 
    audio.play();
    }); 

    const chicken = document.getElementById('chicken');
    chicken.addEventListener('click', () => {
    audio.currentTime = 0; 
    audio.play();
    });

    const cherry = document.getElementById('cherry');
    cherry.addEventListener('click', () => {
    audio.currentTime = 0; 
    audio.play();
    });     

    const tanghulu = document.getElementById('tanghulu');
    tanghulu.addEventListener('click', () => {
    audio.currentTime = 0; 
    audio.play();
    }); 

    const ramen = document.getElementById('ramen');
    ramen.addEventListener('click', () => {
    audio.currentTime = 0; 
    audio.play();
    }); 

    const bread = document.getElementById('bread');
    bread.addEventListener('click', () => {
    audio.currentTime = 0; 
    audio.play();
    });

    sushi.addEventListener('mouseenter', () => {
    audio2.currentTime = 0; 
    audio2.play();
});

