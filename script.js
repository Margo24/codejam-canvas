const arr =
    [["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
    ["FFEB3B", "FFC107","FFC107","FFEB3B"],
    ["FFEB3B", "FFC107","FFC107","FFEB3B"],
    ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]
];


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
console.log(d);
console.log(foo());
*/

//let dataFile = require('4x4.json');
//let Data = JSON.parse(a);
//console.log(Data);

var example = document.getElementById("example"),
    ctx     = example.getContext('2d');
ctx.fillStyle = 'aliceblue';
ctx.fillRect(100, 50, 512, 512);
/*
ctx.fillStyle = 'rgb(200, 0, 0)';
ctx.fillRect(10, 10, 50, 50);

ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
ctx.fillRect(30, 30, 50, 50);

 */

let size1 = 512;
let areas = 4;
let scale = size1/areas;
/*
for (var x=0; x<=arr[0].length; x++) {
    ctx.fillStyle = '#' + arr[0][x];
    ctx.fillRect(x*scale, 0 , scale, scale);
}
 */

for (var x=0; x<arr.length; x++) {
    arr[x].forEach(function(item, i) {
        ctx.fillStyle = '#' + item;
        ctx.fillRect(x*scale, i*scale, scale, scale);
        console.log('i '+i+',x '+x);
    });
}


