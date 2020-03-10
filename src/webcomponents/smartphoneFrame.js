import {smartphoneTemplate} from '../templates/smartphoneTemplate.js'

class SmartphoneFrame extends HTMLElement {

    constructor(){
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.image_url = this.getAttribute('src')
        this.template = smartphoneTemplate;
    }

    appendImageUrl(){
        this.shadow.querySelector('#target-image').src = this.image_url;
    }

    connectedCallback(){
        const div = document.createElement('div');
        div.style.padding = '10px';
        div.style.background = 'transparent';
        div.innerHTML = this.template;
        this.shadow.appendChild(div);
        this.appendImageUrl()
    }

    static get observedAttributes() {
        return ['image_url'];
    }

    attributeChangedCallback(name, oldValue, newValue){
        if (oldValue !== newValue){
            switch(name){
                case 'image_url':
                    this.image_url = newValue;
                    break
            }
        }
        this.appendImageUrl();
    }

}

customElements.define('smartphone-frame', SmartphoneFrame)

export {SmartphoneFrame};