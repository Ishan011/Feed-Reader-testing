/* feedreader.js */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         	it('URL is defined',function()
         	{
         		allFeeds.forEach(function(Feed) {
            	expect(Feed.url).toBeDefined();
            	expect(Feed.url.length).not.toBe(0);
            	});
         	});


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         	it('name is defined',function()
         	{
     			allFeeds.forEach(function(Feed) {
         		expect(Feed.name).toBeDefined();
            		expect(Feed.name.length).not.toBe(0);
        		});
    		});
	});

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu',function()
    {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. 
         */
    	it('hidden by default',function()
    	{
    		expect($('body').hasClass('menu-hidden')).toEqual(true);
    	});

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */
          it('should toggle menu',function()
          {
         	//click to open the menu
          	$('.menu-icon-link').click();
          	expect($('body').hasClass('menu-hidden')).toBe(false);
        
          	//another click to do the reverse
          	$('.menu-icon-link').click();
          	expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries',function()
    {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         	beforeEach(function(done) {
         	loadFeed(0,done);
        	 });
   	 	
   	 	it('atleast single entry is within feed',function()
   	 	{
   	 		expect($('.feed .entry').length).toBeGreaterThan(0);
   	 	});
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection',function()
    {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

         let previousFeed,currentFeed;

         beforeEach(function(done)
         {
         	loadFeed(1,function() {
         		previousFeed = $('.feed').html();
         		done();
         	});
         	loadFeed(2,function() {
         		currentFeed = $('.feed').html();
         		done();
         	});
         });

         it('check for content changes',function(done) {
         	expect(previousFeed !== currentFeed).toBe(true);
         	done();
         });
    });

}());
