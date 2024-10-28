function orden(a,b){
    if(a<b){
        return -1
    }
    else if(a>b){
        return 1
    }else{
        return 0
    }
}

function ordenarPalabritas(a,b){
    if(a.toUpperCase()<b.toUpperCase()){
        return -1
    }
    else if(a.toUpperCase()>b.toUpperCase()){
        return 1
    }else{
        return 0
    }
}