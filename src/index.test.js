import {expect} from 'chai';
import jsdom from 'jsdom';
import fs  from 'fs';


// describe a test which is named here "Our first test and "
//and provide it a function
describe('Our first test',()=>{
    //add a test
   	it('should pass',()=>{
			//body of a test
			expect(true).to.equals(true);
		});
});


describe('index.html',()=>{

	it('should say hello',(done)=>{
      const index= fs.readFileSync('./src/index.html','utf-8');
      jsdom.env(index,(err,window)=>{

				const h1 = window.document.getElementsByTagName('h1')[0];
	 			expect(h1.innerHTML).to.equal("Hello world!");
        done();
				window.close();
			});
	});

});
