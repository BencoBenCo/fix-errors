//Fix the error
function myFunction() {
    let myObject = {
        objProperty: 'some text',
        objMethod: function () {
            let objNew = this.objProperty;
            console.log(objNew);
        }
    };
    myObject.objMethod();
}
myFunction();
console.log("My this", this)

console.log(this)
// function test (){
//  console.log(this)
// }