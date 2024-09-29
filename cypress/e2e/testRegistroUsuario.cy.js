describe('Registro usuario', () => {
  it('se deberia registrar correctamente un nuevo usuario', () => {
    //acceder a la pagina
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/')

    //acceder al sing up
    cy.get('#signup').click();


    //completar el registro de usuario, los # SON LOS ID
    cy.get('#firstName').type('TestFirstName');
    cy.get('#lastName').type('TestLastName');
    cy.get('#email').type('giovanni1@example.com');
    cy.get('#password').type('password123');

    //enviar el registro
    cy.get('#submit').click();

    //verificar si fue exitoso
    cy.contains('Contact List').should('be.visible');
  })

  it('Deberia mostrar error al enviar el formulario con una contraseña de longitud menor a 7', () => {
    
    //acceder a la pagina de registro de usuario
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser')

    //completa el formulario de registro con una contraseña menor a 7 digitos
    cy.get('#firstName').type('TestFirstName');
    cy.get('#lastName').type('TestLastName');
    cy.get('#email').type('giovanni@example.com');
    cy.get('#password').type('123');

    //enviar formulario
    cy.get('#submit').click();

    //verificar si muestra un error
    cy.get('#error').should('be.visible')
  });


  it('Debe mostrar un error cuando el nombre está vacío', () => {
    // Visitar la página de registro
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser');
    
    // Rellenar los campos de email y contraseña
    cy.get('#lastName').type('Pelegrina');
    cy.get('#email').type('theopelegrina@gmail.com');
    cy.get('#password').type('contraseña123');

    // Dejar vacío el campo de nombre y hacer submit
    cy.get('button[type="submit"]').click();

    // Verificar que aparece el mensaje de error
    cy.contains('User validation failed: firstName: Path `firstName` is required.').should('be.visible');
  });

})