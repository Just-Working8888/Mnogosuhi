export interface loginValues {
    username: string
    password: string
}

export interface signUpValues extends loginValues {
    confirm_password: string
}
// {
//     "id": "1",
//         "title": "Geography",
//             "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-75qSBNjrnHdEIXWBlf68q5XJp0apsxKktHhqbB_g_A&s",
//                 "questions": [
//                     {
//                         "question": "What is the capital of France?",
//                         "options": [
//                             "Paris",
//                             "London",
//                             "Berlin",
//                             "Rome"
//                         ],
//                         "correctAnswer": "Paris"
//                     },
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