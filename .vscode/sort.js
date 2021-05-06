"using strict"
const size = 40;
const min = 0;
const max = 1000;
var array = [size];
var sortedArray = [size];
var chartLabels = ["Element 1", "Element 2", "Element 3", "Element 4", "Element 5", "Element 6", "Element 7", "Element 8",
"Element 9", "Element 10", "Element 11", "Element 12", "Element 13", "Element 14", "Element 15", "Element 16",
"Element 17", "Element 18", "Element 19", "Element 20", "Element 21", "Element 22", "Element 23", "Element 24",
"Element 25", "Element 26", "Element 27", "Element 28", "Element 29", "Element 30", "Element 31", "Element 32",
"Element 33", "Element 34", "Element 35", "Element 36", "Element 37", "Element 38", "Element 39", "Element 40"
];

// event listener when page loads
document.addEventListener("DOMContentLoaded", () => {
    //add event listener to button
    document.getElementById('generateArray').addEventListener("click", generateArray);
    //generate array
    generateArray();
});

function generateArray(){
    for(var i = 0; i < size; i++){
        array[i] = generateRandom(min, max);
    }
    myChart.update();
    link();
}

function generateRandom(){
    return Math.floor(Math.random() * (max - min) + min);
}
// -------------- set up chart ------------------------------
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: chartLabels,
        datasets: [{
            data: array, 
            backgroundColor: "rgb(111, 99, 236)",
            borderWidth: 2
        }]
    },
    options:{
        plugins:{
           legend:{
               display: false
           }
        }
    }
});
// --------------------------------------------------------


function link(){
    //bubble
    const bubble = document.getElementById('bubbleSort');
    // add click handler to button
    bubble.addEventListener("click", bubblesort);
    //merge 
    const merge = document.getElementById('mergeSort');
    // add click handler to button
    merge.addEventListener("click", mergesort);
}

function bubblesort(){
    let i = 0;
    var swap = true;
    while (swap){
        swap = false;
        i++;
        for (let j = 0; j < array.length - i; j++){
            if (array[j] > array[j + 1]){
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                myChart.update();
            }
            swap = true;
            myChart.update();
        }
    }
}


function mergesort(){
    console.log("mergesort");
    array = mergesortAux(array);
};

function mergesortAux(array){
    console.log("mergesortAux");
    var length = array.length;
    if(length === 1) {     
        return array;       
    }
    var mid = Math.floor(length / 2),    
        left = array.slice(0, mid),      
        right = array.slice(mid, length); 

    return merge(mergesortAux(left), mergesortAux(right)); 
};

function merge(left, right){
    console.log("merge");
    var result = [], 
        il = 0,
        ir = 0;
 
    while(il < left.length && ir < right.length) { 
        if(left[il] <= right[ir]) {
            result.push(left[il++]);  
        } else{
            result.push(right[ir++]);
        }
    }
    while (il < left.length){    
        result.push(left[il++]);
    }
    while (ir < right.length){   
        result.push(right[ir++]);
    }
    return result; 
};