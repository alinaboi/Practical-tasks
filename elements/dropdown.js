import BaseElement from "../base/base.element.js";
import Button from "./button.js";

export default class Dropdown extends BaseElement {
    async open() {
        await this.wdioElement.click()
    }
    async select(option) {
        await this.open();
        await new Button($(`//*[@class="mat-option-text"][contains(text(),"${option}")]`), `Select option: "${option}"`).click();
    }
    async selectNumber(option) {
        await this.open();
        await new Button($(`//*[@class="ng-star-inserted"][contains(text(),"${option}")]`), `Select option: "${option}"`).click();
    }
}