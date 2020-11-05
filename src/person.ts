import { languages } from './languages';

export class Person {
    private languages: any[] = languages;
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greetMeInMyLanguage(languageName?: string): string {
        const language = this.languages.find(l => l.name.toUpperCase() === languageName);
        
        switch(language.name.toUpperCase()) {
            case "ENGLISH": {
                return `Hello ${this.name}`;
            }
            case "SPANISH": {
                return `Hola ${this.name}`;
            }
            case "MANDARIN CHINESE": {
                return `你好 ${this.name}`;
            }
            case "ARABIC": {
                return `${this.name} مرحبا`;
            }
            default:
                return '404';
        }

    }
}