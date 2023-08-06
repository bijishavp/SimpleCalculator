function appendValue(value) {
    document.getElementById("display").value += value;
 
}

function calculate() {
  try {
      var expression = document.getElementById("display").value;
      var result = eval(expression);
      document.getElementById("display").value = result;
    } catch (error) {
      document.getElementById("display").value = "Error";
    }
  
}

function clearDisplay() {
  document.getElementById("display").value = '';
}

function removeLast(){
  var exp= document.getElementById("display").value;
  var res=exp.slice(0,-1);
  document.getElementById("display").value = res;

}