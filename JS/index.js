let i = 1;
let ty = "odd ";
let str = "";

while (i <= 20){
    if(i%2 == 0){
        ty = "even"
        str += i + ty + " ";
    }else{
        ty = "odd"
        str += i + ty + " ";
    }
    i++;
}
console.log(str)