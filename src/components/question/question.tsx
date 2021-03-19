import Input from "../../elements/input/input";
import './question.scss';

interface QuestionProps {
    question: string;
    handleChange: (value: string) => void;
}

export default function Question({
    question,
    handleChange,
}: QuestionProps): JSX.Element {
    return (
        <div className="question">
            <Input
                value={question}
                onChange={handleChange}
            />
        </div>
    )
}