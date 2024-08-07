function buttonclick(val){
    var a;
    document.getElementById("Screen").value+=val
    if(val=='+' || val=='-' || val=='*' || val=='/'){
        a=document.getElementById('Screen').value.slice(0,-1)
        a=eval(a)
        document.getElementById('Screen').value=a+val

    }

}
function clearScreen(){
    document.getElementById("Screen").value=""

}
function ans(){
    var text=document.getElementById("Screen").value
    var result=eval(text)
    document.getElementById("Screen").value=result
}
function back(){
    document.getElementById("Screen").value=document.getElementById("Screen").value.slice(0,-1)
}
