
  const header = document.getElementById('header')
  function changeHeaderColorOnScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {

      header.style.backgroundColor = "#dc143c";
    } else {
   
      header.style.backgroundColor = '#000000';
    }
  }
  window.addEventListener('scroll', changeHeaderColorOnScroll);