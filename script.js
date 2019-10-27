/*
async function foo() {
    return  await getArr('./data/4x4.json');
}
let d =[];
const getArr = (url) => fetch(url)
    .then(
        function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }

            // Examine the text in the response
            response.json().then(function(data) {
                console.log(data);
                d = data;
               return data;
            });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
console.log(foo());
*/

let example = document.getElementById("example"),
    ctx     = example.getContext('2d');
    ctx.fillStyle = 'aliceblue';
    ctx.fillRect(0, 0, 512, 512); //начальная заливка холста

let size = 512;
let areas1 = 4;
let areas2 = 32;
let scale;
let img = new Image();  // Создание нового объекта изображения
img.src = 'image.png';  // Путь к изображению которое необходимо нанести на холст
//рисование по переключению
let tracery=document.getElementById('tracery');
tracery.addEventListener('click',function(){
    scale = size/areas1;
    let req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('GET', 'data/4x4.json', true);
    req.onload  = function() {
        let jsonResponse = req.response;
        for (let x=0; x<jsonResponse.length; x++) {
            jsonResponse[x].forEach(function(item, i) {
                ctx.fillStyle = '#' + item;
                ctx.fillRect(x*scale, i*scale, scale, scale);
            });
        }
    };
    req.send(null);
});

let logo=document.getElementById('logo');
logo.addEventListener('click',function(){
    scale = size/areas2;
    let req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('GET', 'data/32x32.json', true);
    req.onload  = function() {
        let jsonResponse = req.response;
        for (let x=0; x<jsonResponse.length; x++) {
            jsonResponse[x].forEach(function(item, i) {
                function rgb(r, g, b){
                    return "rgb("+r+","+g+","+b+")";
                }
                const color= rgb(jsonResponse[x][i][0], jsonResponse[x][i][1], jsonResponse[x][i][2]);
                ctx.fillStyle = color;
                ctx.fillRect(x*scale, i*scale, scale, scale);
            });
        }
    };
    req.send(null);
});

let RSSchool=document.getElementById('rs-pic');
RSSchool.addEventListener('click',function(){
    ctx.drawImage(img, 0, 0, 512, 512);
});

