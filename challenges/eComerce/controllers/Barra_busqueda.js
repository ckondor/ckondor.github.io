$(document).ready(() => {
    $('#busqueda-formulario').submit((event) => {
      console.log('submit');
      event.preventDefault();
      const busqueda = $('.campo-busqueda').val();
      let resultadosBusqueda = $('.resultados-busqueda');
      if (resultadosBusqueda.length === 0) {
        // Crear elemento contenedor si no existe
        resultadosBusqueda = $('<div>').addClass('resultados-busqueda');
      } else {
        // Vaciar elemento contenedor si ya existe
        resultadosBusqueda.empty();
      }
      $.ajax({
        url: 'http://127.0.0.1:5500/challenges/eComerce/navigation/',
        success: (data) => {
          $(data).find(':contains(' + busqueda + ')').each((index, element) => {
            const container = $(element).closest('.container');
            const containerNombre = container.find('.titulo h2').text();
            const enlace = $('<a>').text(containerNombre).attr('href', '#' + container.attr('id')).click((event) => {
              event.preventDefault();
              $('html, body').animate({
                scrollTop: $(event.target.hash).offset().top
              }, 1000);
            });
            // Agregar elementos <a> al elemento contenedor
            resultadosBusqueda.append(enlace);
          });
          // Agregar elemento contenedor a la página después del elemento "barra-busqueda"
          resultadosBusqueda.appendTo($('#busqueda-formulario').parent());
        }
      });
      
    });
  });