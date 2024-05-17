document.addEventListener('DOMContentLoaded', function() {
    Handlebars.registerPartial('petTable', document.getElementById('pet-table-partial').innerHTML);
    Handlebars.registerPartial('addPetForm', document.getElementById('add-pet-form-partial').innerHTML);

    document.querySelector('nav ul').addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
          event.preventDefault();
          const href = event.target.getAttribute('href');
          if (href === '/user') {
            loadAndRenderTemplate('/api/userRoutes.js', 'users-template', 'users');
          } else if (href === '/pet') {
            loadAndRenderTemplate('/api/petRoutes.js', 'pets-template', 'pets');
          } else if (href === '/index') {
            loadLogin();
          }
        }
      });
});