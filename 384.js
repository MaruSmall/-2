function matrix1(A)       
{   
    var m = A.length,     
        n = A[0].length,  
        N = [];           
                          
    for (var i = 0, k = 0; i < m; i++)
     { var s, sum = A[i][0];
     
   for (var j = 1; j < n; j++) {
       
       if (N[i,j]>sum ) sum=N[i,j];
     }
     s=s+sum;
     }
     
    return N;  
}
console.log( matrix1([[1,2,7,0],[-2,-5,2,5],[7,0,1,0],[1,1,-2,0],[5,7,1,3]]) )
