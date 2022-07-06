import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import Question from "../../components/Question/Question";
import styled from 'styled-components';

const QuizConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Poppins", sans-serif;
  `
const Subtitle = styled.div`
  font-size: 25px;
  border: 1px solid black;
  box-shadow: 4px 4px 2px black;
  padding: 5px 10px;
  `
const QuizInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  margin: 10px;
  `
  

const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  console.log(questions);

  // Random questions changes
  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <QuizConatiner>
      <Subtitle>Welcome, {name}</Subtitle>

      {questions ? (
        <>
          <QuizInfo>
            <span>{questions[currQues].category}</span>
            <span>
              {questions[currQues].difficulty}
              <br />
              Score : {score}
            </span>
          </QuizInfo>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        // loading 
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </QuizConatiner>
  );
};

export default Quiz;
