import { useState, CSSProperties } from 'react';
import buttonImage from '../../../assets/images/main/question/button.svg';
import ActivebuttonImage from '../../../assets/images/main/question/active-button.svg';

const Question = ({ id, ask, answer }: { id: Number; ask: string; answer: string }) => {
  const [isActive, setActive] = useState(false);

  function OnClick() {
    setActive((isActive) => !isActive);
  }

  const styles: { [key in string]: CSSProperties } = {
    wrapper: {
      width: '100%',
      height: 'auto',
      padding: 20,
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 1440,
      margin: 'auto',
    },
    ask: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: isActive ? '#5E8BF4' : 'black',
    },
    button: {
      borderRadius: '50%',
      height: 34,
      width: 34,
      backgroundImage: `url(${isActive ? ActivebuttonImage : buttonImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      marginRight: 'calc((1vh + 1vw) / 2)',
    },

    answer: {
      marginLeft: 'calc((1vh + 1vw) / 2 + 34px)',
    },
    p: {
      wordBreak: 'break-word',
      flexGrow: 1,
      width: '100%',
      whiteSpace: 'pre-wrap',
    },
  };

  return (
    <div style={styles.wrapper} onClick={OnClick}>
      <div style={styles.ask}>
        <div style={styles.button}></div>
        <p style={styles.p}>{ask}</p>
      </div>
      {isActive && <p style={styles.answer}>{answer}</p>}
    </div>
  );
};

export default Question;
