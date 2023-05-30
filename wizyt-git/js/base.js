"use strict";
function GlobalAnimations() {

	function FullScreenMode() {

		let let_me_in  = document.createElement("div"),
		buttonBG = document.createElement("div"),
		button00 = document.createElement("div");

		let_me_in.className = "letmein";
		buttonBG.className = "buttonBG";
		button00.className = "StartButton";

		let_me_in.appendChild(buttonBG);
		let_me_in.appendChild(button00);

		document.documentElement.children[1].appendChild(let_me_in);

		button00.addEventListener("click", (event) => {
			if (document.documentElement.requestFullscreen) {

            	document.documentElement.requestFullscreen();
				let_me_in.className = "letmein letmeout";
         	}

		});
	}

	function RollWall() {

		const small_planks = document.getElementsByClassName("all-small-planks");

		for (let i = 0; i < small_planks.length; i++) {

			small_planks[i].addEventListener("click", () => {
				document.getElementById("side-center").classList.add("side-center-ani");
				document.getElementById("side-bottom").classList.add("side-bottom-ani");
				document.getElementById("all-lines").classList.add("all-lines-ani");
				document.getElementById("banner").classList.add("banner-ani");
				document.getElementById("hull").classList.add("hull-ani");
				document.getElementById("gutter-down-left").classList.add("all-gutters-down-ani");
				document.getElementById("gutter-down-right").classList.add("all-gutters-down-ani");

				if ("ontouchstart" in document.documentElement)
				{
				  let root = document.getElementsByTagName( 'html' )[0];
				  root.setAttribute( 'class', 'mobile00' );
				}		
			});
		}
	}

	// The CSS Animations specification doesn't offer a way to run an animation again.
	// There's no magic resetAnimation() method on elements, and you can't even just set the element's animation-play-state to "running" again. 
	// Instead, you have to use clever tricks to get a stopped animation to replay.
	function RollTape_00 (click_obj, ani_obj) {

		let class_of_ani = "all-no-ani-buttons",
			class_on_ani = "tape-A-ani",
			class_of_ani_buttons = "tape-A-00-buttons",
			class_on_ani_buttons = "tape-A-00-buttons-ani";

		for (let i = 0; i < click_obj.length; i++) {
			click_obj[i].addEventListener("click", () => {
				if (click_obj[i].id === "Button00Left" || click_obj[i].id === "Button01Left" || click_obj[i].querySelectorAll("#PlankSmall")) {
					class_on_ani = "tape-A-ani-left";
					class_on_ani_buttons = "tape-A-00-buttons-ani-left";
				}
				if (click_obj[i].id === "Button00Right" || click_obj[i].id === "Button01Right") {
					class_on_ani = "tape-A-ani-right";
					class_on_ani_buttons = "tape-A-00-buttons-ani-right";
				}
				// animations for clickable objects
				for (let i = 0; i < click_obj.length; i++) {
					if (!click_obj[i].classList.contains("all-small-planks")) {
						if (click_obj[i] instanceof SVGElement) {
							click_obj[i].className.baseVal = class_of_ani_buttons
							requestAnimationFrame((time) => {
								requestAnimationFrame((time) => {
									click_obj[i].className.baseVal = class_of_ani_buttons + " " + class_on_ani_buttons;
								});
							});
						}
						if (click_obj[i] instanceof HTMLElement) {
							click_obj[i].className = class_of_ani_buttons
							requestAnimationFrame((time) => {
								requestAnimationFrame((time) => {
									click_obj[i].className = class_of_ani_buttons + " " + class_on_ani_buttons;
								});
							});
						}						
					}
				}
				// animations for non-clickable objects
				for (let i = 0; i < ani_obj.length; i++) {
					if (ani_obj[i] instanceof SVGElement) {
						ani_obj[i].className.baseVal = class_of_ani;
						requestAnimationFrame((time) => {
							requestAnimationFrame((time) => {
								ani_obj[i].className.baseVal = class_of_ani + " " + class_on_ani;
							});
						});
					}
					if (ani_obj[i] instanceof HTMLElement) {
						ani_obj[i].className = class_of_ani;
						requestAnimationFrame((time) => {
							requestAnimationFrame((time) => {
								ani_obj[i].className = class_of_ani + " " + class_on_ani;
							});
						});
					}
				}
			});
		}
	}

	function AniInProgress_00() {

		let tape_A_ani = document.querySelectorAll(".all-no-ani-buttons,#PlankSmall"),
			click_obj_blockade = document.querySelectorAll(".tape-A-00-buttons-all,.all-small-planks");

		for (let i = 0; i < tape_A_ani.length; i++) {
			tape_A_ani[i].addEventListener('animationstart', (event) => {
				for (let i = 0; i < click_obj_blockade.length; i++) {
					if (click_obj_blockade[i].style.pointerEvents.value !== "none") {
						click_obj_blockade[i].style.pointerEvents = "none";
					}
				}
				if (tape_A_ani[i].id === "plate-A-00-up-all" || tape_A_ani[i].id === "plate-A-00-down-all" ) {
					if (tape_A_ani[i].id === "plate-A-00-up-all") {
						tape_A_ani[i].childNodes[1].style.display = "inline";
					}
					if (tape_A_ani[i].id === "plate-A-00-down-all") {
						tape_A_ani[i].childNodes[3].style.display = "inline";
					}			
				}
			});
			tape_A_ani[i].addEventListener('animationend', (event) => {
				for (let i = 0; i < click_obj_blockade.length; i++) {
					if (click_obj_blockade[i].style.pointerEvents.value !== "auto") {
						click_obj_blockade[i].style.pointerEvents = "auto";
					}
				}
				/* animation flicker */
				//if (tape_A_ani[i].id === "plate-A-00-up-all" || tape_A_ani[i].id === "plate-A-00-down-all" ) {
				//	if (tape_A_ani[i].id === "plate-A-00-up-all") {
				//		tape_A_ani[i].childNodes[1].style.display = "none";
				//	}
				//	if (tape_A_ani[i].id === "plate-A-00-down-all") {
				//		tape_A_ani[i].childNodes[3].style.display = "none";
				//	}			
				//}
			});	
		}
	}

	function BoxesMoveLeftAni_01(slides_class_00, MoveItemLeft, MoveItemRight) {

		let slides_div = document.getElementsByClassName("slides");

		for (let j = 0; j < slides_class_00.length; j++) {
			if (slides_class_00[j].includes("slides-right")) {
				slides_class_00[j] = slides_class_00[j].replace("slides-right", "slides-left");
			}
			if (!slides_class_00[j].includes("slides-left")) {
				slides_class_00[j] = slides_class_00[j] + " slides-left";
			}
		}
		slides_class_00 = MoveItemLeft(slides_class_00, 3, 0);

		if (slides_div.length === 4) {
			slides_div[0].className = slides_class_00[3];
			slides_div[1].className = slides_class_00[2];
			slides_div[2].className = slides_class_00[1];
			slides_div[3].className = slides_class_00[0];
			requestAnimationFrame((time) => {
				requestAnimationFrame((time) => {
					for (let i = 0; i < slides_div.length-1; i++) {
						slides_div[i].className = slides_div[i].className; 
					}
				});
			});
		}
		if (slides_div.length === 3) {
			document.getElementById("AllBoxes").appendChild(slides_div[2].cloneNode(true));
			slides_div[3].id = "Slide-div03";
			slides_div[2].id = "Slide-div02";
			slides_div[0].className = slides_class_00[3]
			slides_div[1].className = slides_class_00[2]
			slides_div[2].className = slides_class_00[1]
			requestAnimationFrame((time) => {
				requestAnimationFrame((time) => {
					slides_div[0].className = slides_div[0].className;
					slides_div[1].className = slides_div[1].className;
					slides_div[2].className = slides_div[2].className;
				});
			});
		}
		if (slides_div.length === 2) {
			document.getElementById("AllBoxes").appendChild(slides_div[1].cloneNode(true));
			slides_div[1].id = "Slide-div01";
			slides_div[0].className = slides_class_00[3];
			slides_div[1].className = slides_class_00[2];
			requestAnimationFrame((time) => {
				requestAnimationFrame((time) => {
					slides_div[0].className = slides_div[0].className;
					slides_div[1].className = slides_div[1].className;
				});
			});
		}
		if (slides_div.length === 1) {
			document.getElementById("AllBoxes").appendChild(slides_div[0].cloneNode(true));
			slides_div[0].id = "Slide-div00";
			slides_div[0].className = slides_class_00[3];
			requestAnimationFrame((time) => {
				requestAnimationFrame((time) => {
					slides_div[0].className = slides_div[0].className;
				});
			});
		}

	}
	function BoxesMoveRightAni_01(slides_class_00, MoveItemLeft, MoveItemRight) {

		let slides_div = document.getElementsByClassName("slides");

		for (let j = 0; j < slides_class_00.length; j++) {
			if (slides_class_00[j].includes("slides-left")) {
				slides_class_00[j] = slides_class_00[j].replace("slides-left", "slides-right");
			}
			if (!slides_class_00[j].includes("slides-right")) {
				slides_class_00[j] = slides_class_00[j] + " slides-right";
			}
		}
		slides_class_00 = MoveItemRight(slides_class_00, 0, 3);

		if (slides_div.length === 4) {
			slides_div[0].className = slides_class_00[0];
			slides_div[1].className = slides_class_00[3];
			slides_div[2].className = slides_class_00[2];
			slides_div[3].className = slides_class_00[1];
			requestAnimationFrame((time) => {
				requestAnimationFrame((time) => {
					for (let i = 0; i < slides_div.length-1; i++) {
						slides_div[i].className = slides_div[i].className; 
					}
				});
			});
		}
		if (slides_div.length === 3) {
			document.getElementById("AllBoxes").appendChild(slides_div[2].cloneNode(true));
			slides_div[0].className = slides_class_00[0]
			slides_div[1].className = slides_class_00[3]
			slides_div[2].className = slides_class_00[2]
			slides_div[2].id = "Slide-div02";
			slides_div[3].id = "Slide-div03";
			requestAnimationFrame((time) => {
				requestAnimationFrame((time) => {
					slides_div[0].className = slides_div[0].className;
					slides_div[1].className = slides_div[1].className;
					slides_div[2].className = slides_div[2].className;
				});
			});
		}
		if (slides_div.length === 2) {
			document.getElementById("AllBoxes").appendChild(slides_div[1].cloneNode(true));
			slides_div[0].className = slides_class_00[0];
			slides_div[1].className = slides_class_00[3];
			slides_div[1].id = "Slide-div01";
			requestAnimationFrame((time) => {
				requestAnimationFrame((time) => {
					slides_div[0].className = slides_div[0].className;
					slides_div[1].className = slides_div[1].className;
				});
			});
		}
		if (slides_div.length === 1) {
			document.getElementById("AllBoxes").appendChild(slides_div[0].cloneNode(true));
			slides_div[0].className = slides_class_00[0];
			slides_div[0].id = "Slide-div00";
			requestAnimationFrame((time) => {
				requestAnimationFrame((time) => {
					slides_div[0].className = slides_div[0].className;
				});
			});
		}

	}

	function BoxesAni_00() {

		let MoveItemLeft = (array, to, from) => {
			let item = array[from];
			array.splice(from, 1);
			array.splice(to, 0, item);
			return array;
		}

		let MoveItemRight = (array, to, from) => {
			let item = array[from];
			array.splice(from, 1);
			array.splice(to, 0, item);
			return array;
		}

		let click_obj = document.querySelectorAll(".all-small-planks,.tape-A-00-buttons");
		let slides_class_00 = [
			"slides slide00",
			"slides slide01",
			"slides slide02",
			"slides slide03",
			];

		for (let i = 0; i < click_obj.length; i++) {		
			click_obj[i].addEventListener("click", () => {
				if (click_obj[i].classList.contains("tape-A-00-buttons")) {
					if (click_obj[i].id === "Button00Left" || click_obj[i].id === "Button01Left") {
						BoxesMoveLeftAni_01(slides_class_00, MoveItemLeft, MoveItemRight);
					}
					if (click_obj[i].id === "Button00Right" || click_obj[i].id === "Button01Right") {
						BoxesMoveRightAni_01(slides_class_00, MoveItemLeft, MoveItemRight);
					}
				}
				if (click_obj[i].classList.contains("all-small-planks")) {
					if (click_obj[i].id === "PlankSmallGrafik") {
						BoxesMoveLeftAni_01(slides_class_00, MoveItemLeft, MoveItemRight);
					}
					if (click_obj[i].id === "PlankSmallAnimation") {
						BoxesMoveLeftAni_01(slides_class_00, MoveItemLeft, MoveItemRight);
					}
					if (click_obj[i].id === "PlankSmallMovie") {
						BoxesMoveLeftAni_01(slides_class_00, MoveItemLeft, MoveItemRight);
					}
					if (click_obj[i].id === "PlankSmallMusic") {
						BoxesMoveLeftAni_01(slides_class_00, MoveItemLeft, MoveItemRight);
					}
				}
			});
			click_obj[i].addEventListener("click", OpenBox02, false);
		}
		
	}

	function ContactBox00() {

		let roll00 = document.querySelectorAll(".contact-set,.contact-group");

		for (let i = 0; i < roll00.length; i++) {
			roll00[i].addEventListener("click", () => {
				window.scrollTo({
					left: 0,
					top: document.getElementById("side-center").scrollHeight,
					behavior: "smooth"
				});
			});
		}

		let mail00 = document.getElementById("AllMailBox");
		mail00.addEventListener("click", () => {
			parent.location="mailto:kontakt@faktoria.ct8.pl";
		});
	}

	// function OpenBox02 run from function BoxesAni_00
	function OpenBox02() {

		let allBoxes00 = document.getElementById("AllBoxes"),
			thumbnail00;

		if (allBoxes00.children.length == 2 && !allBoxes00.classList.contains("end")) {
			thumbnail00 = allBoxes00.children[0].getElementsByTagName("img");
			for (let x = 0; x < thumbnail00.length; x++) {
				thumbnail00[x].parentNode.addEventListener("click", InsideBox00, false);
			}
		}
		if (allBoxes00.children.length == 3 && !allBoxes00.classList.contains("end")) {
			thumbnail00 = allBoxes00.children[1].getElementsByTagName("img");
			for (let x = 0; x < thumbnail00.length; x++) {
				thumbnail00[x].parentNode.addEventListener("click", InsideBox00, false);
			}
		}
		if (allBoxes00.children.length == 4 && !allBoxes00.classList.contains("end")) {
			allBoxes00.classList.add("end");
			thumbnail00 = allBoxes00.children[2].getElementsByTagName("img");
			for (let x = 0; x < thumbnail00.length; x++) {
				thumbnail00[x].parentNode.addEventListener("click", InsideBox00, false);
			}
			thumbnail00 = allBoxes00.children[3].getElementsByTagName("img");
			for (let x = 0; x < thumbnail00.length; x++) {
				thumbnail00[x].parentNode.addEventListener("click", InsideBox00, false);
			}
		}
	}

	// function InsideBox00 run from function OpenBox02
	// Changes must be made before uploading to the server.
	function InsideBox00(event) {

		let stop_or_go,
			click_obj_blockade = document.querySelectorAll(".tape-A-00-buttons-all,.all-small-planks");

		for (let z = 0; z < click_obj_blockade.length; z++) {
			if (click_obj_blockade[z].style.pointerEvents == "none") {
				stop_or_go = "stop";
			}
			if (click_obj_blockade[z].style.pointerEvents != "none") {
				stop_or_go = "go";
			}
		}

		if (stop_or_go == "go") {

			let openbox00 = document.createElement("div");
			let openbox01 = document.createElement("div");
			let closebox00 = document.createElement("div");
			let closeboxImg = document.createElement("iframe");

			openbox00.className = "openbox00";
			openbox01.className = "openbox01";
			closebox00.className = "closebox00";
			closeboxImg.className = "closeboxImg";

			closeboxImg.src = "img/button.svg";
			closeboxImg.title = "Close";
			closeboxImg.scrolling = "no";
			closebox00.appendChild(closeboxImg);

			openbox00.style.height = window.innerHeight + "px";
			openbox00.appendChild(openbox01);
			document.body.appendChild(openbox00);
			document.getElementById("hull").className = " ";

			if ("ontouchstart" in document.documentElement) {
			  let root = document.getElementsByTagName( 'html' )[0];
			  root.setAttribute("class", "mobile01");
			}	

			openbox00.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "nearest"
			});

			
			let inside00 = event.currentTarget,
				clone00;

			if (inside00.closest(".slide00") !== null || inside00.closest(".slide01") !== null ) {
				if (inside00.classList.contains("left00")) {
					clone00 = inside00.cloneNode(true);
					clone00.className = "miniatures00 miniatures01 left00";
					openbox01.appendChild(clone00);
				}
				if (inside00.classList.contains("center00")) {
					clone00 = inside00.cloneNode(true);
					clone00.className = "miniatures00 miniatures01 center00";
					openbox01.appendChild(clone00);
				}
				if (inside00.classList.contains("right00")) {
					clone00 = inside00.cloneNode(true);
					clone00.className = "miniatures00 miniatures01 right00";
					openbox01.appendChild(clone00);
				}
			}
			if (inside00.closest(".slide02") !== null || inside00.closest(".slide03") !== null ) {
				if (inside00.classList.contains("left00")) {
					clone00 = inside00.cloneNode(true);
					clone00.className = "miniatures00 miniatures02 left00";
					openbox01.appendChild(clone00);
				}
				if (inside00.classList.contains("center00")) {
					clone00 = inside00.cloneNode(true);
					clone00.className = "miniatures00 miniatures02 center00";
					openbox01.appendChild(clone00);
				}
				if (inside00.classList.contains("right00")) {
					clone00 = inside00.cloneNode(true);
					clone00.className = "miniatures00 miniatures02 right00";
					openbox01.appendChild(clone00);
				}
			}

			openbox00.appendChild(closebox00);
			closeboxImg.addEventListener("load", () => {

				// It doesn't work on a local folder. Before uploading to the server, remove "//".
				
				closeboxImg.contentDocument.getElementById("ButtonCircles").addEventListener("click", () => {
					if (openbox00.parentNode) {
						openbox00.parentNode.removeChild(openbox00);

						document.getElementById("hull").classList.add("hull-no-ani");
						if ("ontouchstart" in document.documentElement)
						{
						  let root = document.getElementsByTagName( 'html' )[0];
						  root.setAttribute("class", "mobile01 mobile00")
						}
					}
				});
			});
			openbox00.addEventListener('animationend', (event) => {
				if (event.animationName == "open-box-ani-02") {
					InsideBox0A(this);
				}
			});	
		}
		else {
			event.preventDefault();
		}
	}

	// function InsideBox0A run from function InsideBox00
	function InsideBox0A(miniatures00) {

		let parent00 = document.getElementsByClassName("openbox00"),
		prosecutor00 = document.createElement("div");
		prosecutor00.className = "prosecutor00";

		for (let l = 0; l < 3; l++) {
			let parent01 = document.createElement("div");
			parent01.className = "Inbox01";
			parent01.id = "Box-0" + l;

			let className00 = ["img-shadow00", "uppersection", "miniatures03", "leftsection", "rightsection", "bottomsection"];
			let titleNodes00 = ["Kod", "Opis", "Kategoria"];

			for (let q = 0, p = className00.length; q < p; q++) {

				let div00 = document.createElement("div");
				div00.className = className00[q];
				if (div00.className == className00[1]) {

					let div01 = document.createElement("div");
					div01.className = "sub00";

					for (let z = 1; z <= 3; z++) {

						let div03 = document.createElement("div");
						let div04 = document.createElement("div");

						div04.id = "title0" + z + l;
						div04.className = "sub01-titles";
						div04.appendChild(document.createTextNode(titleNodes00[z-1]));

						div03.id = "sect-sub0" + z + l;
						div03.className = "sub01";
						div03.appendChild(div04);

						div03.addEventListener("mouseover", (event) => {

							event.target.classList.add("reaction00");
							if (event.target.id != event.target.parentNode.lastChild.id) {
								event.target.parentNode.lastChild.style.borderBottomColor = "black";
								event.target.parentNode.lastChild.style.zIndex = "0";
							}
							if (event.target.id == event.target.parentNode.firstChild.id) {
								event.target.parentNode.lastChild.style.zIndex = "-1";
							}
						});
						div03.addEventListener("mouseout", (event) => {

							event.target.classList.remove("reaction00");
							event.target.parentNode.lastChild.style.borderBottomColor = "white";
							event.target.parentNode.lastChild.style.zIndex = "initial";
						});
						div01.appendChild(div03);
					}
					div00.appendChild(div01);
				}
				if (div00.className == className00[3] || div00.className == className00[4]) {
					
					let div05 = document.createElement("div");
					let iframe00 = document.createElement("iframe");

					div05.className = "navi-all";
					iframe00.className = "navi-all-img";
					iframe00.src = "img/RollButons.svg";
					iframe00.scrolling = "no";

					div05.appendChild(iframe00);
					div00.appendChild(div05);
				}
				if (div00.className == className00[2]) {

					let image_new = document.createElement("img");
					image_new.className = miniatures00.children[0].className;
					image_new.src = miniatures00.children[0].src;

					div00.appendChild(image_new);
				}
				parent01.appendChild(div00);
			}

			prosecutor00.appendChild(parent01);
		}

		// The order matters.
		parent00[0].replaceChild(prosecutor00, parent00[0].children[0]);
		for (let t = 0, o = prosecutor00.children.length; t < o; t++) {

			prosecutor00.children[t].children[0].style.width = prosecutor00.children[t].children[2].firstChild.width + "px";
			prosecutor00.children[t].children[0].style.height = prosecutor00.children[t].children[2].firstChild.height + "px";

			prosecutor00.children[t].children[1].firstChild.style.width = prosecutor00.children[t].children[2].firstChild.width + "px";
			prosecutor00.children[t].children[2].firstChild.style.width = prosecutor00.children[t].children[2].firstChild.clientWidth + "px";
		}

		//Adding a chain art element to the openbox element.
		let className00 = ["leftsection00", "rightsection00", "chain-all", "long-chain-img", "chain-img-up", "chain-img-down"];

		for (let v = 0; v <= 1; v++) {

			let div00 = document.createElement("div");
			div00.className = className00[v].slice(0, -2) + " " + className00[v];

			for (let y = 0; y <= 1; y++) {

				let div01 = document.createElement("div");
				let iframe00 = document.createElement("iframe");

				div01.className = className00[2];
				iframe00.className = className00[3] + " " + className00[5 - y];
				iframe00.src = "img/chainA.svg";
				iframe00.scrolling = "no";

				div01.appendChild(iframe00);
				div00.appendChild(div01);
			}
			parent00[0].insertBefore(div00, parent00[0].lastChild);
		}
		BlockSlide00();
	}

	// function BlockSlide00 run from function InsideBox0A
	function BlockSlide00() {
		let allInBox = document.querySelectorAll(".Inbox01");
		document.querySelectorAll(".leftsection.leftsection00")[0].addEventListener("animationend", (event) => {

			if (event.animationName == "left-navi-ani-00") {
				let iframe00 = document.querySelectorAll(".navi-all-img");

				for (let a = 0, b = iframe00.length; a < b; a++) {
					iframe00[a].contentDocument.getElementById("RollButtonsUp").addEventListener("click", (event) => {
						for (let m = 0; m < b; m++) {
							iframe00[m].contentDocument.getElementById("ArrowsAni00").beginElement();
							iframe00[m].contentDocument.getElementById("ArrowsAni00").addEventListener("beginEvent", (event) => {
								for (let z = 0; z < b; z++) {
									iframe00[z].contentDocument.getElementById("RollButtonsUp").style.pointerEvents = "none";
									iframe00[z].contentDocument.getElementById("RollButtonsDown").style.pointerEvents = "none";									
								}
								for (let f = 0, u = allInBox.length; f < u; f++) {
									allInBox[f].classList.add("move-up");
								}
							});
							iframe00[m].contentDocument.getElementById("LastAniUp").addEventListener("endEvent", (event) => {
								for (let z = 0; z < b; z++) {
									iframe00[z].contentDocument.getElementById("RollButtonsUp").style.pointerEvents = "all";
									iframe00[z].contentDocument.getElementById("RollButtonsDown").style.pointerEvents = "all";									
								}
							});
						}
					});
					iframe00[a].contentDocument.getElementById("RollButtonsUp").addEventListener("mouseenter", () => {
						for (let m = 0; m < b; m++) {
							iframe00[m].contentDocument.getElementById("ArrowsAniAIn").beginElement();
						}
					});
					iframe00[a].contentDocument.getElementById("RollButtonsUp").addEventListener("mouseleave", () => {
						for (let m = 0; m < b; m++) {
							iframe00[m].contentDocument.getElementById("ArrowsAniAOut").beginElement();
						}
					});
					iframe00[a].contentDocument.getElementById("RollButtonsDown").addEventListener("click", (event) => {
						for (let m = 0; m < b; m++) {
							iframe00[m].contentDocument.getElementById("ArrowsAni01").beginElement();
							iframe00[m].contentDocument.getElementById("ArrowsAni01").addEventListener("beginEvent", (event) => {
								for (let z = 0; z < b; z++) {
									iframe00[z].contentDocument.getElementById("RollButtonsUp").style.pointerEvents = "none";
									iframe00[z].contentDocument.getElementById("RollButtonsDown").style.pointerEvents = "none";
								}
								for (let f = 0, u = allInBox.length; f < u; f++) {
									allInBox[f].classList.add("move-down");
								}
							});
							iframe00[m].contentDocument.getElementById("LastAniDown").addEventListener("endEvent", (event) => {
								for (let z = 0; z < b; z++) {
									iframe00[z].contentDocument.getElementById("RollButtonsUp").style.pointerEvents = "all";
									iframe00[z].contentDocument.getElementById("RollButtonsDown").style.pointerEvents = "all";
								}
							});
						}
					});
					iframe00[a].contentDocument.getElementById("RollButtonsDown").addEventListener("mouseenter", () => {
						for (let m = 0; m < b; m++) {
							iframe00[m].contentDocument.getElementById("ArrowsAniBIn").beginElement();
						}
					});
					iframe00[a].contentDocument.getElementById("RollButtonsDown").addEventListener("mouseleave", () => {
						for (let m = 0; m < b; m++) {
							iframe00[m].contentDocument.getElementById("ArrowsAniBOut").beginElement();
						}
					});
				}
			}
		});

		let slave_masters = document.querySelectorAll(".leftsection00,.rightsection00");
		document.getElementsByClassName("Inbox01")[0].addEventListener("animationstart", (event) =>{

			if (event.target.className == "Inbox01 move-up") {
				for (let p = 0, s = slave_masters.length; p < s; p++) {
					slave_masters[p].firstChild.className = "chain-all move-up";
					slave_masters[p].lastChild.className = "chain-all move-down";
				}
			}
			if (event.target.className == "Inbox01 move-down") {
				for (let p = 0, s = slave_masters.length; p < s; p++) {
					slave_masters[p].firstChild.className = "chain-all move-down";
					slave_masters[p].lastChild.className = "chain-all move-up";
				}
			}

		});
		document.getElementsByClassName("Inbox01")[0].addEventListener("animationend", (event) =>{
			for (let f = 0, u = allInBox.length; f < u; f++) {
				allInBox[f].className = "Inbox01";
			}
			for (let p = 0, s = slave_masters.length; p < s; p++) {
				slave_masters[p].firstChild.className = "chain-all";
				slave_masters[p].lastChild.className = "chain-all";
			}

		});
	}



	if ("ontouchstart" in document.documentElement) {
		FullScreenMode();
	}
	// planksAB-banner animations
	RollWall();
	BoxesAni_00();
	// tape-A animations
	RollTape_00 (
		document.querySelectorAll(".tape-A-00-buttons,.all-small-planks"),	// click_obj
		document.getElementsByClassName("all-no-ani-buttons"),				// ani_obj
	);
	AniInProgress_00();
	ContactBox00();

}

document.addEventListener("DOMContentLoaded", GlobalAnimations);


