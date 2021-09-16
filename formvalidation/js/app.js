//UI

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cfmpassword = document.getElementById("cfmpassword");

//Event Listener(method 1)
// form.addEventListener("submit",function(e){
// 	e.preventDefault();
// 	console.log("hay");


// 	if(username.value === ''){
// 		showerror(username,"Username is required");

// 	}else{
// 		showsuccess(username);
// 	}

// 	if(email.value === ''){
// 		showerror(email,"Email is required");
// 	// }else if(!validateEmail(email.value)){
// 	// 	showerror(email,"Email is not valid");
// 	}else{
// 		showsuccess(email);
// 	}

// 	if(password.value === ''){
// 		showerror(password,"Password is required");
// 	}else{
// 		showsuccess(password);
// 	}

// 	if(cfmpassword.value === ''){

// 		showerror(cfmpassword,"Confirm Password is required");

// 	}else if(password.value !== cfmpassword.value){

// 		showerror(cfmpassword,"Password do not match");
		
// 	}else{
// 		showsuccess(cfmpassword);
// 	}

// });


function showerror(input,message){
	const formcontrol = input.parentElement;
	formcontrol.className = "form-control error";
	// formcontrol.classList.add('error');

	const small = formcontrol.querySelector('small');
	small.innerText = message;

}

function showsuccess(input){
	const formcontrol = input.parentElement;
	formcontrol.className = "form-control success";
	formcontrol.classList.remove('error');
	// formcontrol.classList.add('success');
	

}

//for checking email format(Regular Expression )
// copy u ya ml
function validateEmail(email){
	const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return re.test(String(email).toLowerCase());

	
}


//Check Required Field
function checkrequired(inputarrs){
	// console.log(inputarrs);

	inputarrs.forEach(function(inputarr){
		// console.log(inputarr);
		// console.log(inputarr.value);
		// console.log(inputarr.id);

		if(inputarr.value === ''){

			showerror(inputarr,`${getfieldname(inputarr)} is required`);

		}else{
			showsuccess(inputarr);
		}
	});

}

//Get Field Name
function getfieldname(inputarr){
	// console.log("hay");
	return inputarr.id.charAt(0).toUpperCase()+inputarr.id.slice(1);
}


//Check Input Length
function checklength(input,min,max){
	if(input.value.length < min){
		showerror(input,`${getfieldname(input)} must be at least ${min} characters`);
	}else if(input.value.length > max){
		showerror(input,`${getfieldname(input)} must be less than ${max} characters`);
	}
}

//Check email is valid
function checkemail(input){
	

	const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	// return re.test(String(email).toLowerCase());

	if(re.test(input.value)){
		showsuccess(input);
	}else{
		showerror(input,"Email is not valid");
	}
}


//Check Passwords Match
function checkpasswordsmatch(input1,input2){
	if(input1.value !== input2.value){
		showerror(input2,"Passwords do not match");
	}else{
		showsuccess(input2);
	}

}


// Event Listener(Method2)
form.addEventListener('submit',function(e){
	e.preventDefault();//form ka roload ma phyit tot bu
	// console.log("hay");

	checkrequired([username,email,password,cfmpassword]);
	
	checklength(username,3,15);
	checklength(password,6,25);

	checkemail(email);

	checkpasswordsmatch(password,cfmpassword);
});

