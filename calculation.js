function add(){
    let x = parseInt(document.getElementById("input_1").value);
    let y = parseInt(document.getElementById("input_2").value);
    if(x != null || y != null){
        let answer = x+y;
        document.getElementById("answer").innerHTML = "The answer is : " + answer;
    }else{
        document.getElementById("answer").innerHTML = "Please enter the two inputs";
    }  
}

function sub(){
    let x = parseInt(document.getElementById("input_1").value);
    let y = parseInt(document.getElementById("input_2").value);
    if(x != null || y != null){
        let answer = x-y;
        document.getElementById("answer").innerHTML = "The answer is : " + answer;
    }else{
        document.getElementById("answer").innerHTML = "Please enter the two inputs";
    }  
}

function mul(){
    let x = parseInt(document.getElementById("input_1").value);
    let y = parseInt(document.getElementById("input_2").value);
    if(x != null || y != null){
        let answer = x*y;
        document.getElementById("answer").innerHTML = "The answer is : " + answer;
    }else{
        document.getElementById("answer").innerHTML = "Please enter the two inputs";
    }  
}

function div(){
    let x = parseInt(document.getElementById("input_1").value);
    let y = parseInt(document.getElementById("input_2").value);
    if(x != null || y != null){
        let answer = x/y;
        document.getElementById("answer").innerHTML = "The answer is : " + answer;
    }else{
        document.getElementById("answer").innerHTML = "Please enter the two inputs";
    }  
}