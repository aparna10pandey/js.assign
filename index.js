var array = [1,5,20,100,-1];
var largest= 0;

for (i=0; i<=array.length;i++){
    if (array[i]>largest) {
        var largest = array[i];
    }
}

console.log(largest);
