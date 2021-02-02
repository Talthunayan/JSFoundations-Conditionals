// Define the numbers and the operation here
let x=5;
let y=0;
let operation="+";
// Write if-statements here

// +
if(operation=="+"){
    let ans=x+y;
    console.log(x+operation+y+"= "+ans);
}
//  -
else if (operation=="-"){
    if (x<y){
        console.log("Answer is Negative:")
    } else {
        console.log(" Answer is Posative:")
    }
let ans=x-y;
console.log(x+operation+y+"= "+ans);
}

// *
else if (operation=="x"){
    let ans=x*y;
    console.log(x+operation+y+"= "+ans);

} 
// /
else if(operation=="/"){
 if(y==0){
     console.log("Please  change  Y therefore its  an error")
 }
 let ans=x/y;
 console.log(x+operation+y+"= "+ans);
// 
}
   else { 
    console.log("something wrong");
}