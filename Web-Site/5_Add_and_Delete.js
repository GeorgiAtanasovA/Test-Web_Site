let index = 0;

function addItem() {
   //Нестната функция
   function Delete() {
      let dtText = document.createElement('h3');

      let dtElement = this.parentNode;
      let dlElement = dtElement.parentNode;

      dtText.textContent = dtElement.innerText + " Was deleted";
      document.getElementById('body').appendChild(dtText);

      dlElement.removeChild(dtElement);
   }

   index++;

   let dlItems = document.getElementById('items');
   let inputTxt = document.getElementById('newItemText').value;

   if (inputTxt === "") { alert("Write something!"); } 
   else {
      if (inputTxt.length > 20) { alert("Too long! Only 20 charackter."); }
      else {
      let newA = document.createElement('a');
      newA.innerText = '[Del]';
      newA.setAttribute('href', '#');
      newA.setAttribute('id', 'Del');
      newA.addEventListener('click', Delete);

      let newDt = document.createElement('dt');
      newDt.textContent = index + ' - ' + inputTxt;
      newDt.appendChild(newA);

      dlItems.appendChild(newDt);
      }
   }
}
