/* var grade =64;

if (grade < 55 ){

    console.log("Vasa ocena je 5");
    
} else if(grade >  55 && grade <= 65 ) {

    console.log("vasa ocena je 6");
} */

/* 
var a=20;
var b =30;
var c=25;

if ( a>b) {
    if(a>c){
        console.log(`veci broj je ${a}`);
    }
} 
else {
    if{b>c}
    console.log(`veco broj ke ${b}`);
}else{
    console.log(`veci broj je ${C}`);
} */

//Array
/* push,pop
    shift,unshift
    concat
    findIndex
    includes */


/* var a = [1, 2, 3, 4, 5, "2"];

var array = [1, 2, 3, 4, [1, 2, 3, 4, [1, 2, 3, 4,  [1, 2, 3, 4]]]];

console.log(array [4] [4] [4] [2]);

var array = [[["nesto"], ["nesto2"], ]];
 */

/* var array = [1, 2, 3, 4, 5, 6];
var max= array[0];
var min= array[0];
for (var i=0; i<array.length; i++) 

{
    if(min > array[i]) {
        min = array[i]
    }

    if(max < array[i]) {
        max = array[i]
    }
}

console.log(max,min);

 */

/* var array1 = ["a", "b", "c", "d"];

var array2 = ["a", "b", "f"];

var compare = [];
 
for (let index1 = 0; index1 < array1.length; index1++) {
   for (let index2 = 0; index2 < array2.length; index2++) {
       if(array1[index1] == array2[index2]) {
       compare.push(array1[index1]);
    }
   }
    
}

console.log(compare); */

/* var a =10;

switch(a){
    case 10:
        console.log("this is 10");
        break;
case 20:
    console.log("this is 10");
    break;
    default:
        console.log("default");
        break;    
} */

["red","green","blue","white"]

function getHexColor(color){

    switch(color){
        case "red":
            return "#FF0000";
            case "green":
                return "000FF00";

    }


}

console.log(getHexColor("red"));