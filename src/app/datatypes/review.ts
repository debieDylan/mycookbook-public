export interface ReviewI {
    id: string
    userId: string
    description: string
    rating: number
    displayName: string
    date: Date
}

export class Review implements ReviewI {
    id: string
    userId: string
    description: string
    rating: number
    displayName: string
    date: Date

    constructor(review: ReviewI) {
        Object.assign(this, review)
    }
}