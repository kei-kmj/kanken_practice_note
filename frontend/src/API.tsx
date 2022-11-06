
export type Question = {
    category: string;
    description: string
    revel: number;
    questionsId: number;
    question: string;
    note: string;
}

export type Answer = {
    questionsId: number;
    answer:string;
    correctness: boolean
}

export type QuestionsState = Question & {answers: string[]}

export const fetchQuestions = async (revel: number, category: string): Promise<QuestionsState[]> => {
    const endpoint = `https://opentdb.com/api.php?amount=${revel}&difficulty=${category}&type=multiple`
    const data = await (await fetch(endpoint)).json();
    return data.results.map((question: Question) => (
        {
            ...question
        }
    ))}