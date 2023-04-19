"use strict";
function GlobalAnimations() {

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

		let class_of_ani = "all-no-ani-buttons";
		let class_on_ani = "tape-A-ani";
		let class_of_ani_buttons = "tape-A-00-buttons";
		let class_on_ani_buttons = "tape-A-00-buttons-ani";

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

		let tape_A_ani = document.querySelectorAll(".all-no-ani-buttons,#PlankSmall");
		let click_obj_blockade = document.querySelectorAll(".tape-A-00-buttons-all,.all-small-planks");

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

		let allBoxes00 = document.getElementById("AllBoxes");
		let thumbnail00;

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
	function InsideBox00(event) {

		let stop_or_go
		let click_obj_blockade = document.querySelectorAll(".tape-A-00-buttons-all,.all-small-planks");

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

			let height00 = window.innerHeight + "px";
			openbox00.style.height = height00;
			openbox00.appendChild(openbox01);
			document.body.appendChild(openbox00);
			document.getElementById("hull").className = " ";

			if ("ontouchstart" in document.documentElement) {
			  let root = document.getElementsByTagName( 'html' )[0];
			  root.setAttribute("class", "mobile01");
			}	

			openbox00.scrollIntoView({
				behavior: "smooth"
			});

			
			let inside00 = event.currentTarget;
			let clone00;

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

					let parent00 = document.getElementsByClassName("openbox01");

					let miniatures_new = document.createElement("div");
					miniatures_new.className = "miniatures03";

					let image_new = document.createElement("img");
					image_new.className = this.children[0].className;
					image_new.src = this.children[0].src;


					// replacing a clone with a new element
					miniatures_new.appendChild(image_new);
					parent00[0].replaceChild(miniatures_new, parent00[0].children[0]);
				}
			});	
		}
		else {
			event.preventDefault();
		}
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


