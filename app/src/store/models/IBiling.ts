export interface IBiling {
    session_key: string
    billing_receipt_type: string
    total_price: number
    delivery_price: string
    address: string
    phone: string
    payment_method: string
    payment_code: string
    note: string
    status: boolean
    
    parent: number | null
}