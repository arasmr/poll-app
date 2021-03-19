import Input from "../../elements/input/input";
import { Answer } from "../../interfaces/answer";

interface AnswersListProps {
    answers: Answer[];
    updateAnswer?: (value: string, id: number) => void;
    deleteAnswer?: (id: number) => void;
}

export default function AnswersList({
    answers,
    updateAnswer,
    deleteAnswer,
}: AnswersListProps) {
    
    function handleOnChange(value: string, id: number) {
        if(updateAnswer) updateAnswer(value, id);
    }

    return (
        <div className="answers_list">
            {answers.map((answer, index) => (
                <div className="answers_item" key={index}>
                    <Input
                        value={answer.value}
                        onChange={(value) => handleOnChange(value, answer.id)}
                    />
                    {deleteAnswer && (
                        <button onClick={() => deleteAnswer(answer.id)}>x</button>
                    )}
                </div>
            ))}
        </div>
    )
}