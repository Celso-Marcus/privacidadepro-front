export interface Quiz {
    id: string;
    result: string;
    answers: string;
    userId: string;
    createdAt: Date;
}

export interface CreateQuiz {
    result: string;
    answers: string;
}

