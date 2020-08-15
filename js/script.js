  // Pre loader
  $(document).ready(function() {
    // Fakes the loading setting a timeout
      setTimeout(function() {
          $('body').addClass('loaded');
      }, 900);
   
  });
  
  // Efecto de fondo
  $('.mouse-parallax').on('mousemove', (e) => {
    const x = e.pageX / $(window).width()
    const y = e.pageY / $(window).height()
    
    $('.mouse-parallax__background').css('transform', 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)')
    
    $('.mouse-parallax__content').css('transform', 'translate(-' + x * 0 + 'px, -' + y * 0 + 'px)')
  })

  // Menu
  const app = (() => {
    let body;
    let menu;
    let menuItems;
  
    const init = () => {
      body = document.querySelector('body');
      menu = document.querySelector('.menu-icon');
      menu_svg = document.querySelector('.menu-icon-svg-cont');
      menuItems = document.querySelectorAll('.nav__list-item');
  
      applyListeners();
    };
  
    const applyListeners = () => {
      menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
      menu_svg.addEventListener('click', () => toggleClass(body, 'nav-active'));
    };
  
    const toggleClass = (element, stringClass) => {
      if (element.classList.contains(stringClass))
      element.classList.remove(stringClass);else
  
      element.classList.add(stringClass);
    };
  
    init();
  })();

  