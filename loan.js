//Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

//Calculate Reults

function calculateResults(e){

  //UI vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');
  const principal = parseFloat(amount.value);
  const calculateInterest = parseFloat(interest.value)/ 100 / 12;
  const calculatePayments = parseFloat(years.value) * 12;

  //Compute monthly payment
  const x = Math.pow(1 + calculateInterest, calculatePayments);
  const monthly = (principal*x*calculateInterest)/(x-1);
  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatePayments).toFixed(2);
    totalInterest.value = ((monthly * calculatePayments) - principal).toFixed(2)
  } else {
    showError('Please Check your number');
  }

  e.preventDefault();
}

//Show Error
function showError(error){
  //Create a div
  const errorDiv = document.createElement('div');

  //Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  //Add Class
  errorDiv.className = 'alert alert-danger';
  //Create Text Node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  //Insert error above heading
  card.insertBefore(errorDiv, heading);

  //clear error after 3 seconds
  setTimeout(clearError, 3000);
}



//claer error
function clearError(){
  document.querySelector('.alert').remove();
}