//Maya Conway
//code.js
//Iterative In-place Mergesort
//3-20-25

function mergesort(array) {
    var i, k;

    for (i = 1; i < array.length; i *= 2) {  //outer loop determines size of sub arrays based on i
        for (k = 0; k + i < array.length; k += 2 * i) {  //inner loop sets k which will determine the bounds of the subarrays
            var mid = k + i;
            var lo = k;
            var hi = Math.min(k + 2 * i - 1, array.length - 1); //in case hi is out of bounds
            merge(array, lo, mid, hi); 
        }
    }
    return array;
}

function merge(array, lo, mid, hi) {
    while (lo < mid && mid <= hi) {
        if (array[lo] <= array[mid]) { //if already in order, move forward
            lo++;
        } else {
            var val = array[mid]; //otherwise, mid is out of order
            var index = mid;
            while (index > lo) {                 //make room for the in place sorting
                array[index] = array[index - 1];
                index--;
            }
            array[lo] = val; //put the value in its place
            lo++;
            mid++;
        }
    }
}


