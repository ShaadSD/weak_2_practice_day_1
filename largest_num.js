var numbers = [1,2,3,3,4,4,5,6,7,8,9,10];
let element=numbers[0];
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>element){
        element=numbers[i];
    }
}
console.log(element);