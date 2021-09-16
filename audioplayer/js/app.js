//UI

const musiccontainer = document.getElementById('music-container');

const title = document.getElementById('title'),
progresscontainer = document.getElementById('progress-container'),
progress = document.getElementById('progress');


const audio = document.getElementById('audio');

const cover = document.getElementById('cover');

const prevbtn = document.getElementById('prev'),
playbtn = document.getElementById('play');
nextbtn = document.getElementById('next');


let songindex = 0;

// Song title
const songs = ['sample1','sample2','sample3'];
// console.log(songs[songindex]);

loadsong(songs[songindex]);

function loadsong(music){
	// console.log('music');

	title.innerText = music;
	audio.src = `music/${music}.mp3`;
	cover.src = `img/${music}.jpg`;
}

//Event Listener for Play / Pause
playbtn.addEventListener('click',()=>{
	// console.log("hay");

	const isplaying = musiccontainer.classList.contains('play');

	if(isplaying){
		pausesong();
	}
	else{
		playsong();
	}
});

//Play Song

function playsong(){
	musiccontainer.classList.add('play');
	playbtn.querySelector('i.fas').classList.remove('fa-play');
	playbtn.querySelector('i.fas').classList.add('fa-pause');

	audio.play();
}

function pausesong(){
	musiccontainer.classList.remove('play');
	playbtn.querySelector('i.fas').classList.add('fa-play');
	playbtn.querySelector('i.fas').classList.remove('fa-pause');

	audio.pause();
}


//Change Song
prevbtn.addEventListener('click',previoussong);

nextbtn.addEventListener('click',nextsong);

//Previous Song
function previoussong(){
	// console.log('hay');
	songindex--;
	console.log(songindex);

	if(songindex < 0){
		songindex = songs.length - 1;
	}
	loadsong(songs[songindex]);
	playsong();
}

//Next Song
function nextsong(){
	// console.log('hay');
	// songindex += 1;
	songindex++;
	// console.log(songindex);

	if(songindex > songs.length -1){
		songindex = 0;
	}

	loadsong(songs[songindex]);
	playsong();
}

//Update Progress Bar
function updateprogress(e){
	// console.log('hay');
	// console.log(audio.currentTime);
	// console.log(audio.duration);


	//Method 1
	// const progresspercent = (audio.currentTime / audio.duration)*100;
	// console.log(progresspercent);
	// progress.style.width = `${progresspercent}%`;


	//Method2
	// const currenttime = e.target.currentTime;
	// const duration = e.target.duration;
	// const progresspercent = (currenttime / duration)*100;
	// progress.style.width = `${progresspercent}%`;


	//Method3//assignment operator nae same tl//currentTime = e.target.currentTime;
	// const {currentTime} = e.target;
	// const {duration} = e.target;
	// const progresspercent = (currentTime / duration)*100;
	// progress.style.width = `${progresspercent}%`;


	//Method4
	const {currentTime,duration} = e.target;
	const progresspercent = (currentTime / duration)*100;
	progress.style.width = `${progresspercent}%`;//a ye fill tr


}

// Time Play and Stop Update
audio.addEventListener('timeupdate',updateprogress);


//Click On Progress Bar
progresscontainer.addEventListener('click',setprogress);

//Set Progress Bar
function setprogress(e){
	// console.log(e.target);


	const width = e.target.clientWidth;//progresscontainer width
	console.log(width);


	const clickx = e.offsetX;
	// console.log(clickx);

	const duration = audio.duration;
	// console.log(duration);

	audio.currentTime = (clickx / width) * duration;//a paw ka currentTime ko overwrite lote
}

//Song End
audio.addEventListener('ended',nextsong);



