export default class BaseElement {
    constructor (wdioElement, name) {
        this.wdioElement = wdioElement;
        this.name = name;

    }
    
    async click(wdioElement) {
        console.log(`Click on the element "${this.name}"`);
        await this.wdioElement.click();
    }
    async isExisting(){
        return await this.wdioElement.isExisting();
    }
    async waitForDisplayed() {
        await this.wdioElement.waitForDisplayed({ timeout: 10000 });
    }
}
