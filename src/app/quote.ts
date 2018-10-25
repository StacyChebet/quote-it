export class Quote {
    public showName: boolean;
    public showAuthor: boolean;
    constructor (public name: string, public message: string, public author: string) {
        this.showName = false;
        this.showAuthor = false;
    }
}
