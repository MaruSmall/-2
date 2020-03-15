function p(n){
	var r=0,a=3,b=1,x=0;
	for(var i=0;i<n;i++) {
		r=(a*x*x-b)/2;
		a=a+2;
		b=(b+2)*x;
		x=x+0.05;
	}
	return r;
}
var t;
t = prompt("Введите число");
console.log(p(t));
