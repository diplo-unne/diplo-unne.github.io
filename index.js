
document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("nav ul");

  menuToggle.addEventListener("click", function() {
      menu.classList.toggle("active");
  });
});

// pestañas de navegación
function openModule(evt, moduleName) {
  // ocultar todos los módulos
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("container-modulos");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // quitar la clase 'active' de todos los enlaces del menú
  tablinks = document.getElementsByClassName("menu")[0].getElementsByTagName("a");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // mostrar el módulo actual y añadir la clase 'active' al enlace que se ha clicado
  document.getElementById(moduleName).style.display = "block";
  evt.currentTarget.className += " active";
}

// mostrar el módulo 3 por defecto al cargar la página
document.addEventListener("DOMContentLoaded", function() {
  // seleccionar el enlace del módulo de interes
  document.querySelector(".menu a[onclick*='modulo_5']").click();
});

