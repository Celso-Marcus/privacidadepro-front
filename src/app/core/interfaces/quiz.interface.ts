export interface Quiz {
    id: string;
    result: string;
    answers: string;
    userId: string;
    dpoName: string;
    createdAt: Date;
}

export interface CreateQuiz {
    result: string;
    answers: string;
    dpoName: string;
    createdAt: Date;
}

