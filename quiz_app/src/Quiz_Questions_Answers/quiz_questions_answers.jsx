import React, { useState } from 'react'
import "../Styling/Quiz_questions_answers.css"

function Quiz_questions_answers() {

    // State for Questions
    let [Questions,SetQuestions] = useState([
        {
           "Question":"Capital of Pakistan is?",
           "Options": ["Islamabad","Lahore","Karachi","Multan"],
           "Correct_Ans" : "Islamabad" 
        },
        {
           "Question":"Who is the Current Prime Minister of Pakistan?",
           "Options": ["Imran Khan","Shehbaz Sharif","Nawaz Sharif","Asif Ali Zardari"],
            "Correct_Ans" : "Shehbaz Sharif" 
        },
        {
            "Question" : "Who is the Current President of Pakistan?",
            "Options" : ["Imran Khan","Shehbaz Sharif","Nawaz Sharif","Asif Ali Zardari"],
            "Correct_Ans" : "Asif Ali Zardari"
        },
        {
            "Question" : "Which City Contains Large Number of Mango Fields?",
            "Options" : ["Islamabad","Lahore","Karachi","Multan"],
            "Correct_Ans" : "Multan"
        },
        {
            "Question" : "Which City Contains Large Number of Orange Fields?",
            "Options" : ["Islamabad","Sargodha","Karachi","Multan"],
            "Correct_Ans" : "Sargodha"
        }
    ]);

    // State for Answers 
    const [Answers, setAnswers] = useState([]);
    // State for Button
    let [Visible,setVisible] = useState(0);
    let [score,setscore] = useState(0);
    
    let add_answers = (index, value) => {
        setAnswers(prev => {
            let updated = [...prev];
            updated[index] = value;
            return updated;
        });
    };


    let handleSubmit = (index) => {
        if (Answers[index] === Questions[index].Correct_Ans) {
            setscore(prev => prev + 1);
        }
        setVisible(index + 1);
    };

    return (
        <>
            {Visible === 0 && (
                <>
                    <div>
                        <h1>Question#1</h1>
                        <h1>{Questions[0].Question}</h1>
                        <div>
                            {Questions[0].Options.map((value,index)=>(
                                <label key={index}>
                                    <input type="radio" name="Question1" value={value} 
                                        checked={Answers[0] === value}
                                        onChange={(e)=> add_answers(0,e.target.value)}
                                    />
                                    {value}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <button onClick={()=> handleSubmit(0)}>Submit Answer</button>
                    </div>
                </>
            )}

            {Visible === 1 && (
                <>
                    <div>
                        <h1>Question#2</h1>
                        <h1>{Questions[1].Question}</h1>
                        <div>
                            {Questions[1].Options.map((value,index)=>(
                                <label key={index}>
                                    <input type="radio" name="Question2" value={value} 
                                        checked={Answers[1] === value}
                                        onChange={(e)=> add_answers(1,e.target.value)}
                                    />
                                    {value}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <button onClick={()=> handleSubmit(1)}>Submit Answer</button>
                    </div>
                </>
            )}

            {Visible === 2 && (
                <>
                    <div>
                        <h1>Question#3</h1>
                        <h1>{Questions[2].Question}</h1>
                        <div>
                            {Questions[2].Options.map((value,index)=>(
                                <label key={index}>
                                    <input type="radio" name="Question3" value={value} 
                                        checked={Answers[2] === value}
                                        onChange={(e)=> add_answers(2,e.target.value)}
                                    />
                                    {value}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <button onClick={()=> handleSubmit(2)}>Submit Answer</button>
                    </div>
                </>
            )}

            {Visible === 3 && (
                <>
                    <div>
                        <h1>Question#4</h1>
                        <h1>{Questions[3].Question}</h1>
                        <div>
                            {Questions[3].Options.map((value,index)=>(
                                <label key={index}>
                                    <input type="radio" name="Question4" value={value} 
                                        checked={Answers[3] === value}
                                        onChange={(e)=> add_answers(3,e.target.value)}
                                    />
                                    {value}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <button onClick={()=> handleSubmit(3)}>Submit Answer</button>
                    </div>
                </>
            )}

            {Visible === 4 && (
                <>
                    <div>
                        <h1>Question#5</h1>
                        <h1>{Questions[4].Question}</h1>
                        <div>
                            {Questions[4].Options.map((value,index)=>(
                                <label key={index}>
                                    <input type="radio" name="Question5" value={value} 
                                        checked={Answers[4] === value}
                                        onChange={(e)=> add_answers(4,e.target.value)}
                                    />
                                    {value}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <button onClick={()=> handleSubmit(4)}>Submit Answer</button>
                    </div>
                </>
            )}

            {/* ✅ Show final score */}
            {Visible === 5 && (
                <div>
                    <h1>Quiz Finished!</h1>
                    <h2>Your Score: {score} / {Questions.length}</h2>
                </div>
            )}
        </>
    )
}

export default Quiz_questions_answers
