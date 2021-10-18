export interface IProduct {
    name: string;
    url: string;
    productId: string;
}

export interface ProductModel {
    count: number;
    previous: string;
    next: string
    results: IProduct[];
}