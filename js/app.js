$(document).ready(function(){
    $('.gallerys').magnificPopup({
      type:'image',
      delegate:'a',
      //gallery:{enabled:true}
    });
  });

  AOS.init({
    offset: 90,
    duration: 1000,
  });

  
    document.addEventListener('DOMContentLoaded', function () {
        const swiper = new Swiper('.swiper-container', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 32,
            autoplay: {
                delay: 3000,
            },
            navigation: {
                nextEl: '.next-button',
                prevEl: '.prev-button',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    centeredSlides: true,
                },
                1024: {
                    centeredSlides: false,
                    slidesPerView: 1,
                },
            },
        })
    })

    
    
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");
    const ka = document.querySelector(".hide1");
    const kb = document.querySelector(".hide2");
    const kc = document.querySelector(".hide3");
    const kd = document.querySelector(".hide4");
    const ke = document.querySelector(".hide5");


    // add event listeners
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
    ka.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
    kb.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
    kc.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
    kd.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
    ke.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });



    $(document).ready(function () {
      $('.owl-carousel').owlCarousel({
        //  animateOut: 'zoomOutLeft',
        //  animateIn: 'pulse',
        lazyLoad: true,
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        dotsContainer: false,
        autoplayTimeout: 3000,
        stagePadding: 0,
        dots: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 5
          },
          1000: {
            items: 3
          }
        }
      })
    })

//selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".galleryy .image");

window.onload = ()=>{ //after window loaded
  filterItem.onclick = (selectedItem)=>{ //if user click on filterItem div
    if(selectedItem.target.classList.contains("item")){ //if user selected item has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
      selectedItem.target.classList.add("active"); //add that active class on user selected item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); //getting image data-name value
        //if user selected item data-name value is equal to images data-name value
        //or user selected item data-name value is equal to "all"
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide"); //first remove the hide class from the image
          image.classList.add("show"); //add show class in image
        }else{
          image.classList.add("hide"); //add hide class in image
          image.classList.remove("show"); //remove show class from the image
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
  }
}

function myFunction() {
	
  var x = document.getElementById("adouttext");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  
  
}


 
