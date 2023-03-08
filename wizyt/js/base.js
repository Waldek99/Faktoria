
function GlobalAnimations() {

	function RollWall() {
		const small_planks = document.getElementsByClassName("all-small-planks");
		for (let i = 0; i < small_planks.length; i++) {
			small_planks[i].addEventListener("click", () => {
				document.getElementById("side-center").classList.add("side-center-ani");
				document.getElementById("side-bottom").classList.add("side-bottom-ani");
				document.getElementById("all-lines").classList.add("all-lines-ani");
				document.getElementById("planksAB-banner").classList.add("planksAB-banner-ani");
				document.getElementById("hull").classList.add("hull-ani");
				document.getElementById("gutter-down-left").classList.add("all-gutters-down-ani");
				document.getElementById("gutter-down-right").classList.add("all-gutters-down-ani");				
			});
		}
	}

	// The CSS Animations specification doesn't offer a way to run an animation again.
	// There's no magic resetAnimation() method on elements, and you can't even just set the element's animation-play-state to "running" again. 
	// Instead, you have to use clever tricks to get a stopped animation to replay.
	function RollTape_00 (click_obj, ani_obj, class_of_ani, class_on_ani, class_of_ani_buttons, class_on_ani_buttons) {
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

	function AniInProgress_00 () {
		tape_A_ani = document.querySelectorAll(".all-no-ani-buttons,#PlankSmall");
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

	function BoxesMoveLeftAni_01() {
		slides_div = document.getElementsByClassName("slides");
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
	function BoxesMoveRightAni_01() {
		slides_div = document.getElementsByClassName("slides");
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

	function BoxesAni_00 () {
		MoveItemLeft = (array, to, from) => {
			item = array[from];
			array.splice(from, 1);
			array.splice(to, 0, item);
			return array;
		}
		MoveItemRight = (array, to, from) => {
			item = array[from];
			array.splice(from, 1);
			array.splice(to, 0, item);
			return array;
		}
		click_obj = document.querySelectorAll(".all-small-planks,.tape-A-00-buttons");
		slides_class_00 = [
			"slides slide00",
			"slides slide01",
			"slides slide02",
			"slides slide03",
			];
		for (let i = 0; i < click_obj.length; i++) {
			click_obj[i].addEventListener("click", () => {
				if (click_obj[i].classList.contains("tape-A-00-buttons")) {
					if (click_obj[i].id === "Button00Left" || click_obj[i].id === "Button01Left") {
						BoxesMoveLeftAni_01();
					}
					if (click_obj[i].id === "Button00Right" || click_obj[i].id === "Button01Right") {
						BoxesMoveRightAni_01();
					}
				}
				if (click_obj[i].classList.contains("all-small-planks")) {
					if (click_obj[i].id === "PlankSmallGrafik") {
						BoxesMoveLeftAni_01();
					}
					if (click_obj[i].id === "PlankSmallAnimation") {
						BoxesMoveLeftAni_01();
					}
					if (click_obj[i].id === "PlankSmallMovie") {
						BoxesMoveLeftAni_01();
					}
					if (click_obj[i].id === "PlankSmallMusic") {
						BoxesMoveLeftAni_01();
					}
				}
			});
		}
		
	}

	function ScrollToContact00 () {
		contact00 = document.querySelectorAll(".contact-set,.contact-group");
		for (let i = 0; i < contact00.length; i++) {
			contact00[i].addEventListener ("click", () => {
				window.scrollTo({
					left: 0,
					top: document.getElementById("gutter-down").scrollHeight,
					behavior: "smooth"
				});
			});
		}
	}

	// planksAB-banner animations
	RollWall();
	BoxesAni_00();
	// tape-A animations
	RollTape_00 (
		document.querySelectorAll(".tape-A-00-buttons,.all-small-planks"),	// click_obj
		document.getElementsByClassName("all-no-ani-buttons"),				// ani_obj
		class_of_ani = "all-no-ani-buttons",								// class_of_ani
		class_on_ani = "tape-A-ani", 										// class_on_ani
		class_of_ani_buttons = "tape-A-00-buttons",							// class_of_ani_buttons
		class_on_ani_buttons = "tape-A-00-buttons-ani",						// class_0n_ani_buttons
	);
	AniInProgress_00();
	ScrollToContact00();


}

document.addEventListener("DOMContentLoaded", GlobalAnimations);


