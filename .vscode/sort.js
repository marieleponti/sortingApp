let arraySize = 40;
let min = 0;
let max = 1000;
let array = [arraySize];
let sortedArray = [arraySize];

generateArray();

function generateArray(){
    for(var i = 0; i < arraySize; i++){
        array[i] = generateRandom(min, max);
    }
}

function generateRandom(){
    return Math.floor(Math.random() * (max - min) + min);
}

function bubblesort(array){
    i = 0;
    swap = true;
    while (swap){
        swap = false;
        i++;
        for (j = 0; j < array.length - i; j++){
            if (array[j] > array[j + 1]){
                swap(arr, j, j + 1);
            }
            swap = true;
            printArray(arr);
        }
    }
}

function swap(arr, index1, index2){
    temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

console.log(array)

 // target canvas
 let ctx = document.getElementById("myChart").getContext('2d');
 let myChart = new Chart(ctx, {
     type: "bar",
     data: {
         labels: ["Element 1", "Element 2", "Element 3", "Element 4", "Element 5", "Element 6", "Element 7", "Element 8",
         "Element 9", "Element 10", "Element 11", "Element 12", "Element 13", "Element 14", "Element 15", "Element 16",
         "Element 17", "Element 18", "Element 19", "Element 20", "Element 21", "Element 22", "Element 23", "Element 24",
         "Element 25", "Element 26", "Element 27", "Element 28", "Element 29", "Element 30", "Element 31", "Element 32",
         "Element 33", "Element 34", "Element 35", "Element 36", "Element 37", "Element 38", "Element 39", "Element 40"
         ],
         datasets: [{
             data: array, 
             backgroundColor: "rgb(111, 99, 236)",
             borderWidth: 2
         }]
     },
     options:{
         title: {
             text: "Sorting Algorithm",
             display: true
         },
         legend:{
             display: false
         }
     }
 });