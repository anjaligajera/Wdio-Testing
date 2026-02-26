import { $ } from '@wdio/globals';

class DragAndDropPage {
   
    public get boxA () {
        return $('//div[@id="column-a"]');
    }

    public get boxB () {
        return $('//div[@id="column-b"]');
    }

    public get leftBoxHeader () {
        return $('#column-a header');
    }

    public get rightBoxHeader () {
        return $('#column-b header');
    }

    
    public async open () {
        await browser.url('https://practice.expandtesting.com/drag-and-drop');
    }

  
    public async dragLeftToRight () {
        const source = await this.boxA;
        const target = await this.boxB;
        
        
        await source.dragAndDrop(target);
    }
}

export default new DragAndDropPage();