const form = document.querySelector('#searchcrypto');
const res = document.querySelector('#tableresult');
var upd;

form.addEventListener('submit', (e)=>{
   e.preventDefault();

   const ctype = form.elements.coinType.value;

   fetchPrice(ctype);
});

const fetchPrice = async(ctype) =>{
   const r = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=USD`);
   console.log(r.data.coin.price);
   const price = r.data.coin.price;
   const volume = r.data.coin.volume;
   const change = r.data.coin.priceChange1d;
   const base = r.data.coin.name;
   const target = 'USD';
   

   res.innerHTML=
      `<tr style="background-color:blue;color:white;font-weight:700">
         <th>Property</th>
         <th>Value</th>
      </tr>
      <tr class="text-white">
         <td>${base}</td>
         <td>${price} ${target}</td>
      </tr>
      <tr class="text-white">
         <td>Volume</td>
         <td>${volume}</td>
      </tr>
      <tr class="text-white">
         <td>Change</td>
         <td>${change}</td>
      </tr>`;

};