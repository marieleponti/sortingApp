"using strict"
const size = 40;
const min = 0;
const max = 1000;
let array = [size];
let sortedArray = [size];
let chartLabels = ["Element 1", "Element 2", "Element 3", "Element 4", "Element 5", "Element 6", "Element 7", "Element 8",
"Element 9", "Element 10", "Element 11", "Element 12", "Element 13", "Element 14", "Element 15", "Element 16",
"Element 17", "Element 18", "Element 19", "Element 20", "Element 21", "Element 22", "Element 23", "Element 24",
"Element 25", "Element 26", "Element 27", "Element 28", "Element 29", "Element 30", "Element 31", "Element 32",
"Element 33", "Element 34", "Element 35", "Element 36", "Element 37", "Element 38", "Element 39", "Element 40"
];

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

function generateRandom(){
    return Math.floor(Math.random() * (max - min) + min);
}

// event listener when page loads
document.addEventListener("DOMContentLoaded", () => {
    //add event listener to button
    document.getElementById('generateArray').addEventListener("click", generateArray);
});

function generateArray(){
    for(var i = 0; i < size; i++){
        array[i] = generateRandom(min, max);
    }
    myChart.update();
    const merge = document.getElementById('mergeSort');
    // add click handler to button
    merge.addEventListener("click", mergesort);
    //bubble
    const bubble = document.getElementById('bubbleSort');
    // add click handler to button
    bubble.addEventListener("click", bubblesort);
}

function mergesort(){
    console.log("mergesort");
    array = mergesortAux(array);
    //myChart.data.datasets.data = array;
    myChart.update();
    console.log(array);
};

function mergesortAux(array){
    var length = array.length;
    if(length === 1) {     
        return array;       
    }
    var mid = Math.floor(length / 2);    
    var left = array.slice(0, mid);      
    var right = array.slice(mid, length); 
    //myChart.update();
    return merge(mergesortAux(left), mergesortAux(right)); 
};

function merge(left, right){
    var result = []; 
    var il = 0;
    var ir = 0;
 
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

function bubblesort(){
    console.log("bubblesort")
    let i = 0;
    let swap = true;
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
            console.log("bubblesort");
            myChart.update();
        }
    }
};