import { CSSProperties } from 'react';
import Question from './question';

const styles: { [key in string]: CSSProperties } = {
wrapper: {
	borderRadius: "15px",
	overflow: "hidden",
	height: "auto"
}
}

const QuestionsList = ({
  questions,
}: {
  questions: Array<{ id: number; ask: string; answer: string }>;
}) => {
  return (
    <div style={styles.wrapper}>
      {questions.map((questionObj) => (
        <Question
          ask={questionObj.ask}
          id={questionObj.id}
          answer={questionObj.answer}
          key={questionObj.id}
        />
      ))}
    </div>
  );
};

export default QuestionsList;