const display = document.querySelector('.calculator-input'); // display'i aldık
const keys = document.querySelector('.calculator-keys'); // girişleri aldık

let displayValue = 0; // displayValue'yi 0 olarak tanımladık
let firstValue = 0 ; // firstValue'yi 0 olarak tanımladık
let operator = null; // operator'ü null olarak tanımladık
let waitingForSecondValue = false; // waitingForSecondValue'yi false olarak tanımladık

updateDisplay(); // displayValue'yi updateDisplay ile güncelledik (sıfırdan çağırıyoruz)

function updateDisplay() {
  display.value = displayValue; // domla aldıgımız display degerini displayValue ile eşitledik
}

keys.addEventListener('click',function(e){
const element = e.target  // tıklanan elementi aldık
    if (!element.matches('button')) return; // eğer element button değilse return ile fonksiyonu sonlandırdık

    if (element.classList.contains('operator')) { // eğer element classList'inde operator varsa
     // console.log('operator',element.value); // operator ve value'yu yazdırdık
     handleOperator(element.value); // handleOperator fonksiyonuna element.value'yu gönderdik
      calculate(); // calculate fonksiyonunu çağırdık
      return ; 
    }

    if (element.classList.contains('decimal')) { // eğer element classList'inde decimal varsa
     // console.log('decimal',element.value); // decimal ve value'yu yazdırdık
     inputDecimal(element.value); // inputDecimal fonksiyonuna element.value'yu gönderdik
     updateDisplay();
     return ;
    }

    if (element.classList.contains('clear')) { // eğer element classList'inde clear varsa
      console.log('clear',element.value); // clear ve value'yu yazdırdık
      clear(); // clear fonksiyonuna element.value'yu gönderdik
      updateDisplay();
      return ;
    }
    inputNumber(element.value); // eğer hiçbir şart sağlanmazsa inputNumber fonksiyonuna element.value'yu gönderdik
    updateDisplay();
  });
   // event listener'ları ekledik ve buton tıklamalarını dinledik.
   // decimal,operator ya da clear olmayan butonlar için inputNumber fonksiyonunu çağırdık çünkü onlar sayı butonları



    function inputNumber(number) { // inputNumber fonksiyonu
      displayValue = displayValue == '0'? number : displayValue + number  ; // eğer displayValue 0 ise number'ı displayValue'ye ata, değilse displayValue'ye number'ı ekle
      updateDisplay(); 
    } 
 
    function inputDecimal(){

      if(!displayValue.includes('.') ){ // eğer displayValue'da nokta yoksa
        displayValue += "."; // displayValue'ye nokta ekledik
      }
      
    }
    
    function clear(){ 
      displayValue = 0; // displayValue'yi sıfırladık
    }


    
    false handleOperator(operator){

    }

      // hesaplamaları yapmak için bir fonksiyon oluşturduk
    function calculate(){
      if (operator.value == '+') { // eğer operator.value + ise
      
      } 
      
          }