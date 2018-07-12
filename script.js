let display = document.getElementById("display");
display.innerHTML = 0;
function pressBtn(btn) {
  let pressed = btn.value;
  let expr = display.innerHTML;
  if (pressed === '=') {
    display.innerHTML = eval(expr);
  }
  else if (pressed==="<"){
    display.innerHTML = display.innerHTML.substring(0, expr.length-1);
  }
  else if (pressed === ".") {
    if (display.innerHTML.indexOf('.') !=-1 && display.innerHTML.match(/\/|\*|\+|-/g) === null || display.innerHTML.substring(expr.length-1, expr.length) == '.') {
      display.innerHTML = display.innerHTML;
    }
    else {
      display.innerHTML = display.innerHTML + pressed;
    }
  }
  else if (pressed.match(/\/|\*|\+|-/g)){
    if (display.innerHTML.substring(expr.length-1, expr.length).match(/\/|\*|\+|-/g)){
      display.innerHTML = display.innerHTML.replace(display.innerHTML.substring(expr.length-1, expr.length).match(/\/|\*|\+|-/g), pressed);
    }
    else {
      display.innerHTML = display.innerHTML + pressed;
    }
  }
  else if (pressed === 'C') {
    display.innerHTML = '0';
  }
  else {
    if (display.innerHTML === '0') {
      display.innerHTML = pressed;
    }
    else {
    display.innerHTML = display.innerHTML+btn.value;
    }
  }

}
