var dropdowns = document.querySelectorAll('nav ul li');

for (var i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener('mouseenter', function() {
    this.classList.add('hover');
  });
  dropdowns[i].addEventListener('mouseleave', function() {
    this.classList.remove('hover');
  });
}