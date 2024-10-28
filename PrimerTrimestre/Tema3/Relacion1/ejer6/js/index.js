function factorial(n,x){
    if(n==1){
        return 1
    }else{
        return x*factorial(n,x-1);
    }
    }
    console.log(factorial(4));