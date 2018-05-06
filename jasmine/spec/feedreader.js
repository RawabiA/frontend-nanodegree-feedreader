/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL defined', function() {
            allFeeds.forEach(function(feed) {
                expect('feed.url').toBeDefined();
                expect(feed.url.length).not.toBe(0);

            });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Name defined', function() {
            allFeeds.forEach(function(feed) {
                expect('feed.name').toBeDefined();
                expect(feed.name.length).not.toBe(0);

            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('ensures the menu is hidden', function() {
            //The .hasClass() method will return true if the class is assigned to an element
            //https://api.jquery.com/hasclass/
            expect($("body").hasClass("menu-hidden")).toBe(true);            
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('the menu display and hide when clicked again', function() {
            //https://devhints.io/jasmine
            //menu display when clicked
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            //menu hide when clicked again
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
            
          });
    });


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function( done ) {
            loadFeed(0, done);
        });

        it('container has at least a single entry element', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0); //https://devhints.io/jasmine

        });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        var currentFeed,
            nextFeed;

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        beforeEach(function(done){
            loadFeed(0, function() {
                currentFeed= $('.feed').html();
                loadFeed(1, done);

            });
            done();
        });
        
        // to ensure the content is change
        it('ensures feed is loaded and content changes', function(done) {
            nextFeed = $('.feed').html();
            expect(currentFeed).not.toEqual(nextFeed);
            done();
        });

    });

}());
