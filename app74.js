let arr  = [8 , 9 , 10 , 1 , 2 , 3 , 4 , 5 , 6];
let num = 3;

function getElements (arr,num) {
    for (i=1; i<=arr.length;i++) {
        if (arr[i]>num) {
            console.log(arr[i]);
        }
    }
}

getElements(arr,num);