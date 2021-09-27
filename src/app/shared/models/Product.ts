export class Product{
    productName!:string;
    desc!:string;
    stars: number =0;
    imageUrl!:string;

    constructor(name ='', description = '',  imageUrl = '') {
        this.productName = name;
        this.desc = description;
        this.imageUrl = imageUrl;
}
}