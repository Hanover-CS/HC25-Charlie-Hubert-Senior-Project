import { fromLonLat } from 'ol/proj';
import { map } from './../../main'; // Ensure you are correctly importing the map object

describe('Directions Functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173'); // Visit the page where the map is rendered
    // Ensure the map is fully loaded
    cy.window().should('have.property', 'map');
  });

  it('should display "From" and "To" input fields when "Get Directions" button is clicked', () => {
    const coordinates = [-85.46019170721485, 38.71372325]; // Example coordinates for Brown Campus Center

    cy.window().then((window) => {
      // Wait for the map to be fully available and make sure the event listener is active
      cy.wrap(window.map).should('exist');

      // Get the pixel location from coordinates
      const pixel = map.getPixelFromCoordinate(fromLonLat(coordinates));

      // Simulate a map click event
      const mapEvent = new window.Event('click');
      mapEvent.clientX = pixel[0];
      mapEvent.clientY = pixel[1];

      // Dispatch the click event on the map
      map.getTargetElement().dispatchEvent(mapEvent);
    });

    // Ensure the sidebar is visible after clicking the map
    cy.get('#directions-container').should('be.visible'); 

    // Simulate clicking the "Get Directions" button to show the input fields
    cy.get('#get-directions-button').click();

    // Check that the "From" and "To" inputs are visible
    cy.get('#from-input').should('be.visible');
    cy.get('#to-input').should('be.visible');
  });

  it('should open Google Maps with the correct directions when "Submit" is clicked', () => {
    const coordinates = [-85.46019170721485, 38.71372325]; // Example coordinates for Brown Campus Center

    cy.window().then((window) => {
      // Wait for the map to be fully available
      cy.wrap(window.map).should('exist');

      const pixel = map.getPixelFromCoordinate(fromLonLat(coordinates));

      // Trigger the map click event
      const mapEvent = new window.Event('click');
      mapEvent.clientX = pixel[0];
      mapEvent.clientY = pixel[1];
      map.getTargetElement().dispatchEvent(mapEvent);
    });

    // Ensure the sidebar is visible after clicking the map
    cy.get('#directions-container').should('be.visible');

    // Simulate the user clicking the "Get Directions" button to show the input fields
    cy.get('#get-directions-button').click();

    // Type a location in the "From" and "To" inputs
    const fromLocation = 'Brown Campus Center';
    const toLocation = 'Science Center';

    cy.get('#from-input').type(fromLocation);
    cy.get('#to-input').type(toLocation);

    // Spy on the window.open method to check if it's called correctly
    cy.window().then((window) => {
      cy.stub(window, 'open').as('openStub');
    });

    // Simulate clicking the "Submit" button
    cy.get('#submit-directions-button').click();

    // Assert that window.open was called with the correct Google Maps URL
    cy.get('@openStub').should('have.been.calledOnceWith',
      `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent('38.71372325,-85.46019170721485')}&destination=${encodeURIComponent('38.714097550000005,-85.45825151799684')}`
    );
  });

  it('should show an alert if "From" location is not found', () => {
    const coordinates = [-85.46019170721485, 38.71372325]; // Example coordinates for Brown Campus Center

    cy.window().then((window) => {
      // Ensure the map is available
      cy.wrap(window.map).should('exist');
      
      const pixel = map.getPixelFromCoordinate(fromLonLat(coordinates));

      // Trigger the map click event
      const mapEvent = new window.Event('click');
      mapEvent.clientX = pixel[0];
      mapEvent.clientY = pixel[1];
      map.getTargetElement().dispatchEvent(mapEvent);
    });

    // Ensure the sidebar is visible after clicking the map
    cy.get('#directions-container').should('be.visible');

    // Simulate the user clicking the "Get Directions" button to show the input fields
    cy.get('#get-directions-button').click();

    // Type an invalid location in the "From" input and a valid one in the "To" input
    cy.get('#from-input').type('Non-existent Location');
    cy.get('#to-input').type('Science Center');

    // Stub the window.alert method
    cy.window().then((window) => {
      cy.stub(window, 'alert').as('alertStub');
    });

    // Simulate clicking the "Submit" button
    cy.get('#submit-directions-button').click();

    // Assert that alert was called with the correct message
    cy.get('@alertStub').should('have.been.calledOnceWith', 'The "From" location "Non-existent Location" was not found.');
  });

  it('should show an alert if "To" location is not found', () => {
    const coordinates = [-85.46019170721485, 38.71372325]; // Example coordinates for Brown Campus Center

    cy.window().then((window) => {
      // Ensure the map is available
      cy.wrap(window.map).should('exist');

      const pixel = map.getPixelFromCoordinate(fromLonLat(coordinates));

      // Trigger the map click event
      const mapEvent = new window.Event('click');
      mapEvent.clientX = pixel[0];
      mapEvent.clientY = pixel[1];
      map.getTargetElement().dispatchEvent(mapEvent);
    });

    // Ensure the sidebar is visible after clicking the map
    cy.get('#directions-container').should('be.visible');

    // Simulate the user clicking the "Get Directions" button to show the input fields
    cy.get('#get-directions-button').click();

    // Type a valid location in the "From" input and an invalid one in the "To" input
    cy.get('#from-input').type('Brown Campus Center');
    cy.get('#to-input').type('Non-existent Location');

    // Stub the window.alert method
    cy.window().then((window) => {
      cy.stub(window, 'alert').as('alertStub');
    });

    // Simulate clicking the "Submit" button
    cy.get('#submit-directions-button').click();

    // Assert that alert was called with the correct message
    cy.get('@alertStub').should('have.been.calledOnceWith', 'The "To" location "Non-existent Location" was not found.');
  });
});
