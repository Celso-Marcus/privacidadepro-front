export interface Quiz {
    id: string;
    result: string;
    answers: string;
    userId: string;
    createdAt: Date;
}

export interface createQuiz {
    result: string;
    answers: string;
    userId: string;
}

