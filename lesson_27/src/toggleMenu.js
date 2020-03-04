const toggleMenu = () => {
  const menu = document.querySelector('menu');
  const actionMenu = (event) => {
    console.log('open');
    menu.classList.toggle('active-menu');
  };

  document.addEventListener('click', (event)=> {
    let target = event.target;
    target = target.closest(".menu");
    if( target ){
      actionMenu(event);
      return false;
    }

    target = event.target;
    target = target.closest(".active-menu");
    if( target ){
      if ( event.target.tagName === 'A' ){
        actionMenu(event);
      }
    } else {
      if( menu.classList.contains('active-menu') ){
        menu.classList.remove('active-menu');
      }
    }
  });
};

export default toggleMenu;