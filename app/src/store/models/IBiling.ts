export interface IBiling {
    billing_receipt_type: string
    delivery_price: string
    address: string
    phone: string
    payment_method: string
    payment_code: string
    note: string
    status: boolean
    
    parent: number | null
}