const input = document.getElementById('num');

console.log(typeof number)
const length = document.getElementById('length');
const volume = document.getElementById('volume');
const mass = document.getElementById('mass');
const convertBtn = document.getElementById('convert');


convertBtn.addEventListener('click', function () {
  
  let number = Number(input.value);
  //Length
  let feet = number * 3.281;
  feet = feet.toFixed(3);
  let meters = 20/3.281;
  meters = meters.toFixed(3)
  //Volume
  let gallons = number * 0.264;
  gallons = gallons.toFixed(3);
  let litres = number/0.264;
  litres = litres.toFixed(3);
  //Mass
  let pounds = number * 2.204;
  pounds = pounds.toFixed(3);
  let kg = number/2.204;
  kg = kg.toFixed(3)
  length.textContent = `${number} meters = ${feet} feet | ${number} feet = ${meters} meters `
   volume.textContent = `${number} litres = ${gallons} gallons | ${number} gallons = ${litres} litres`
  mass.textContent = `${number} kilos = ${pounds} pounds | ${number} gallons = ${kg} kilos`;
})