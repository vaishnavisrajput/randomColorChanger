const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++){
        color += hex[Math.round(Math.random()*16)];
    }
    return color
}

const stop = document.getElementById("btn2")
const start = document.getElementById("btn1")

let intervalId;
const startChanging = function () {
    intervalId = setInterval(change, 1000);

    function change() {
        document.body.style.backgroundColor = randomColor();
    }
};
const stopChanging = function () {
    clearInterval(intervalId)
};

start.addEventListener('click', startChanging);

stop.addEventListener('click', stopChanging);