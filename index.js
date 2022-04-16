console.log(100)
let hello=1
console.log(hello)


let A=[]
for(let i=0;i<100;i++)
{
    A.push(i)
}

console.log(A)

//import Plotly from 'plotly.js-dist-min'
//let Plotly = require('plotly.js-dist-min')
B=Plotly.newPlot("uu", /* JSON object */ {
    "data": [{ "y": [1, 2, 3] }],
    "layout": { "width": 600, "height": 400}
})

// var data = [B];

// var layout = {
//     title: 'Scroll and Zoom',
//     showlegend: false
// };

// Plotly.newPlot('uu', data, layout, {scrollZoom: true});
