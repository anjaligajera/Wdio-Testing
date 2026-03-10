import { $ } from '@wdio/globals';

class blogspotpage {
    // Locators
   /* public get title () { return $('//div/h1[normalize-space( )="Automation Testing Practice"]'); }
    public get homeLink () { return $('//a[text()="Home"]'); }
    public get udemyCoursesLink () { return $('//a[text()="Udemy Courses"]'); } 
    public get onlineTrainingsLink () { return $('//a[@ href="https://www.pavanonlinetrainings.com/"]'); }
    public get blogLink () { return $('//a[text()="Blog"]'); }  
    public get playwrightPracticeLink () { return $('//a[contains(text(), "Playwright")]'); }*/


    public async open () {
        await browser.url('https://www.automationtestingpractice.com/');
    }       
}
export default new blogspotpage();