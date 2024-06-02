export interface IProduct {
    id: number
    title: string
    description: string
    price: string
    image: string
    iiko_image: string
    sku: string
    created: string
    category: number
}
export interface IProductDto {
    title: string
    description: string
    price: number
    iiko_image: string
    sku: string
    category: number
}