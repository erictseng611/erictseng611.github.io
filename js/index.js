// window.onbeforeunload = function() {
// 	window.scrollTo(0, 0);
// }

document.addEventListener("DOMContentLoaded", function(event) {

	const body = document.querySelector('body');
	var intro_section = document.getElementById('#intro_section');
	var sections = document.querySelectorAll('.dividingContent');
	var sectionsOffTop = [].slice.call(sections).map(section => {
		return section.offsetTop;
	});

	function Navbar(elementId) {

		this.init = function() {
			this.navbar = document.getElementById(elementId);
			this.navlinks = document.querySelectorAll('.nav-link');
			this.navbar_center = document.querySelector('.navbar-center');

			this.topOfNav = this.navbar.offsetTop;
			this.navbarHeight = navbar.offsetHeight;

			// if you are looking at this, sorry for this shit LOL
			this.navlinks.forEach(function(navlink, index) {
				navlink.addEventListener('click', function() {
					const element = sections[index + 1];

					//scroll to section of each corresponding navlink
					scrollIt(element, 600, 'linear', null);

				});
			});

			window.addEventListener('scroll', this.fixNav.bind(this));
			window.addEventListener('scroll', this.activeSection.bind(this));
			window.addEventListener('resize', this.resize.bind(this));
		}

		this.resize = function() {

			//if the page has been scrolled down where the navbar has been fixed,
			//the navbar offsetTop gets set to 0. In the case where user resizes the screen,
			//and this is happening. Then set the offsetTop to the bottom of the intro section
			if (this.navbar.offsetTop == 0) {
				console.log(sections[0]);
				this.topOfNav = sections[0].offsetHeight - navbar.offsetHeight;
			} else {
				this.topOfNav = this.navbar.offsetTop;
			}

			this.navbarHeight = navbar.offsetHeight;

			const check = mobileCheck();
			if (check) {
				console.log("user is using a mobile device");
			} else {
				console.log('user is using a desktop')
			}
		};

		this.activeSection = function() {
			//create new array of the offsetTop's of the various sections and turn into array
			//so that we can use the map over function

			// create temporary array so that we can still access ('this' keyword gets destroyed in scope)
			var tempNavLinks = this.navlinks;
			sectionsOffTop.forEach(function(sectionOffset, index) {
				if (window.scrollY >= sectionOffset + sections[0].offsetHeight / 2) {
					tempNavLinks.forEach(navlink => {
						navlink.classList.remove('nav-link-selected');
					});
					tempNavLinks[index].classList.add('nav-link-selected');
				}
				//if the page is at the top, remove the styling from the about nav-link
				if (window.scrollY == 0) {
					tempNavLinks[0].classList.remove('nav-link-selected');
				}
			});
		};

		//fixes the nav to the top of the page after you scroll past the bar
		this.fixNav = function() {
			if (window.scrollY >= this.topOfNav) {
				this.navbar.style.position = 'fixed';
				this.navbar.style.top = "0";
				this.navbar.style.backgroundColor = 'rgb(153, 166, 177)';
				document.body.style.paddingTop = '56.19';
				this.navlinks.forEach(navlink => {
					if (!navlink.classList.contains('growText')) {
						navlink.classList.add('growText');
					}
				});
			} else {
				this.navbar.style.position = 'absolute';
				this.navbar.style.top = "90%";
				document.body.style.paddingTop = 0;
				this.navbar.style.backgroundColor = 'rgba(0,0,0, 0)';
				this.navlinks.forEach(navlink => {
					if (navlink.classList.contains('growText')) {
						navlink.classList.remove('growText');
					}
				});
			}
		};
	}

	var navbarObj = new Navbar('navbar');
	navbarObj.init();




	// Project LightBoxes



	document.querySelector('#work-card_Princess').addEventListener('click', function(){
		picoModal({
			content:`<section>
							<h1> Princess Cruises</h1>
							<h2> Front-end Development Intern </h2>
							<p> As a front-end developer I worked on 3 main projects: Securing princess.com, building a new login module, and implementing WCAG 2.0 consistent modules across the main site. </p>
							<p> <strong>Skills</strong>: HTML5, CSS3, JQuery, SVN, WCAG 2.0</p>
							<button class="resume-button_modal" onclick='location.href="./resume.html"'> View on my resume </button>
							<figure>
								<figcaption>
									<p> Desktop and Mobile Views </p>
								</figcaption>
								<a href="https://www.princess.com/"><img src="./images/princess_modal.png" alt="Princess Cruises Desktop and Mobile View"></a>		
							</figure>
						</section>`,
			closeHtml:"<span> Close </span>",
			closeStyles: { float: "right",
							padding: ".25rem 1rem",
							marginTop: ".5rem",
							backgroundColor: "transparent",
							border, "1px solid black"  },
			modalClass: "modal",
			modalStyles: function( styles){ styles.width = '90%'},
			modalId: "Princess_modal"
		})
		.afterClose(function (modal) {modal.destroy();})
		.show();
	});

	document.querySelector('#work-card_WiFinder').addEventListener('click', function(){
		picoModal({
			content: `	<section>
							<h1> WiFinder </h1>
							<h2> Front-end Developer/UI Designer </h2>
							<p> UCSD is infamous on our campus to having spotty internet connection. WiFinder is a project thats design is to use crowdsourcing to help students find areas with strong wifi. </p>
							<p> <strong>Skills</strong>: HTML5, CSS3, Javascript, Leaflet, SpeedOf.Me</p>
							<button class="resume-button_modal" onclick='location.href="./resume.html"'> View on my resume </button>
							<figure>
								<figcaption>
									<p> Desktop view </p>
								</figcaption>
								<a href="http://wife-finder.herokuapp.com/"><img src="./images/WiFinder_modal.png" alt="WiFinder image"></a>
							</figure>
						</section>`,
			closeHtml:"<span> Close </span>",
			closeStyles: {	float: "right",
							padding: ".25rem 1rem",
							marginTop: ".5rem",
							backgroundColor: "transparent",
							border, "1px solid black"  },
			modalClass: "modal",
			modalStyles: function (styles) { styles.width = '90%'},
			modalId: "WiFinder_modal"
		}).show();
	});

	document.querySelector('#work-card_Blast').addEventListener('click', function(){
		picoModal({
			content: `	<section>
							<h1> Blast Athletics </h1>
							<h2> UX/UI Designer </h2>
							<p> Blast Athletics is a crowdfunding platform for various levels of sports teams. While internin there, I redesigned user interfaces for core functionalities to increase site traffic and user buy in, which included customizeable team and player profiles, dashboard, and newsfeed.  </p>
							<p> <strong>Skills</strong>: Photoshop, Illustrator, After Effects, Wireframing</p>
							<button class="resume-button_modal" onclick='location.href="./resume.html"'> View on my resume </button>
							<figure>
								<figcaption>
									<p> Team Profile Desktop View </p>
								</figcaption>
								<a href="https://www.blastathletics.com"><img src="./images/Blast_teamProfile_Desktop.png" alt="Blast Athletics"></a>
							</figure>
							<figure class="modal_mobile_screen">
								<figcaption>
									<p> Dashboard (Left) News Feed (Right) Mobile View </p>
								</figcaption>
								<a href="https://www.blastathletics.com"><img src="./images/Blast_dash_Mobile.png" alt="Blast Athletics dash"></a>
								<a href="https://www.blastathletics.com"><img src="./images/Blast_feed_Mobile.png" alt="Blast Athletics feed"></a>								
							</figure>
						</section>`,
			closeHtml:"<span> Close </span>",
			closeStyles: {	float: "right",
							padding: ".25rem 1rem",
							marginTop: ".5rem",
							backgroundColor: "transparent",
							border, "1px solid black" },
			modalClass: "modal",
			modalStyles: function (styles) { styles.width = '90%'},
			modalId: "Blast_modal"
		}).show();
	});

	document.querySelector('#work-card_GCT').addEventListener('click', function(){
		picoModal({
			content: `	<section>
							<h1> Global Clinical Trials </h1>
							<h2> Social Media and Blog Intern </h2>
							<p> I authored articles for the Clinical Trials Guru blog regarding data protection, compliance, cybersecurity, data privacy, and technology. In addition, I designed the template for the first Global Clinical Trials monthly newletter.</p>
							<p> <strong>Skills</strong>: Microsoft Suites</p>
							<button class="resume-button_modal" onclick='location.href="./resume.html"'> View on my resume </button>
							<figure>
								<a href="http://www.globalclinicaltrials.org/"><img src="./images/GCT_website_Desktop.png" alt="Global Clinical Trials Website"></a>
							</figure>
						</section>`,
			closeHtml:"<span> Close </span>",
			closeStyles: {	float: "right",
							padding: ".25rem 1rem",
							marginTop: ".5rem",
							backgroundColor: "transparent",
							border, "1px solid black"  },
			modalClass: "modal",
			modalStyles: function (styles) { styles.width = '90%'},
			modalId: "WiFinder_modal"
		}).show();
	});



	function mobileCheck() {
		var isMobile = false; //initiate as false
		if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;
		return isMobile;
	};

	function scrollIt(destination, duration = 200, easing = 'linear', callback) {
		const easings = {
			linear(t) {
				return t;
			},
			easeInQuad(t) {
				return t * t;
			},
			easeOutQuad(t) {
				return t * (2 - t);
			},
			easeInOutQuad(t) {
				return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
			},
		};

		const start = window.pageYOffset;
		const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

		const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
		const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
		const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop - navbar.offsetHeight;
		const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

		if ('requestAnimationFrame' in window === false) {
			window.scroll(0, destinationOffsetToScroll);
			if (callback) {
				callback();
			}
			return;
		}

		function scroll() {
			const now = 'now' in window.performance ? performance.now() : new Date().getTime();
			const time = Math.min(1, ((now - startTime) / duration));
			const timeFunction = easings[easing](time);
			window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

			if (Math.ceil(window.pageYOffset) === destinationOffsetToScroll) {
				if (callback) {
					callback();
				}
				return;
			}
			requestAnimationFrame(scroll);
		}

		scroll();
	};

	var getSiblings = function(elem) {
		var siblings = [];
		var sibling = elem.parentNode.firstChild;
		for (; sibling; sibling = sibling.nextSibling) {
			if (sibling.nodeType !== 1 || sibling === elem) continue;
			siblings.push(sibling);
		}
		return siblings;
	};

});