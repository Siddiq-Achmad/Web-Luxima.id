



gsap.from(".clip-top, .clip-bottom", 3, {
    delay: 1,
    height: "50vh",
    ease: "power4.inOut",
  });
  gsap.to(".marquee-x", 3.5, {
    delay:0.75,
    top: "50%",
    ease: "power4.inOut",
  });
  gsap.from(".clip-top .marquee-x, .clip-bottom .marquee-x", 5, {
    delay: 1 ,
    left: "100%",
    ease: "power3.inOut",
  });
  gsap.from(".clip-center .marquee-x", 5, {
    delay: 1 ,
    left: "-50%",
    ease: "power3.inOut",
  });
  
  gsap.to(".clip-top", 2, {
    delay: 4,
    clipPath: "inset(0 0 100% 0)",
    ease:"power4.inOut",
  });
  
  gsap.to(".clip-bottom", 2, {
    delay: 4,
    clipPath: "inset(100% 0 0 0)",
    ease:"power4.inOut",
  });
  
  gsap.to(".clip-top .marquee-x, .clip-bottom .marquee-x, .clip-center .marquee-x, .marquee-x i", 1, {
    delay: 4,
    opacity: 0,
    ease:"power2.inOut",
  });
  
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

  tl.fromTo(".keterangan",{
    x: "100%",
    opacity: 0
  },{
    duration: 1,
    x: "0%",
    opacity: 1,
    ease: "elastic.out(1, 0.5)",
  });
  
  tl.fromTo(".isi",{
    y: "100%",
    opacity: 0
  },{
    duration: 1,
    y: "0%",
    opacity: 1,
    ease: "power4.inOut",
  },"-=2.5");


  tl.fromTo(".linked",{
    y: "100%",
    opacity: 0
  },{
    duration: 1,
    y: "0%",
    opacity: 1,
    ease: "power4.inOut",
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

  

  tl.fromTo(
    ".cookie-container",
    { scale: 0 },
    { scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5 }
  );
  tl.fromTo(
    ".cookie",
    { opacity: 0, x: -50, rotation: "-45deg" },
    { opacity: 1, x: 0, rotation: "0deg" },
    "<50%"
  );
  tl.fromTo(".text", { x: 30, opacity: 0 }, { x: 0, opacity: 1 }, "<");
  
  //Fading the cookie out
  const button = document.querySelector(".btn-cookie");
  button.addEventListener("click", () => {
    gsap.to(".cookie-container", {
      opacity: 0,
      y: 300,
      duration: 0.75,
      ease: "power1.out"
    });
  });
  
  //cookie jump
  tl.fromTo(
    ".cookie",
    { y: 0, rotation: "0deg" },
    { y: -20, rotation: "-20deg", yoyo: true, repeat: -1 }
  );
  tl.fromTo("#crumbs", { y: 0 }, { y: -20, yoyo: true, repeat: -1 }, "<");
  




//register the plugin (just once)
gsap.config({trialWarn: false});

gsap.set("#star", {scale: 1, autoAlpha: 1});

gsap.to("#star", {
  duration: 5, 
  repeat: -1,
  repeatDelay: 0.6,
  ease: "power1.inOut",
  immediateRender: true,
  motionPath: {
    path: "#path",
    align: "#path",
    alignOrigin: [0.5, 0.5],
    autoRotate: 45
  }
});



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

