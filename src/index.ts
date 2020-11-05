import { Person } from "./person";

class Index {
    greetMeOnClick(): void {
        const fullNameEntered = this.fullNameInput.value;
        const selectedLanguage = this.languageDropDownList.selectedOptions[0].value;

        const person = new Person(fullNameEntered);
        const greeting = person.greetMeInMyLanguage(selectedLanguage);

        this.greetingH3.innerText = greeting;
    }

    constructor(
        private greetingH3: HTMLHeadingElement,
        private fullNameInput: HTMLInputElement,
        private languageDropDownList: HTMLSelectElement,
        private greetMeButton: HTMLButtonElement
    ) {
        this.greetMeButton.addEventListener('click', this.greetMeOnClick.bind(this), false);
  }  
}

const greetingH3: HTMLHeadingElement =
    document.getElementById('greeting') as HTMLHeadingElement;
const fullNameInput: HTMLInputElement =
    document.getElementById('fullName') as HTMLInputElement;
const languageDropDownList: HTMLSelectElement = 
    document.getElementById('language') as HTMLSelectElement;
const greetMeButton: HTMLButtonElement =
    document.getElementById('greetMe') as HTMLButtonElement;
        
if (languageDropDownList) {
    new Index(greetingH3, fullNameInput, languageDropDownList, greetMeButton)
}

