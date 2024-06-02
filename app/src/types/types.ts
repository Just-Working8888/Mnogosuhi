export interface loginValues {
    username: string
    password: string
}

export interface signUpValues extends loginValues {
    confirm_password: string
}
export interface QuestionItem {
    question: string,
    options: string[],
    correctAnswer: string
}
export interface Quetions {
    id: string,
    title: string,
    image: string,
    questions: QuestionItem[]
}


export interface NewsItem {
    href: string,
    title: string,
    avatar: string,
    description: string,
    content: string
}