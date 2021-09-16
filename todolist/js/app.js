// UI
const form = document.getElementById('task-form');
const taskinput = document.getElementById('task');
const filter = document.getElementById('filter');
const tasklist = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');


function addtask(e){
	// console.log('hay');

	// if(taskinput.value === ''){
	// 	window.alert('Add a task');
	// 	return;/*bar mha return ma pyan tot bu loh pyaw tr */
	// }


	if(taskinput.value === ''){
		window.alert('Add a task');
	}else{
	// console.log(taskinput.value);

	//create li element
	const li = document.createElement('li');

	//add class
	// li.classList.add('collection-item');
	li.className = "collection-item";

	//create text node append to li
	li.appendChild(document.createTextNode(taskinput.value));


	//create link
	const link = document.createElement('a');

	//add class
	link.className = "delete-item secondary-content";

	//add icon
	link.innerHTML = `<i class="far fa-trash-alt"></i>`;
	console.log(link);

	//append link to li
	li.appendChild(link);

	console.log(li);

	//append li to ul
	tasklist.appendChild(li);
	}

	//store in localstrorage
	storetaskinlocalstorage(taskinput.value);

	taskinput.value = '';

	e.preventDefault();
}



//Remove Task
function removetask(e){
	// console.log('hay');

	//console.log(e.target);

	//Event Delegation
	if(e.target.parentElement.classList.contains('delete-item')){
		//console.log('delete-item');


		if(confirm('Are you sure')){

			e.target.parentElement.parentElement.remove();
		}
	}


}


//Clear Tasks
function cleartasks(){
	// console.log('hay');

	//Method 1
	// tasklist.innerHTML = '';

	//Method2
	// let x = 0;
	// while(x < tasklist.childElementCount){
	// 	tasklist.removeChild(tasklist.firstChild);
	// }
	// }

	//Method 3 Best loh sayar say
	while(tasklist.firstChild){
		tasklist.removeChild(tasklist.firstChild);
	}

	//Clear All Data from localstorage
	cleartasksfromlocalstorage();

}


//Store Task
function storetaskinlocalstorage(task){
	// console.log(task);

	let tasks;

	if(localStorage.getItem('tasks') === null){
		tasks = [];
	}else{
		tasks = JSON.parse(localStorage.getItem('tasks'));
		console.log(tasks);
	}

	tasks.push(task);
	// console.log(tasks);



	localStorage.setItem('tasks',JSON.stringify(tasks));

	}


//Clear All Data from localStorage
function cleartasksfromlocalstorage(){
localStorage.clear();


}

//Filter Tasks
function filtertasks(e){
	// console.log('hay');
	// console.log(e.target.value);
}


// Event Listener
// Add Task
form.addEventListener('submit',addtask);


//Remove task
tasklist.addEventListener('click',removetask);

// clear tasks
clearbtn.addEventListener('click',cleartasks);

//Filter tast event
filter.addEventListener('keyup',filtertasks);


