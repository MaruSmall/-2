var n, x=0,y=0,z=0, p=n/3;
prompt(n);
for(var i=0; i<p;i++){
    for(var j=p;j<p*2;j++){
        for(var k=2*p;k<n;k++){
            if(n==(Math.power(i,2)+Math.power(j,2)+Math.power(k,2)))
            {
                x=i;
                y=j;
                z=k;
                console.log(x,y,z);
            }
        }
    }
}
