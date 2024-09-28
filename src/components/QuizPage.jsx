import React, { useState, useEffect } from 'react'
import Option from './Option'
import questions from "../../data.json"
import ViewScore from './ViewScore';

const QuizPage = () => {
    const quizzes = questions.data[0]; // Access the first quiz in the data array
    const [quizData, setQuizData] = useState(quizzes);
    const [question, setQuestion] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [showNextQuestion, setShowNextQuestion] = useState(false);
    const [error, setError] = useState(false);
    const [progressBar, setProgressBar] = useState(10);


    useEffect(() => {
        if (quizData && quizData.questions) {
            setQuizData(quizzes);
        }
    }, []);

    let currentQuestion = quizData?.questions?.[question];
    let numberOfQuestions = quizData?.questions?.length || 0;

    const handleSubmit = () => {
        if (selectedAnswer === "") {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 2000);
            return;
        }
    
        if (selectedAnswer === currentQuestion?.answer) {
            setScore(score + 1);
        }
        setShowNextQuestion(true);
        setIsSubmitted(true);
    };
    
    const handleSelectedAnswer = (answer) => {
        setSelectedAnswer(answer);
    };
    
    const handleNextQuestion = () => {
        setIsSubmitted(false);
        setSelectedAnswer("");
        setQuestion(question + 1);
        setProgressBar(progressBar + 10);
        setShowNextQuestion(false);
    };

    return (
        <section>
            {currentQuestion ? (
                <>
                    <div className='grid sm:grid-cols-2 gap-10 items-start'>
                        <div>
                            <p className="font-light">Question {question + 1} of {numberOfQuestions}</p>
                            <h3 className="text-3xl font-semibold">
                                {currentQuestion?.question}
                            </h3>
                            <div className="mt-6 flex h-4 w-full items-center justify-start rounded-full bg-white px-1 xl:w-[465px]">
                                <span
                                    className="h-2 rounded-[104px] bg-black"
                                    style={{ width: `${progressBar}%` }}
                                ></span>
                            </div>
                        </div>

                        <div className='w-full space-y-5'>

                            <ul className='space-y-5'>

                                {currentQuestion?.options.map((option, index) => {
                                    const choice = String.fromCharCode(65 + index); // 65 is the ASCII value for 'A'
                                    const isSelected = selectedAnswer === option;
                                    
                                    return (
                                        <li key={index} onClick={() => handleSelectedAnswer(option)}>
                                            <Option option={choice} answers={option} isSubmitted={isSubmitted} isSelected={isSelected} />
                                        </li>
                                    )
                                })}
                                
                            </ul>

                            {!showNextQuestion ? (
                                <button
                                    className="bg-black w-full text-white py-4 rounded-xl"
                                    onClick={handleSubmit}
                                >
                                    Submit Answer
                                </button>
                            ) : (
                                <button
                                    className="bg-green-500 w-full text-white py-4 rounded-xl"
                                    onClick={handleNextQuestion}
                                >
                                    Next Question
                                </button>
                            )}

                            {error ? (
                                <p className="mt-3 flex items-center justify-center gap-2 text-[18px] text-red sm:text-2xl">
                                    <span className="text-red">Error: </span>
                                    <span>Please select an answer</span>
                                </p>
                            ) : null}

                        </div>
                    </div>
                </>
            ) : (
                
                <ViewScore
                    score={score}
                    numberOfQuestions={numberOfQuestions}
                />
            )}
        </section>
    )
}

export default QuizPage