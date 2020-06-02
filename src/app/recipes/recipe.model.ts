export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string) {
        // the constructor is a built in function, every class has and which will be executed once you create a new instance of this class
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}
