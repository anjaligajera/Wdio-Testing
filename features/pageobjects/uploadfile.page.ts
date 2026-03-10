import { $ } from '@wdio/globals'

class UploadPage {
    // Selectors
    public get fileInput () { return $('input[type="file"]'); }
    public get uploadButton () { return $('button[type="submit"], input[type="submit"], #fileSubmit'); }
    
    // Actions
    public async open () {
        await browser.url('https://practice.expandtesting.com/upload');
    }

    public async uploadFile (filePath: string) {
        // WebdriverIO provides an `uploadFile` method to safely push the file to the browser
        const remoteFilePath = await browser.uploadFile(filePath);
        await this.fileInput.setValue(remoteFilePath);
    }

    public async submit () {
        await this.uploadButton.click();
    }
}

export default new UploadPage();