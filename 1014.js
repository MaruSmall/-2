
function sumStolb(A,i,n) {
    var sum1=0;
    for (var j = 0; j < n; j++) {
        sum1 += A[i][j];
    }
    return sum1;
}

function sumStrok(A,j,n) {
    var sum2=0;
    for (var i = 0; i < n; i++) {
        sum2 += A[i][j];
    }
    return sum2;
}

function sumGlDi(A,n) {
    var sum3=0;
    for (var i = 0; i < n; i++) {
        sum3 += A[i][i];
    }
    return sum3;
}

function sumPobDi(A,n) {
    var sum4=0;
    for (var i = n-1; i >= 0; i--) {
        sum4 += A[i][i];
    }
    return sum4;
}

function prov(A,n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (A[i][j] < 1 && A[i][j] > n * n) {
                test = 0;
                break;
            }
        }
    }
}

alert("Введите значение числа n");
var n=prompt(n);

var A=[],test=1,s0=0,s=0;
//A=[[17,24,1,8,15],[23,5, 7,14 ,16],[4,6,13 ,20,22],[10,12,19,21,3],[11,18,25,2,9]]
for(var i=0;i<n;i++) {
    for (var j = 0; j < n; j++) {
        A[i][j] = Math.random() * (n * n);
    
        A[i][j] = Math.floor(a[i][j]);
        console.log(a[i][j]+' ');

    }
    
}
prov(A,n);
s0=sumStolb(A,0,n);
console.log("сумма= "+s0);
for (var i=1;i<n;i++) {
    s=sumStolb(A,i,n);
    if(s!=s0)
    {test=0;
        break;}
}
for (var j=0;j<n;j++) {
    s=sumStrok(A,j,n);
    if(s!=s0)
    {test=0;
        break;}
}
for(var i=0;i<n;i++) {
    s=sumGlDi(A,n);
    if(s!=s0)
    {test=0;
        break;}
}
for(var i=0;i<n;i++) {
    s=sumPobDim(A,n);
    if(s!=s0)
    {test=0;
        break;}
}
if(test==1)
    console.log("Да");
else console.log("Нет");
