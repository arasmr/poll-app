import { useState } from "react";
import { Answer } from "../../interfaces/answer";
import VoteOption from "./vote-option";
import './vote.scss';

interface VoteListProps {
    answers: Answer[],
    question: string,
    onVoteClick:  (id: number) => void;
}

export default function VoteList({
    answers,
    question,
    onVoteClick,
}: VoteListProps): JSX.Element {
    const [selectedOption, setSelectedOption] = useState<number | undefined>();

    function handleOptionSelect(id: number) {
        setSelectedOption(id);
    }

    return (
        <div className="vote">
            <div className="vote_header">
                <h2>Vote</h2>
                <h5>{question}</h5>
            </div>
            <div className="vote_options">
                {answers.map(answer => <VoteOption key={answer.id} answer={answer} onOptionSelect={handleOptionSelect}/>)}
            </div>
            <button className="vote_button" disabled={!selectedOption || answers.length < 2} onClick={() => selectedOption ? onVoteClick(selectedOption) : undefined}>Vote</button>
        </div>
    )
}