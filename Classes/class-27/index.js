/* for(let index=0; index < 10; index++) {
   

   const a = 10;
   console.log(a);
}

const a = 10;
let b = 20; */

/* function removeCharacters(title,character) {
     return  title.replace(character,"");
}

console.log(removeCharacters("Ahmed je c","je")); */

// var array1 = [1,2,34,5,6,7];
// var array2 = array1;

// array2.pop();

// console.log(array1,array2);

function sum  (...args) {
    let asum = 0;
    for(let index = 0; index < args.length; index++){
        const element = args[index];
        asum += element;
    }
    return asum;
};

console.log(sum(1,2,3,4,5,6,"a"));