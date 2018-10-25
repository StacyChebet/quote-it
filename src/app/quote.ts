export class Quote {
    public showAuthor: boolean;
    constructor (public name: string, public message: string, public author: string) {
        this.showAuthor = false;
    }
}
