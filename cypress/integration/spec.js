describe('/', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', 'Great success!')
	});

	it('navigates to /designers', () => {
		cy.get('nav a').contains('DESIGNERS').click();
		cy.url().should('include', '/designers');
	});

	it('navigates to /clothing', () => {
		cy.get('nav a').contains('CLOTHING').click();
		cy.url().should('include', '/clothing');
	});

	it('navigates to /shoes', () => {
		cy.get('nav a').contains('SHOES').click();
		cy.url().should('include', '/shoes');
	});

	it('navigates to /bags', () => {
		cy.get('nav a').contains('BAGS').click();
		cy.url().should('include', '/bags');
	});

	it('navigates to /accessories', () => {
		cy.get('nav a').contains('ACCESSORIES').click();
		cy.url().should('include', '/accessories');
	});

	it('navigates to /communities', () => {
		cy.get('nav a').contains('COMMUNITIES').click();
		cy.url().should('include', '/communities');
	});

	it('navigates to /blog', () => {
		cy.get('nav a').contains('BLOG').click();
		cy.url().should('include', '/blog');
	});
});

describe('/designers', () => {
	beforeEach(() => {
		cy.visit('/designers')
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', 'Designers');
	});
});