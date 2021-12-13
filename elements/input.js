import BaseElement from "../base/base.element.js";
export default class Input extends BaseElement {
    constructor(wdioElement, name) {
        super(wdioElement, name)
    }
    async setValue(value) {
        console.log(`Enter "${value}" into "${this.wdioElement.name} input"`);
        await this.wdioElement.setValue(value);

    }
}