import { $, browser } from '@wdio/globals'

class UploadPage {
    // ---- Locators ----
    public get inputFile() { return $('input[type="file"]'); }
    public get btnUpload() { return $('button=Upload'); } // Finds the button containing the exact text 'Upload'
    
    // ---- Actions ----
    public async open() {
        await browser.url('https://practice.expandtesting.com/upload');
        await browser.maximizeWindow();
    }

    public async uploadFile(localFilePath: string) {
        // 1. Upload the local file to the browser's context
        const remoteFilePath = await browser.uploadFile(localFilePath);
        
        // 2. Make sure the input exists
        await this.inputFile.waitForExist();
        
        // 3. Set the remote file path as the value of the file input
        await this.inputFile.setValue(remoteFilePath);
    }

    public async clickUpload() {
        await this.btnUpload.waitForClickable();
        await this.btnUpload.click();
    }
}

export default new UploadPage();