function check() {
    const inputString = document.getElementById("stringInput").value;
    let vowels = "aeiou";
    let vowelCount = 0;
    let consonantCount = 0;
  
    for (let i = 0; i < inputString.length; i++) {
      if (vowels.includes(inputString[i].toLowerCase())) {
        vowelCount++;
      } else if (inputString[i].match(/[b-df-hj-np-tv-z]/i)) {
        consonantCount++;
      }
    }
  
    document.getElementById("result").innerHTML = `Vowels: ${vowelCount}, Consonants: ${consonantCount}`;
  }
  const inputString = document.getElementById('stringInput');
  inputString.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      check();
    }
});

  function palindrome(){
    let num1 = document.getElementById("number").value;
  let num2 = 0;
  let num3 = num1

  while (num1 > 0) {
    const x = num1 % 10;
    num2 = num2 * 10 + x;
    num1 = Math.floor(num1 / 10);
  }
  if(num3==num2){
    document.getElementById("results").innerHTML = "Given number is a palindrome";
  }
  else{
    document.getElementById("results").innerHTML = "Given number is not a palindrome";
  }
}
const inputnumber = document.getElementById('number');
inputnumber.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      palindrome();
    }
})

function calculateTotal() {
  const subtotal = parseFloat(document.getElementById('subtotal').value);
  let tipPercentage = parseFloat(document.getElementById('tip').value);

  if (subtotal) {
      tipPercentage = tipPercentage ? tipPercentage : 0;
      const tipAmount = (subtotal * tipPercentage) / 100;
      const totalAmount = subtotal + tipAmount;

      document.getElementById('totalResult').textContent = `Total Amount (including ${tipPercentage}% tip): $${totalAmount.toFixed(2)}`;
  }
  else {
      document.getElementById('totalResult').textContent = `Please Enter valid subtotal amount!`;
  }
}
