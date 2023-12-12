// Global Scope
const globalVar = "I am global Variable";

function globalFunction(){
    const localVar = "I am local variable";
    console.log('localVar: '+localVar);
    console.log('globalVar: '+globalVar);
}

globalFunction();

if(true){
    let blockVar = "I am a block Variable"
    console.log('blockVar: '+blockVar);
}


function hoistingExample(){
    console.log('x1: '+x);
    var x = 10;
    console.log('x2: '+x);
}

hoistingExample();

if(true){
    console.log('x3: '+x);
    let x = 10;
    console.log('x4: '+x);
}