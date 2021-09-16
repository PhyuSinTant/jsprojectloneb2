const currencyonee1 = document.getElementById('currency-one');
	 amountoneel = document.getElementById('amount-one');

const currencytwoel = document.getElementById('currency-two');
		amounttwoel = document.getElementById('amount-two');

const swapel = document.getElementById('swap');
		rateel = document.getElementById('rate');


//Event Listener

currencyonee1.addEventListener('change',calculate);
amountoneel.addEventListener('input',calculate);


currencytwoel.addEventListener('change',calculate);
amounttwoel.addEventListener('input',calculate);

swapel.addEventListener('click',()=>{
	// console.log('already swape');


	const temp = currencyonee1.value;

	currencyonee1.value = currencytwoel.value;
	currencytwoel.value = temp;

	calculate();
});

function calculate(){
	// console.log('hay');

	const crcyone = currencyonee1.value;
	const crcytwo = currencytwoel.value;

	const amtone = amountoneel.value;
	const amttwo = amounttwoel.value;

	const apikey = "e1156bc5e7f80c88bc690aa0";
	const uri = `https://v6.exchangerate-api.com/v6/${apikey}/latest/${crcyone}`;
	// https://v6.exchangerate-api.com/v6/e1156bc5e7f80c88bc690aa0/latest/

	console.log(uri);


	//AJAX Request
	// console.log(fetch(uri));

	fetch(uri)
	.then(res=>res.json())
	.then(data=>{
		// console.log(data);


		// console.log(data.conversion_rates);
		// console.log(typeof data.conversion_rates);
		// console.log(data.conversion_rates.USD);



		const rate = data.conversion_rates[crcytwo];
		// console.log(rate);

		rateel.innerHTML = `1 ${crcyone} = ${rate} ${crcytwo}`;

		amounttwoel.value = (amountoneel.value * rate).toFixed(2);

		

		


	});





	// console.log(crcyone,amtone);
	// console.log(crcytwo,amttwo);
}