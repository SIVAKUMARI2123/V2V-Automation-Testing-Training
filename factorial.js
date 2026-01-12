
function factorial(a)
{
    let fact=1;
    
    if (a==0 || a==1){
        return 1;
    }
    else{
        while(a>1){
            fact= fact * a;
            a--;
        }
        
    }
    return fact;
    
}
    let n = 4;
    let res=factorial(n);
    console.log(res);