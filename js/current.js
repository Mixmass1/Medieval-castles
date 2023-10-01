const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.link, .dropdown-menu a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
    console.log(link);
  }
})