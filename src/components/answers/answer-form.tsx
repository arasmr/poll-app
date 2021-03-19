import { useState } from "react";
import Input from "../../elements/input/input";

interface AnswerFormProps {
    addAnswer: (value: string) => void;
    disableForm: boolean;
}

export default function AnswerForm({
    addAnswer,
    disableForm,
}: AnswerFormProps) {
    const [answer, setAnswer] = useState<string>('');

    function handleInputChange(value: string) {
        setAnswer(value);
    }

    function handleOnClick(e: React.MouseEvent<HTMLElement>) {
        e.preventDefault();

        if(answer.length < 1) {
            return;
        }

        addAnswer(answer);
        setAnswer('');
    }

    return (
        <form className="answers_form">
            <Input
                onChange={handleInputChange}
                value={answer}
                disabled={disableForm}
            />
            <button type="submit" disabled={!answer.length} onClick={(e) => handleOnClick(e)}>Add</button>
        </form>
    )
}