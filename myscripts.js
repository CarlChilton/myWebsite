$(document).ready(function() {

			var iAmHome = true;
			var currentScreen = "home"

			titleBarShow();
			bringItHome(800, 1200, 1600);

			$(window).resize(function() {						

				if (iAmHome) {

					if ($(window).width() < 600) {
						$("#buttonAbout").css({"left":"0vw", "top":"20vh"});
						$("#buttonPortfolio").css({"left":"15vw", "top":"45vh"});				
						$("#buttonContact").css({"left":"0vw", "top":"70vh"});			
					} else if ($(window).width() < 768) {
						$("#buttonAbout").css({"left":"15vw", "top":"20vh"});
						$("#buttonPortfolio").css({"left":"62vw", "top":"32vh"})
						$("#buttonContact").css({"left":"35vw", "top":"60vh"});					
					} else {
						$("#buttonAbout").css({"left":"50vw", "top":"-2vh"});
						$("#buttonPortfolio").css({"left":"65vw", "top":"-2vh"})
						$("#buttonContact").css({"left":"80vw", "top":"-2vh"});
						
					}

				} else {

					if ($(window).width() < 600) {
						$("#buttonAbout").css({"left":"-100vw", "top":"20vh"});
						$("#buttonPortfolio").css({"left":"115vw", "top":"45vh"});				
						$("#buttonContact").css({"left":"-100vw", "top":"70vh"});	
						$("#aboutMe").css({"top":"14vh", "height":"80vh"});			
						if (currentScreen="about") {
							$("#aboutMe").css({"height":"80vh", "top":"14vh"});	
						} else if (currentScreen="portfolio") {
							$("#portfolio").css({"height":"80vh", "top":"14vh"});	
						} else {
							$("#contact").css({"height":"80vh", "top":"14vh"});	
						}	
						$("#titleBar").css({"top":"0vh"});
					} else if ($(window).width() < 768) {
						$("#buttonAbout").css({"left":"-50vw", "top":"20vh"});
						$("#buttonPortfolio").css({"left":"115vw", "top":"32vh"})
						$("#buttonContact").css({"left":"-50vw", "top":"60vh"});			
						$("#aboutMe").css({"top":"17vh", "height":"78vh"});		
						if (currentScreen="about") {
							$("#aboutMe").css({"height":"78vh", "top":"17vh"});	
						} else if (currentScreen="portfolio") {
							$("#portfolio").css({"height":"78vh", "top":"17vh"});	
						} else {
							$("#contact").css({"height":"78vh", "top":"17vh"});	
						}
						
						$("#titleBar").css({"top":"0vh"});
					} else {
						$("#buttonAbout").css({"left":"50vw", "top":"-20vh"});
						$("#buttonPortfolio").css({"left":"65vw", "top":"-20vh"})
						$("#buttonContact").css({"left":"80vw", "top":"-20vh"});
						$(".contentDisplayer").css({"height":"90vh", "top":"3vh"});
						if (currentScreen="about") {
							$("#aboutMe").css({"height":"90vh", "top":"3vh"});	
						} else if (currentScreen="portfolio") {
							$("#portfolio").css({"height":"90vh", "top":"3vh"});	
						} else {
							$("#contact").css({"height":"90vh", "top":"3vh"});	
						}
						$("#titleBar").css({"top":"-20vh"});
					}

				}

			});
			
			$("#titleBar").css({"top":"-20vh"});
			/*$(".contentAndHome").css({"top":"0%", "height":"2vh"});*/

			if ($(window).width() < 600) {
				$("#buttonAbout").css({"left":"-100vw"});
				$("#buttonContact").css({"left":"-100vw"});
				$("#buttonPortfolio").css({"left":"115vw"});				
			} else if ($(window).width() < 768) {
				$("#buttonAbout").css({"left":"-100vw"});
				$("#buttonContact").css({"left":"-100vw"});
				$("#buttonPortfolio").css({"left":"115vw"})
			} else {
				$("#buttonAbout").css({"top":"-20vh"});
				$("#buttonContact").css({"top":"-20vh"});
				$("#buttonPortfolio").css({"top":"-20vh"})
			}

			function aboutButtonShow() {

				if ($(window).width() < 600) {
					$("#buttonAbout").css({"left":"-100vw"}).animate({"left":"0vw"}, 1000);
				} else if ($(window).width() < 768) {
					$("#buttonAbout").css({"left":"-50vw"}).animate({"left":"15vw"}, 1000);
				} else {
					$("#buttonAbout").css({"top":"-20vh"}).animate({"top":"-2vh"}, 1000);
				}	

			};			

			function portfolioButtonShow() {

				if ($(window).width() < 600) {
					$("#buttonPortfolio").css({"left":"115vw"}).animate({"left":"15vw"}, 1000);
				} else if ($(window).width() < 768) {
					$("#buttonPortfolio").css({"left":"115vw"}).animate({"left":"62vw"}, 1000);
				} else {
					$("#buttonPortfolio").css({"top":"-20vh"}).animate({"top":"-2vh"}, 1000);
				}				

			};

			function contactButtonShow() {

				if ($(window).width() < 600) {
					$("#buttonContact").css({"left":"-100vw"}).animate({"left":"0vw"}, 1000);
				} else if ($(window).width() < 768) {
					$("#buttonContact").css({"left":"-50vw"}).animate({"left":"35vw"}, 1000);
				} else {
					$("#buttonContact").css({"top":"-20vh"}).animate({"top":"-2vh"}, 1000);
				}				

			};

			function titleBarShow() {

				$("#titleBar").css({"top":"-20vh"}).animate({"top":"0vw"}, 1000);
				$(".welcomeContainer").addClass("welcomeAppear");

			};

			function bringItHome(abtDelay, pfDelay, ctDelay) {

				
				setTimeout(aboutButtonShow, abtDelay);
				setTimeout(portfolioButtonShow, pfDelay);
				setTimeout(contactButtonShow, ctDelay);

			};

			$("#buttonAbout").click(function() {

				if (iAmHome) {

					iAmHome = false;
					currentScreen = "about";
					$("#aboutMe").css({"display":"inline"});
					$("#buttonAbout").addClass("buttonFlasher");
					$("#homeAbout").removeClass("buttonFlasher");

					if ($(window).width() < 600) {
						/*Hide the home screen buttons*/
						$("#buttonAbout").css({"left":"0vw"}).animate({"left":"-100vw"}, 1800);
						$("#buttonPortfolio").css({"left":"15vw"}).animate({"left":"115vw"}, 1000);
						$("#buttonContact").css({"left":"0vw"}).animate({"left":"-100vw"}, 1000);
						/*launch the About Me window*/
						$("#aboutMe").css({"opacity":"0"}).delay(1000).animate({"opacity":"1"}, 500);
						$("#aboutMe").css({"height":"13vh", "top":"40vh", "border-radius":"8px"}).delay(1000).animate({"height":"80vh", "top":"14vh","border-bottom-left-radius":"50px","border-bottom-right-radius":"50px"}, 1000);		
					} else if ($(window).width() < 768) {
						/*Hide the home screen buttons*/
						$("#buttonAbout").css({"left":"15vw"}).animate({"left":"-50vw"}, 1800);
						$("#buttonPortfolio").css({"left":"62vw"}).animate({"left":"115vw"}, 1000);
						$("#buttonContact").css({"left":"35vw"}).animate({"left":"-50vw"}, 1000);
						/*launch the About Me window*/
						$("#aboutMe").css({"opacity":"0"}).delay(1000).animate({"opacity":"1"}, 500);
						$("#aboutMe").css({"height":"13vh", "top":"40vh", "border-radius":"8px"}).delay(1000).animate({"height":"78vh", "top":"17vh","border-bottom-left-radius":"50px","border-bottom-right-radius":"50px"}, 1000);	
					} else {
						/*Hide the home screen buttons*/
						$("#buttonAbout").css({"top":"-2vh"}).animate({"top":"-20vh"}, 1000);
						$("#buttonPortfolio").css({"top":"-2vh"}).animate({"top":"-20vh"}, 1000);
						$("#buttonContact").css({"top":"-2vh"}).animate({"top":"-20vh"}, 1000);
						$("#titleBar").css({"top":"0vh"}).animate({"top":"-20vw"}, 1000);
						/*launch the About Me window*/
						$("#aboutMe").css({"opacity":"0"}).delay(1000).animate({"opacity":"1"}, 500);
						$("#aboutMe").css({"height":"10vh", "top":"40vh", "border-radius":"8px"}).delay(1000).animate({"height":"90vh", "top":"3vh","border-bottom-left-radius":"50px","border-bottom-right-radius":"50px"}, 1000);	
						$(".welcomeContainer").removeClass("welcomeAppear");
						$(".welcomeContainer").addClass("welcomeDisappear");
					}

				}				

			});

			$("#buttonPortfolio").click(function() {

				if (iAmHome) {

					iAmHome = false;
					currentScreen = "portfolio";
					$("#portfolio").css({"display":"inline"});
					$("#buttonPortfolio").addClass("buttonFlasher");
					$("#homePortfolio").removeClass("buttonFlasher");

					if ($(window).width() < 600) {
						/*Hide the home screen buttons*/
						$("#buttonAbout").css({"left":"0vw"}).animate({"left":"-100vw"}, 1000);
						$("#buttonPortfolio").css({"left":"15vw"}).animate({"left":"115vw"}, 1800);
						$("#buttonContact").css({"left":"0vw"}).animate({"left":"-100vw"}, 1000);
						/*launch the About Me window*/
						$("#portfolio").css({"opacity":"0"}).delay(1000).animate({"opacity":"1"}, 500);
						$("#portfolio").css({"height":"13vh", "top":"40vh", "border-radius":"8px"}).delay(1000).animate({"height":"80vh", "top":"14vh","border-bottom-left-radius":"50px","border-bottom-right-radius":"50px"}, 1000);		
					} else if ($(window).width() < 768) {
						/*Hide the home screen buttons*/
						$("#buttonAbout").css({"left":"15vw"}).animate({"left":"-50vw"}, 1000);
						$("#buttonPortfolio").css({"left":"62vw"}).animate({"left":"115vw"}, 1800);
						$("#buttonContact").css({"left":"35vw"}).animate({"left":"-50vw"}, 1000);
						/*launch the About Me window*/
						$("#portfolio").css({"opacity":"0"}).delay(1000).animate({"opacity":"1"}, 500);
						$("#portfolio").css({"height":"13vh", "top":"40vh", "border-radius":"8px"}).delay(1000).animate({"height":"78vh", "top":"17vh","border-bottom-left-radius":"50px","border-bottom-right-radius":"50px"}, 1000);	
					} else {
						/*Hide the home screen buttons*/
						$("#buttonAbout").css({"top":"-2vh"}).animate({"top":"-20vh"}, 1000);
						$("#buttonPortfolio").css({"top":"-2vh"}).animate({"top":"-20vh"}, 1000);
						$("#buttonContact").css({"top":"-2vh"}).animate({"top":"-20vh"}, 1000);
						$("#titleBar").css({"top":"0vh"}).animate({"top":"-20vw"}, 1000);
						/*launch the About Me window*/
						$("#portfolio").css({"opacity":"0"}).delay(1000).animate({"opacity":"1"}, 500);
						$("#portfolio").css({"height":"10vh", "top":"40vh", "border-radius":"8px"}).delay(1000).animate({"height":"90vh", "top":"3vh","border-bottom-left-radius":"50px","border-bottom-right-radius":"50px"}, 1000);	
						$("#welcomeContainer").removeClass("welcomeAppear");
						$("#welcomeContainer").addClass("welcomeDisappear");
					}

				}				
				
			});							

			$("#buttonContact").click(function() {

				if (iAmHome) {

					iAmHome = false;
					currentScreen = "contact";
					$("#contact").css({"display":"inline"});
					$("#buttonContact").addClass("buttonFlasher");
					$("#homeContact").removeClass("buttonFlasher");

					if ($(window).width() < 600) {
						/*Hide the home screen buttons*/
						$("#buttonAbout").css({"left":"0vw"}).animate({"left":"-100vw"}, 1000);
						$("#buttonPortfolio").css({"left":"15vw"}).animate({"left":"115vw"}, 1000);
						$("#buttonContact").css({"left":"0vw"}).animate({"left":"-100vw"}, 1800);
						/*launch the About Me window*/
						$("#contact").css({"opacity":"0"}).delay(1000).animate({"opacity":"1"}, 500);
						$("#contact").css({"height":"13vh", "top":"40vh", "border-radius":"8px"}).delay(1000).animate({"height":"80vh", "top":"14vh","border-bottom-left-radius":"50px","border-bottom-right-radius":"50px"}, 1000);		
					} else if ($(window).width() < 768) {
						/*Hide the home screen buttons*/
						$("#buttonAbout").css({"left":"15vw"}).animate({"left":"-50vw"}, 1000);
						$("#buttonPortfolio").css({"left":"62vw"}).animate({"left":"115vw"}, 1000);
						$("#buttonContact").css({"left":"35vw"}).animate({"left":"-50vw"}, 1800);
						/*launch the About Me window*/
						$("#contact").css({"opacity":"0"}).delay(1000).animate({"opacity":"1"}, 500);
						$("#contact").css({"height":"13vh", "top":"40vh", "border-radius":"8px"}).delay(1000).animate({"height":"78vh", "top":"17vh","border-bottom-left-radius":"50px","border-bottom-right-radius":"50px"}, 1000);	
					} else {
						/*Hide the home screen buttons*/
						$("#buttonAbout").css({"top":"-2vh"}).animate({"top":"-20vh"}, 1000);
						$("#buttonPortfolio").css({"top":"-2vh"}).animate({"top":"-20vh"}, 1000);
						$("#buttonContact").css({"top":"-2vh"}).animate({"top":"-20vh"}, 1000);
						$("#titleBar").css({"top":"0vh"}).animate({"top":"-20vw"}, 1000);
						/*launch the About Me window*/
						$("#contact").css({"opacity":"0"}).delay(1000).animate({"opacity":"1"}, 500);
						$("#contact").css({"height":"10vh", "top":"40vh", "border-radius":"8px"}).delay(1000).animate({"height":"90vh", "top":"3vh","border-bottom-left-radius":"50px","border-bottom-right-radius":"50px"}, 1000);	
						$("#welcomeContainer").removeClass("welcomeAppear");
						$("#welcomeContainer").addClass("welcomeDisappear");
					}

				}								

			});		

			$("#homeAbout").click(function() {

				$("#homeAbout").addClass("buttonFlasher");
				$("#buttonAbout").removeClass("buttonFlasher");
				$("#buttonPortfolio").removeClass("buttonFlasher");
				$("#buttonContact").removeClass("buttonFlasher");

				iAmHome = true;
				currentScreen = "home"

				if ($(window).width() < 600) {
					/*Fold and hide the detail screens*/					
					$("#aboutMe").css({"height":"80vh", "top":"14vh", "border-bottom-left-radius":"50px", "border-bottom-right-radius":"50px"}).delay(1000).animate({"height":"13vh", "top":"40vh", "border-bottom-left-radius":"8px", "border-bottom-right-radius":"8px"}, 1000);		
					
				}  else if ($(window).width() < 768) {
					/*Fold and hide the detail screens*/					
					$("#aboutMe").css({"height":"78vh", "top":"17vh", "border-bottom-left-radius":"50px","border-bottom-right-radius":"50px"}).delay(1000).animate({"height":"13vh", "top":"40vh","border-bottom-left-radius":"8px","border-bottom-right-radius":"8px"}, 1000);	
				} else {
					/*Fold and hide the detail screens*/					
					$("#aboutMe").css({"height":"90vh", "top":"3vh", "border-bottom-left-radius":"50px","border-bottom-right-radius":"50px"}).delay(1000).animate({"height":"10vh", "top":"40vh","border-bottom-left-radius":"8px","border-bottom-right-radius":"8px"}, 1000);	
				}

				$("#aboutMe").css({"opacity":"1"}).delay(1000).animate({"opacity":"0"}, 500);

				if ($(window).width() >= 768) {
					setTimeout(titleBarShow, 2000);
				}

				bringItHome(2800, 3200, 3600);		
				
			});

			$("#homePortfolio").click(function() {

				$("#homePortfolio").addClass("buttonFlasher");

				iAmHome = true;
				currentScreen = "home"

				if ($(window).width() < 600) {
					/*Fold and hide the detail screens*/					
					$("#portfolio").css({"height":"80vh", "top":"14vh", "border-bottom-left-radius":"50px", "border-bottom-right-radius":"50px"}).delay(1000).animate({"height":"13vh", "top":"40vh", "border-bottom-left-radius":"8px", "border-bottom-right-radius":"8px"}, 1000);		
					
				}  else if ($(window).width() < 768) {
					/*Fold and hide the detail screens*/					
					$("#portfolio").css({"height":"78vh", "top":"17vh", "border-bottom-left-radius":"50px","border-bottom-right-radius":"50px"}).delay(1000).animate({"height":"13vh", "top":"40vh","border-bottom-left-radius":"8px","border-bottom-right-radius":"8px"}, 1000);	
				} else {
					/*Fold and hide the detail screens*/					
					$("#portfolio").css({"height":"90vh", "top":"3vh", "border-bottom-left-radius":"50px","border-bottom-right-radius":"50px"}).delay(1000).animate({"height":"10vh", "top":"40vh","border-bottom-left-radius":"8px","border-bottom-right-radius":"8px"}, 1000);	
				}

				$("#portfolio").css({"opacity":"1"}).delay(1000).animate({"opacity":"0"}, 500);

				if ($(window).width() >= 768) {
					setTimeout(titleBarShow, 2000);
				}

				bringItHome(2800, 3200, 3600);

			});			

			$("#homeContact").click(function() {

				$("#homeContact").addClass("buttonFlasher");

				iAmHome = true;
				currentScreen = "home"

				if ($(window).width() < 600) {
					/*Fold and hide the detail screens*/					
					$("#contact").css({"height":"80vh", "top":"14vh", "border-bottom-left-radius":"50px", "border-bottom-right-radius":"50px"}).delay(1000).animate({"height":"13vh", "top":"40vh", "border-bottom-left-radius":"8px", "border-bottom-right-radius":"8px"}, 1000);		
					
				}  else if ($(window).width() < 768) {
					/*Fold and hide the detail screens*/					
					$("#contact").css({"height":"78vh", "top":"17vh", "border-bottom-left-radius":"50px","border-bottom-right-radius":"50px"}).delay(1000).animate({"height":"13vh", "top":"40vh","border-bottom-left-radius":"8px","border-bottom-right-radius":"8px"}, 1000);	
				} else {
					/*Fold and hide the detail screens*/					
					$("#contact").css({"height":"90vh", "top":"3vh", "border-bottom-left-radius":"50px","border-bottom-right-radius":"50px"}).delay(1000).animate({"height":"10vh", "top":"40vh","border-bottom-left-radius":"8px","border-bottom-right-radius":"8px"}, 1000);	

				}

				$("#contact").css({"opacity":"1"}).delay(1000).animate({"opacity":"0"}, 500); 

				if ($(window).width() >= 768) {
					setTimeout(titleBarShow, 2000);
				}

				bringItHome(2800, 3200, 3600);

			});		

			$(".buttonLink").mouseover(function() {
				$(this).removeClass("buttonLinkOut");
				$(this).addClass("buttonLinkOver");

			});

			$(".buttonLink").mouseout(function() {
				$(".buttonLink").removeClass("buttonLinkOver");
				$(".buttonLink").addClass("buttonLinkOut");
				
			});

			



		}); 		