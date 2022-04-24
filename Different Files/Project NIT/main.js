// typing animation

var typing = new Typed (".typing",{

    strings : ["Designer", "Developer", "Freelancer", "Photographer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true

});

//sticky navbar

window.onscroll =function(){

    var navbar = document.getElementById("navbar");

    if(window.scrollY > 55){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}


// counter 

const counters = document.querySelectorAll('.counter');
const speed = 350; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = Math.ceil(count + inc);
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});


//scroll to top 

function scrolltoTop(){
    document.documentElement.scrollTop = 0;
}

// menu toggle bar
function menu(){
    let menu = document.getElementById("menu");
    let menubar = document.querySelector(".menu-btn i");

    menu.classList.toggle("active");
    menubar.classList.toggle("active");
}

//
