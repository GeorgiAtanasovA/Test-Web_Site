function IsPrime() {
   let n = document.getElementById('write').value;
   let m = 0;
   let counter = 0;
   var deliteli = [];


   var maxDivider = n / 2;

   for (let i = 1; i <= maxDivider; i++) {
      m = n % i;
      if (m == 0) { counter++; deliteli.push(i); }
   }

   if (counter == 1) { document.getElementById('result').innerHTML = "Чилото Е просто "; }

   else if (counter > 1) { document.getElementById('result').innerHTML = "Чилото НE е просто! Делители:  " + deliteli }

   else { alert("ERROR...invalid character"); }
}

