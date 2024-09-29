describe('Logout', () => {
    beforeEach(() => {
        // Visitar la página de inicio de sesión
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');

        // Iniciar sesión con las credenciales
        cy.get('#email').type('giovanni@example.com');
        cy.get('#password').type('password123');
        cy.get('#submit').click();

        // Verificar que estamos en la página de la lista de contactos después de iniciar sesión
        cy.url().should('include', '/contactList');
    });

    it('Deberia desloguear al usuario y redireccionarlo a la pagina /logout', () => {
        // Verificar que el botón de Logout es visible y está habilitado
        cy.get('button').contains('Logout').should('be.visible').and('be.enabled');

        // Hacer clic en el botón de Logout
        cy.get('button').contains('Logout').click();

        // Verificar que la URL cambia a /logout
        cy.url().should('include', '/logout');
    });
});