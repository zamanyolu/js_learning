function A(){ };

A.prototype.x= 10;
A.prototype.y= 20;
A.prototype.carp = function (){
        return this.x * this.y;
    }

function B(z){
    this.z = z;
}

B.prototype = A.prototype;

var a = new A();
var b = new B(30);

function C(x,y,z){
    this.z = z;
    A.apply(this,arguments);
}

c = new C(3,4,5);

function K(x,y){
    this.x=x;
    this.y=y;
    this.carp = function(){
        return this.x * this.y;
    }
}

function D(x,y,z){
    this.z=z;
    K.call(this,x,y);
}

d = new D(3,4,5);

function rastgele(x,y){
    return Math.ceil(Math.random() * (y-x) + x);
}

rastgele(10,2);


n =5