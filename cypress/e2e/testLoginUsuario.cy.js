describe('Prueba de login', () => {
    it('Debería iniciar sesión con éxito', () => {
      // Visita la página de login
      cy.visit('https://thinking-tester-contact-list.herokuapp.com');
  
      // Encuentra el campo de nombre de usuario e ingresa un valor
      cy.get('#email').type('giovanni@example.com');

      // Encuentra el campo de contraseña e ingresa un valor
      cy.get('#password').type('password123'); 

      // Clic en el botón de inicio de sesión
      cy.get('#submit').click();

      // Verifica que se muestra algún elemento de la página de contactos
      cy.url().should('include', '/contactList');
    });
  });
  