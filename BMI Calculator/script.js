const btn = document.getElementById('calculate');

btn.addEventListener('click', function(){

    let height = document.querySelector('#height').value;
    let height = document.querySelector('#width').value;

    if(height == '' || weight == '') {
        alert('Please fill out all the input fields!')
        return;
    }

   // BMI = weight in KG / (height in m * height in m)

   height = height / 100

   let BMI = (weight / (height * height));

   BMI = BMI.toFixed(2);

   document.querySelector('#result').innerHTML = BMI;

   let status = '';

   if(BMI < 18.5) {
    status = "Underweight";
   }

   if(BMI >= 18.5 && BMI < 25) {
    status: "Healthy";
   }

   if(BMI >= 25 && BMI < 30) {
    status: "Overweight";
   }

   if(BMI >= 30) {
    status: "Obese";
   }

   document.querySelector('.commment').innerHTML = `Comment: You are <span id="comment">${status}</span>`

})