
function add(){
    let a=20,b=43;
    console.log(a+b);
}

console.log("calling the function");
add() 


function add(a,b){
    console.log(a+b);   //passing values without returning values
}
add(343,87); 


function add() {
    let a=43,b=23
    return a+b;
}                        //no passing values with returning values
let res=add();
console.log(res); 


function add(a,b){
    return a+b;
}                         //with passing values and with retunng values
let res1=add(43,65);
console.log(res1);



