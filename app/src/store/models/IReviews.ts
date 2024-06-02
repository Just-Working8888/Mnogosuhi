export interface IReviews {
    id: number
    text: string
    stars: number
    created: string
    user: number
    product: number
    user_img: string
    user_username: string
}
export interface IReviewsDto {
    text: string
    stars: string
    user: number
    product: number
}