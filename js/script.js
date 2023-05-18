function preloaderAnimation() {
    const preloader = document.querySelector('.preloader');
    const progressBar = document.querySelector('.progress-bar');
    const progressPercentage = document.querySelector('.progress-percentage');
  
    let loadedCount = 0;
    let totalCount = 0;

    
  
    // Menggunakan GSAP untuk animasi progres saat preloader muncul
    gsap.to(progressBar, { scaleX: 1, duration: 0.2, ease: "power1.inOut" });
  
    // Menghitung jumlah gambar pada halaman
    const images = document.querySelectorAll('img');
    totalCount += images.length;

  
    // Mengupdate persentase progress dan progres bar berdasarkan pembebanan font dan gambar
    function updateProgress() {
      loadedCount++;
      const progress = Math.round((loadedCount / totalCount) * 100);
  
      // Mengupdate persentase progress dan progres bar
      gsap.to(progressBar, { scaleX: progress / 100, duration: 0.3, ease: "power1.inOut" });
      gsap.to(progressPercentage,{text:`${progress}%`, duration:0.5, ease: "power4.inOut"});
      //progressPercentage.textContent = `${progress}%`;
      //console.log(progress);
      //console.log('Load '+loadedCount);
      //console.log(totalCount);
  
      // Ketika semua font dan gambar telah selesai dimuat
      if (loadedCount === totalCount) {

        completeLoading();
      }
    }
  
    // Memuat font dan gambar
  
    Array.from(images).forEach((image) => {
      if (image.complete) {
        updateProgress();
      } else {
        image.addEventListener('load', updateProgress);
        image.addEventListener('error', updateProgress);
      }
    });
  
    function completeLoading() {
      // Menggunakan GSAP untuk animasi progres saat semua font dan gambar selesai dimuat
      
      gsap.to(progressBar, { scaleX: 1, duration: 0.5, ease: "power1.inOut", onComplete: removePreloader });
      
      //progressPercentage.textContent = `100%`;
    }
  
    function removePreloader() {
      // Menggunakan GSAP untuk animasi preloader sebelum dihapus dari DOM
      gsap.to(preloader, { opacity: 0, duration: 0.5, onComplete: () => preloader.remove() });
    }
  }
  
  // Panggil fungsi preloaderAnimation saat halaman selesai dimuat
  window.addEventListener('load', preloaderAnimation);
  
  
  

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,

        },
        600:{
            items:2,

        },
        1000:{
            items:3,

        }
    }
})

var btn = $('.btn');

btn.on('click', function() {
  $(this).toggleClass('active not-active');
});





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

