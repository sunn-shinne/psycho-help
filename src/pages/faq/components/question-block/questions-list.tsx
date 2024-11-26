import { FC } from 'react';
import Question from './question';
import styled from 'styled-components';
import { Tquestion } from '../../constants';

const Wrapper = styled.div`
  border-radius: 0px;
  overflow: hidden;
  height: auto;
  background: transparent;
`;

const QuestionsList = ({
  questions,
}: {
  questions: Array<Tquestion>;
}) => {
  return (
    <Wrapper>
      {questions.map((questionObj) => (
        <Question
          ask={questionObj.ask}
          id={questionObj.id}
          answer={questionObj.answer}
          key={questionObj.id}
        />
      ))}
    </Wrapper>
  );
};

export default QuestionsList;
