console.log(this); // gloabal ?
console.log(this === module.exports);


function a(){
    console.log(this === global);
}
a();