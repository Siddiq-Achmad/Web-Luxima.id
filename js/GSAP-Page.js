//loader
let loader = gsap.timeline({yoyo:true})

    loader.to('.bluee', {
        duration: 1,
        delay: 1,
        attr: { d: 'M0 502S175 272 500 272s500 230 500 230V0H0Z'},
        ease: 'power2.in',
    })
    .to('.bluee', {
        duration: 1,
        attr: { d: 'M0 2S175 1 500 1s500 1 500 1V0H0Z'},
        ease: 'power2.out',

    })


//Hamburger Start
$('.hamburger').on("click", function(e){
    $('.hamburger.active').not(this).removeClass('active');    
     $(this).toggleClass('active');
 });
 
 var $hamburger = $('.hamburger');
 
 gsap.set('.line01',{x:40});  
 gsap.set('.line03',{x:-40});
 //gsap.set('.navigation',{xPercent:-50, yPercent:-50})
 gsap.set('.navigation li',{x:0, opacity:0}); 
 
 var hamburgerMotion = gsap.timeline();
 hamburgerMotion.to('.line03',0.4,{x:'-=40'},0)
 hamburgerMotion.to('.line01',0.4,{x:'+=40'},0)
 hamburgerMotion.to('.menu',0.4,{autoAlpha:1},0)
 hamburgerMotion.staggerTo('.navigation li',0.4,{y:-30, opacity:1, ease: "sine.out"},0.2,0.5)
 hamburgerMotion.to('.copyright',0.4,{y:-20, opacity:1, ease: "sine.Out"},0.2,0.5)
 // hamburgerMotion.to('.navigation li',1,{marginBottom:'40px', ease: Power1.easeOut})
 // hamburgerMotion.from('.getintouch',.8,{y:30, opacity:0, ease: "sine.out"})
 hamburgerMotion.reverse();
 
 $hamburger.on('click', function(e) {
   hamburgerMotion.reversed(!hamburgerMotion.reversed());
 });
 
 
 $('.menu-links').on("mouseover", function (e){  
     gsap.to($(this), .4, {x:20, ease: "sine.out"});
 })
 
 $('.menu-links').on("mouseout", function (e){  
     gsap.to($(this), .4, {x:0, ease: "sine.out"});
 })
 
 
 $(".hamburger").on("click", function (e) {
   if ($(this).hasClass("active")) {
     $(".cursor-follower").addClass("reverse");
   }
   else {
     $(".cursor-follower").removeClass("reverse");
   }
 });
 
 
 $('.menu-links').on("click", function (e){  
   
     e.preventDefault()
   
     hamburgerMotion.reversed(!hamburgerMotion.reversed());
     $('.hamburger.active').removeClass('active');    
   
     const goTo = $(this).attr("href");
     hamburgerMotion.eventCallback('onReverseComplete', () => { window.location = goTo })
     
   
 })

  
  gsap.to(".loader", 2, {
    delay: 5,
    opacity: 0,
    ease:"power2.inOut",
  });


  gsap.to(".vtext .ovallink", {
    xPercent: -100,
    x: -innerWidth,
    ease: "none",
    scrollTrigger: {
      pinnedContainer: ".vendor",
      trigger: ".vtext",
      
      start: "bottom bottom",
      end: () => innerWidth,
      scrub: true,
      //invalidateOnRefresh: true
    }
  });
  


  const tl = gsap.timeline({
    defaults: {
        ease: "power4.out"
    }
  });
  
  
  tl.fromTo("p, ul, li",{
    opacity: 0,
    y: "100%"
  },{
    duration: 1,
    y: "0%",
    opacity: 1
  },3);

  tl.fromTo("h1, h2, h3, h4, h5, h6",{
    opacity: 0,
    y: "100%"
  },{
    duration: 1,
    y: "0%",
    opacity: 1
  });
  
  
  tl.fromTo(".vendor",{
    opacity: 0,
    x: "-100%",
  },{
    duration: 1,
    x: "0",
    opacity: 1,
  },2);
  
  tl.fromTo(".lxm",{
    opacity: 0,
    y: "-100%",
  },{
    y: "0",
    opacity: 1,
    duration: 2, 
    ease: "elastic.out(1, 0.5)",
  });


  tl.fromTo(".navlink",{
    opacity: 0,
    y: "-100%",
  },{
    y: "0",
    opacity: 1,
    duration: 2, 
    ease: "elastic.out(1, 0.5)",
  },"-=1.5");

  






//Back to TOP

const btt = document.querySelector(".backtotop");

btt.addEventListener("click", () => gsap.to(window, {
  duration: 0.1,
  scrollTo: 0,
  ease: "Power1.easeInOut"
}));
gsap.set(btt, {y: 50});

gsap.to(btt, {
  y: 0, 
  autoAlpha: 1, 
  scrollTrigger: {
    trigger: "body",
    start: "top -20%",
    end: "top -20%",
    scrub: 1,
    toggleActions: "play none reverse none"
  }
});



