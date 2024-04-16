window.addEventListener("load", function() {
	var video = document.querySelector(".mainvideo");

	if (video) {
		video.addEventListener("loadeddata", function() {
		playVideo();
		});

	video.addEventListener("ended", function() {
	resetAndPlayVideo();
	});
	}

	function playVideo() {
		video.play();
	}

	function resetAndPlayVideo() {
		video.currentTime = 0;
		video.play();
	}

	let n=0;
	let t=0;
	let prevN;
	let total;
	let winHalf;

	let pageList=[];

	pageList[0]=this.document.getElementById("main");

	let section=this.document.querySelectorAll("section");

	let init=() => {
		winHalf=this.window.innerHeight*0.75;
	};

	init();

	for(let i=0; i<section.length; i++){
		pageList.push(section[i]);
	}

	let gnb=this.document.getElementById("gnb");
	let gnbLi=gnb.firstElementChild.children;
	let mobile=this.document.getElementById("mobile");
	let mobileLi=mobile.firstElementChild.children;
	
	let tab=this.document.querySelector("header .tab");
	let dim=this.document.querySelector("header .dim");

	total=pageList.length;

	this.window.addEventListener("scroll", function(){
		t=this.window.scrollY;
		// console.log(t);

		for (let i = 0; i < pageList.length; i++) {
			if (t < pageList[i].offsetTop + winHalf) {
				n = i;
				break;
			}
			}
			
			for (let i = 0; i < gnbLi.length; i++) {
			if (i === n) {
				if (!gnbLi[i].classList.contains("active")) {
				gnbLi[i].classList.add("active");
				}
			} else {
				if (gnbLi[i].classList.contains("active")) {
				gnbLi[i].classList.remove("active");
				}
			}
			}
			
			for (let j = 0; j < mobileLi.length; j++) {
			if (j === n) {
				if (!mobileLi[j].classList.contains("active")) {
				mobileLi[j].classList.add("active");
				}
			} else {
				if (mobileLi[j].classList.contains("active")) {
				mobileLi[j].classList.remove("active");
				}
			}
		}


		for(let i=0; i<gnbLi.length; i++){
			if(i == n){
				if(gnbLi[i].classList.contains("active") == false){
					gnbLi[i].classList.add("active");
				}
			}
			else{
				if(gnbLi[i].classList.contains("active") == true){
					gnbLi[i].classList.remove("active");
				}
			}
		}

		for(let j=0; j<mobileLi.length; j++){
			if(j == n){
				if(mobileLi[j].classList.contains("active") == false){
					mobileLi[j].classList.add("active");
				}
			}
			else{
				if(mobileLi[j].classList.contains("active") == true){
					mobileLi[j].classList.remove("active");

				}
			}
		}

	for (let i=0; i<total; i++) {
		gnbLi[i].addEventListener("click", function(){
			e.preventDefault();
		
			n = i;
			let targety = pageList[n].offsetTop;
		
			gsap.to(window, { scrollTo: targety, duration: 0.5 });
		});
	}

			let w;
			this.window.addEventListener("resize", function() {
			w = this.window.innerWidth;
			
				if (w > 720) {
				if (mobile.classList.contains("active")) {
					mobile.classList.remove("active");
					tab.classList.remove("active");
					dim.classList.remove("active");
					gsap.fromTo(mobile, { display: "none", opacity: 0 }, { opacity: 1, duration: 0.5 });
					gsap.fromTo(dim, { display: "none", opacity: 0 }, { opacity: 1, duration: 0.3 });
				}
			}
		});
	});
		
		let tabFlag = false;

		tab.addEventListener("click", function(e){
			e.preventDefault();
			console.log("click");
			
			if(tab.classList.contains("active") === false){
			tabFlag=true;	
			tab.classList.add("active");
			dim.classList.add("active");
			mobile.classList.add("active");
			gsap.fromTo(mobile, {display: "block", opacity: 0}, {opacity: 1, duration: 0.3}); 
			gsap.fromTo(dim, {display: "block", opacity: 0}, {opacity: 1, duration: 0.3}); 
			}
			else{
			tabFlag=false;
			tab.classList.remove("active");
			dim.classList.remove("active");
			mobile.classList.remove("active");
			gsap.fromTo(mobile, {display: "none", opacity: 0}, {opacity: 1, duration: 0.5}); 
			gsap.fromTo(dim, {display: "none", opacity: 0}, {opacity: 1, duration: 0.3}); 
			}
		});
});