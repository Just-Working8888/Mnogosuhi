export interface ICart {
    id: number
    session_key: string
    created: string
    discount_amount: number
    promo_code: boolean
    items: number[]
}
export interface ICartDto {
    session_key: string
    discount_amount: number
    promo_code: boolean
}