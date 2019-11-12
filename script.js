let example = document.getElementById("example"),
    ctx     = example.getContext('2d');
    ctx.fillStyle = 'aliceblue';
    ctx.fillRect(0, 0, 512, 512); //начальная заливка холста

const size = 512;
const TraceryJsonSize = 4;
const CodewarsJsonSize = 32;
let scale;
let JsonSource;
const img = new Image();  // Создание нового объекта изображения
img.src = "./data/rs_school_logo.png";  // Путь к изображению которое необходимо нанести на холст

//функция для переноса содержимого джейсона на канвас
function DrawJson(JsonSize) {
    scale = size/JsonSize;
    JsonSize===TraceryJsonSize ? JsonSource='data/4x4.json':JsonSource='data/32x32.json';
    let req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('GET', JsonSource, true);
    req.onload  = function() {
        let jsonResponse = req.response;
        for (let x=0; x<jsonResponse.length; x++) {
            jsonResponse[x].forEach(function(item, i) {
                if (JsonSize===TraceryJsonSize) {
                    ctx.fillStyle = '#' + item;
                } else {
                    ctx.fillStyle = "rgb("+jsonResponse[x][i][0]+"," +jsonResponse[x][i][1]+"," +jsonResponse[x][i][2]+")";
                }
                ctx.fillRect(x*scale, i*scale, scale, scale);
            });
        }
    };
    req.send(null);
};

//рисование по переключению
const tracery=document.getElementById('tracery');
tracery.addEventListener('click',function(){
    DrawJson(TraceryJsonSize);
});

//отрисовка логотипа Codewars
const logo=document.getElementById('logo');
logo.addEventListener('click',function(){
    DrawJson(CodewarsJsonSize);
});

//отрисовка логотипа RS School
const RSSchool=document.getElementById('rs-pic');
RSSchool.addEventListener('click',function(){
    ctx.drawImage(img, 0, 0, 512, 512);
});

