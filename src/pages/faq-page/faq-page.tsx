import QuestionsList from './components/questions-list';
import FaqImage from '../../assets/images/main/faq/shrug_rafiki_1.svg';
import * as St from './faq-page-style';
import { faq } from './constants';

const FaqPage = () => {
  return (
    <St.wrapper>
      <St.header>
        <St.headerContent>
          <St.faqName>
            <St.faq>FAQ</St.faq>
            <St.description>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A enim, ex deleniti expedita
              debitis nisi reiciendis non ipsam earum sit in adipisci ducimus. Vero eveniet a
              pariatur recusandae autem dolor. (описание)
            </St.description>
          </St.faqName>
          <img src={FaqImage} alt="" />
        </St.headerContent>
      </St.header>
      <St.questions>
        <QuestionsList questions={faq} />
      </St.questions>
    </St.wrapper>
  );
};

export default FaqPage;
