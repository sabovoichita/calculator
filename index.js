console.log("Hello new Project");

function $(selector) {
  return document.querySelector(selector);
}

function createCalculator() {
  return `
 <h1> Calculator in JavaScript </h1>  
 <div class= "formstyle">  
    <form name = "form1">  
      
  <!-- This input box shows the button pressed by the user in calculator. -->  
  <input id = "calc" type ="text" name = "answer"> <br> <br>  
  <!-- Display the calculator button on the screen. -->  
  <!-- onclick() function display the number presses by the user. -->  
  <input type = "button" value = "1" onclick = "form1.answer.value += '1' ">  
  <input type = "button" value = "2" onclick = "form1.answer.value += '2' ">  
  <input type = "button" value = "3" onclick = "form1.answer.value += '3' ">  
  <input type = "button" value = "+" onclick = "form1.answer.value += '+' ">  
  <br> <br>  
    
  <input type = "button" value = "4" onclick = "form1.answer.value += '4' ">  
  <input type = "button" value = "5" onclick = "form1.answer.value += '5' ">  
  <input type = "button" value = "6" onclick = "form1.answer.value += '6' ">  
  <input type = "button" value = "-" onclick = "form1.answer.value += '-' ">  
  <br> <br>  
    
  <input type = "button" value = "7" onclick = "form1.answer.value += '7' ">  
  <input type = "button" value = "8" onclick = "form1.answer.value += '8' ">  
  <input type = "button" value = "9" onclick = "form1.answer.value += '9' ">  
  <input type = "button" value = "*" onclick = "form1.answer.value += '*' ">  
  <br> <br>  
    
  <input type = "button" value = "/" onclick = "form1.answer.value += '/' ">  
  <input type = "button" value = "0" onclick = "form1.answer.value += '0' ">  
  <input type = "button" value = "." onclick = "form1.answer.value += '.' ">  
  
  <!-- When we click on the '=' button, the onclick() shows the sum results on the calculator screen. -->  
  <input type = "button" value = "=" onclick = "form1.answer.value = eval(form1.answer.value) ">  
  <br>   

  <!-- Display the Cancel button and erase all data entered by the user. -->  
  <input type = "button" value = "Clear All" onclick = "form1.answer.value = ' ' " id= "clear" >  
  <br>   
    
</form>  
</div>  
    `;
}

function createCalculatorTable() {
  return `
    <h1>Calculator Program in JavaScript</h1>
    <div class="formstyle1">
      <form name="form1">
        <input class="textview" name="textview" />
      </form>
      <table>
        <tr>
          <td>
            <input
              type="button"
              value="C"
              class="btn"
              onclick="form1.textview.value = ''"
            />
          </td>
          <td>
            <input type="button" value="B" class="btn" onclick="backspace()" />
          </td>
          <td>
            <input type="button" value="/" class="btn" onclick="insert('/')" />
          </td>
          <td>
            <input type="button" value="x" class="btn" onclick="insert('*')" />
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value="7" class="btn" onclick="insert('7')" />
          </td>
          <td>
            <input type="button" value="8" class="btn" onclick="insert('8')" />
          </td>
          <td>
            <input type="button" value="9" class="btn" onclick="insert('9')" />
          </td>
          <td>
            <input type="button" value="-" class="btn" onclick="insert('-')" />
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value="4" class="btn" onclick="insert('4')" />
          </td>
          <td>
            <input type="button" value="5" class="btn" onclick="insert('5')" />
          </td>
          <td>
            <input type="button" value="6" class="btn" onclick="insert('6')" />
          </td>
          <td>
            <input type="button" value="+" class="btn" onclick="insert('+')" />
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value="1" class="btn" onclick="insert('1')" />
          </td>
          <td>
            <input type="button" value="2" class="btn" onclick="insert('2')" />
          </td>
          <td>
            <input type="button" value="3" class="btn" onclick="insert('3')" />
          </td>
          <td rowspan="5">
            <input
              type="button"
              value="="
              class="btn"
              style="height: 110px"
              onclick="equal()"
            />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <input
              type="button"
              value="0"
              class="btn"
              style="width: 106px"
              onclick="insert('0')"
            />
          </td>
          <td>
            <input type="button" value="." class="btn" onclick="insert('.')" />
          </td>
        </tr>
      </table>
    </div>
    `;
}
function insert(num) {
  document.form1.textview.value = document.form1.textview.value + num;
}
function backspace() {
  var exp = document.form1.textview.value;
  document.form1.textview.value = exp.substring(0, exp.length - 1);
}
function equal() {
  var exp = document.form1.textview.value;
  if (exp) {
    document.form1.textview.value = eval(exp);
  }
}

function insertCalculator() {
  document.body.innerHTML = createCalculatorTable();
}
function initEvents() {
  insertCalculator();
}

initEvents();
