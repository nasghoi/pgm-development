function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 90 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 120) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)

  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarMenu = document.querySelector(".navbar ul");
  const navbarLinks = document.querySelectorAll(".navbar a");
  
  navbarToggler.addEventListener("click", navbarTogglerClick);

  function navbarTogglerClick() {
    navbarToggler.classList.toggle("open-navbar-toggler");
    navbarMenu.classList.toggle("open");
  }
  
  navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));
  
  function navbarLinkClick() {
    if(navbarMenu.classList.contains("open")) {
      navbarToggler.click();
    }
  }
  
  const readMoreBtn = document.querySelector(".read-more-btn");  
  const text = document.querySelector(".text");  
  readMoreBtn.addEventListener("click", (e) => { 
    text.classList.toggle("show-more");  
    if (readMoreBtn.innerText === "Baca selanjutnya") {  
      readMoreBtn.innerText = "Baca sebelum";  
    } else {  
      readMoreBtn.innerText = "Baca selanjutnya";  
    }  
  });  
  
