import React, { useEffect, useState } from 'react';
import './App.scss';
import Chart from './components/chart/chart';
import Questionnaire from './components/questionnaire/questionnaire';
import VoteList from './components/vote/vote-list';
import { Answer } from './interfaces/answer';

function App() {
    const [question, setQuestion] = useState<string>('');
    const [answers, setAnswers] = useState<Answer[]>([] as Answer[]);
    const [labels, setLabels] = useState<string[]>([]);
    const [data, setData] = useState<number[]>([]);

    useEffect(() => {
        // refresh the chart after each change of answers
        setLabels([]);
        setData([]);
        answers.forEach(answer => {
            setLabels((previousLabel) => [...previousLabel, answer.value]);
            setData((previousData) => [...previousData, answer.vote]);
        })
    }, [answers]);

    function addAnswer(value: string) {
        const answer = {
            id: answers.length + 1,
            value: value,
            vote: 0,
        } as Answer;

        setAnswers((previousAnswers) => [...previousAnswers, answer]);
    }

    function updateAnswer(value: string, id: number) {
        const oldAnswers = [...answers];

        const newAnswers = oldAnswers.map(answer => {
            if (answer.id === id) {
                answer.value = value;
            }

            return answer;
        })

        setAnswers(newAnswers);
    }

    function deleteAnswer(id: number) {
        setAnswers(answers.filter(answer => answer.id !== id));
    }

    function handleQuestionInputChange(value: string) {
        setQuestion(value);
    }

    function handleVoteClick(id: number) {
        const oldAnswers = [...answers];

        const newAnswers = oldAnswers.map(answer => {
            if (answer.id === id) {
                answer.vote = answer.vote + 1;
            }

            return answer;
        })

        setAnswers(newAnswers);
    }

    // reset all the fields
    function resetPoll() {
        setQuestion('');
        setAnswers([]);
        setLabels([]);
        setData([]);
    }

    return (
        <div className="poll">
            <Questionnaire
                question={question}
                handleQuestionChange={handleQuestionInputChange}
                answers={answers}
                addAnswer={addAnswer}
                updateAnswer={updateAnswer}
                deleteAnswer={deleteAnswer}
                resetPoll={resetPoll}
            />
            <VoteList
                answers={answers}
                question={question}
                onVoteClick={handleVoteClick}
            />
            <Chart
                labels={labels}
                data={data}
                question={question}
            />
        </div>
    );
}

export default App;
