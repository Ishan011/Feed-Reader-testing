/* feedreader.js */

$(function() {
    /* This suite is all about the RSS */
    describe('RSS Feeds', function() {
        // TODO: Test to make sure allFeeds variable is defined and no-empty. 
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // TODO: Test to check that allFeeds has defined and non-empty URL
            it('URL is defined',function()
            {
                allFeeds.forEach(function(Feed) {
                	expect(Feed.url).toBeDefined();
                	expect(Feed.url.length).not.toBe(0);
                });
            });

        // TODO: Test to check that allFeeds has defined and non-empty name
            it('name is defined',function()
            {
                allFeeds.forEach(function(Feed) {
                	expect(Feed.name).toBeDefined();
                	expect(Feed.name.length).not.toBe(0);
             });
        });
    });

    // TODO: Test suite ->"The menu"
    describe('The menu',function()
    {
        // TODO: Test to ensure menu is hidden by default
        it('hidden by default',function()
        {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

         // TODO: Test to ensure menu toggle
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

    // TODO:Test suite ->"Initial Entries"
    describe('Initial Entries',function()
    {
        /* TODO:Test to ensure that loadFeed completes work with atleast one
        entry within .feed container
        */
         beforeEach(function(done) {
            loadFeed(0,done);
         });
        
        it('atleast single entry is within feed',function()
        {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
     });

    // TODO:Test suite -> "New Feed Selection" 
    describe('New Feed Selection',function()
    {
        /* TODO:Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        let oldFeed,newFeed;
        
        beforeEach(function(done){
        	loadFeed(0, function(){
                	oldfeed =$('.feed').html();
                	loadFeed(1, function() {
                    		newFeed =$('.feed').html();        
                    		done(); // call done when variables are fed and tests to begin
                	});
            	});
         });
        
         it('check for content changes',function(done) {
            expect(oldFeed !== newFeed).toBe(true);
            done();
         });
    });
}());
