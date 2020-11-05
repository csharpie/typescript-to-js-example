class Language {
    name: string;
    origin: string;

    constructor(name: string, origin: string) {
        this.name = name;
        this.origin = origin;
    }
}

export const languages: Language[] = [
    new Language("English", "Germanic"),
    new Language("Spanish", "Romantic"),
    new Language("Mandarin Chinese", "Sinitic"),
    new Language("Arabic", "Semitic")
];