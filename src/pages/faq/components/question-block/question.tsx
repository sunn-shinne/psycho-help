import { useState, CSSProperties, FC } from 'react';
import buttonImage from '../../../../assets/images/main/question/button.svg';
import ActivebuttonImage from '../../../../assets/images/main/question/active-button.svg';
import { Tquestion } from '../../constants';

const Question: FC<Tquestion> = ( props ) => {
  const [isActive, setActive] = useState(false);

  function OnClick() {
    setActive((isActive) => !isActive);
  }

  const styles: { [key in string]: CSSProperties } = {
    wrapper: {
      width: '100%',
      height: 'auto',
      marginTop: `${props.id === 1 ? '0' : 'calc((1vh + 1vw) / 4)'}`,
      padding: '0 calc((1vh + 1vw) / 2)',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
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
        <p style={styles.p}>{props.ask}</p>
      </div>
      {isActive && <p style={styles.answer}>{props.answer}</p>}
    </div>
  );
};

export default Question;
