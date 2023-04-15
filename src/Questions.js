import { useState, useEffect } from 'react';
import QuestionType from "./QuestionType";

function getPossibleAnswers(q) {
    return q.incorrect_answers.concat(q.correct_answer).sort( () => .5 - Math.random() );
}

export const convertQuestion = (q) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = q;
    return textArea.value;
}

function Questions(props) {
    let [showAnswer, setShowAnswer] = useState(false);
    let [possible, setPossible] = useState(props.quest.incorrect_answers);
    const question = convertQuestion(props.quest.question);
    const qtype = props.quest.type;
    const answer = convertQuestion(props.quest.correct_answer);

    useEffect(() => {
        setPossible(getPossibleAnswers(props.quest));
        setShowAnswer(false);
    }, [props]);

    return (
        <div className="Questions my-3">
            <div className="flex justify-center mb-4">
                <div className="questionDiv border-white border-2 text-left p-5 rounded-md">
                    <h2 className="text-xl mb-2">{question}</h2>
                        <QuestionType type={qtype} options={possible}/>
                    <div className="flex justify-center">
                        <p className={showAnswer ? null : "hidden"}><b>{answer}</b></p>
                    </div>
                    <div className="flex justify-center">
                        <button className="mt-2 text-lg bg-zinc-700 rounded-lg p-1"
                            onClick={() => {
                                setShowAnswer(!showAnswer);
                            }}>
                                Show Answer
                            </button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Questions;