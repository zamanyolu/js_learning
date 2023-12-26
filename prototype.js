function A(x,y){
    this.x= x;
    this.y = y;
    this.carp = new function (){
        return this.x * this.y;
    }
}

function B(z){
    this.z = z;
}

B.prototype = new A();

var a = new A(10,20);
var b = new B(30);

n =5
