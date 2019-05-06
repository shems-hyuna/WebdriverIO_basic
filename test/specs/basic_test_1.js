const expect = require( 'chai' ).expect; 


describe ( 'WebdriverIO test', function(){ 
    // Scenario('test 1', function(){ 
    it('test 1', function(){     
        // Given( 'the site navigates to the given url', function ()  
        // {
        browser.url( 'https://yahoo.com' );
        // });
        
        
        
        // Then( 'the title is yahoo', function ()  
        // {
            let title = browser.getTitle();
            expect(title).to.equal( 'Yahoo' );
            // });
            
    });         
                
});
            
            
describe ( 'WebdriverIO test', function(){ 
    it('test 1', function(){ 
        browser.url( 'https://google.com' );
        let title = browser.getTitle();
        expect(title).to.equal( 'Google' );
        browser.cl
    });

});