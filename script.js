let result= document.getElementById("inputtext");
let calculate=(numbers)=>{
    result.value=result.value+numbers;
}
let Result=()=>{
    try {
        result.value=eval(result.value);
    } catch (error) {
        alert("Enter a valid Input")
    }
}
function clr(){
    result.value="";
}
function del(){
    result.value= result.value.slice(0,-1)
}