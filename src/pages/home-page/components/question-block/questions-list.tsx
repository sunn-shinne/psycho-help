import Question from './question';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: 0px;
  overflow: hidden;
  height: auto;
	background: transparent;
`;

const QuestionsList = ({
  questions,
}: {
  questions: Array<{ id: number; ask: string; answer: string }>;
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
