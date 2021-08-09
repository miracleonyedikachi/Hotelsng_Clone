function segun (a,b,c){
return a*b*c;
}
var dami=segun.bind(this,10);
console.log(dami(5,1));
var seyi=segun.bind(this,700,40,1000);
console.log(seyi());
//function currying