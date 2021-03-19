import { Answer } from "../../interfaces/answer";
import Answers from "../answers/answers";
import Question from "../question/question";
import './questionnaire.scss';

interface QuestionnaireProps {
    question: string,
    answers: Answer[],
    addAnswer: (value: string) => void;
    updateAnswer: (value: string, id: number) => void;
    deleteAnswer: (id: number) => void;
    handleQuestionChange: (value: string) => void;
    resetPoll: () => void;
}

export default function Questionnaire({
    question,
    answers,
    addAnswer,
    updateAnswer,
    deleteAnswer,
    handleQuestionChange,
    resetPoll,
}: QuestionnaireProps):JSX.Element {
    return (
        <div className="questionnaire">
            <h2>Create Poll</h2>
            <div className="questionnaire_container">
                <Question 
                    question={question} 
                    handleChange={handleQuestionChange}
                />
                <Answers 
                    addAnswer={addAnswer} 
                    answers={answers} 
                    updateAnswer={updateAnswer} 
                    deleteAnswer={deleteAnswer}
                    disableForm={!question.length}
                />
                {question && answers.length < 2 && (
                    <p className="error">Please provide at least 2 answers</p>
                )}
                {!question.length && (
                    <p className="error">Please provide a question</p>
                )}
            </div>
            <div className="questionnaire_count">
                <p>{answers.length} / 10 answers</p>
                <button onClick={() => resetPoll()}>Reset</button>
            </div>
        </div>
    )
}