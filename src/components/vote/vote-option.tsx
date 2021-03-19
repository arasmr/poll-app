import { Answer } from "../../interfaces/answer";

interface VoteOptionsProps {
    answer: Answer;
    onOptionSelect: (id: number) => void;
}

export default function VoteOption({
    answer,
    onOptionSelect,
}: VoteOptionsProps): JSX.Element {
    return (
        <div className="vote_option">
            <input type="radio" name="vote_option" onChange={() => onOptionSelect(answer.id)}/>
            <p>{answer.value}</p>
        </div>
    )
}