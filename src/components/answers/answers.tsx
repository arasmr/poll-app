import { Answer } from "../../interfaces/answer";
import AnswerForm from "./answer-form";
import AnswersList from "./answers-list";
import './answers.scss';

interface AnswersProps {
    answers: Answer[];
    addAnswer: (value: string) => void;
    updateAnswer: (value: string, id: number) => void;
    deleteAnswer: (id: number) => void;
    disableForm: boolean;
}

export default function Answers({
    answers,
    addAnswer,
    updateAnswer,
    deleteAnswer,
    disableForm,
}: AnswersProps) {
    return (
        <div className="answers">
            <AnswersList answers={answers} updateAnswer={updateAnswer} deleteAnswer={deleteAnswer}/>
            {answers.length < 10 && (
                <AnswerForm addAnswer={addAnswer} disableForm={disableForm}/>
            )}
        </div>
    )
}