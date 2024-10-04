import HumanImage from '../../../../assets/images/main/can-sign-in/human.svg';
import PcImage from '../../../../assets/images/main/can-sign-in/pc.svg';
import * as St from './can-sign-in-block-style';

const CanSignInBlock = () => {
  const renderTextBlock = (title: string, items: string[], imageSrc?: string) => (
    <St.TextBlock>
      <h3>
        <St.TextLine>—</St.TextLine>
        {title}
      </h3>
      <St.MainInfo>
        <St.MainList>
          {items.map((item, index) => (
            <St.ListItem key={index}>{item}</St.ListItem>
          ))}
        </St.MainList>
        {imageSrc && <St.Image src={imageSrc} alt="Иллюстрация рядом с записью"></St.Image>}
      </St.MainInfo>
    </St.TextBlock>
  );

  return (
    <St.Wrapper>
      {renderTextBlock(
        'через форму вконтакте',
        [
          'Войдите в группу СПП в ВК — vk.com/spp_polytech',
          'Внимание! Обязательно дождитесь звонка специалиста и подтверждения записи на консультацию.',
        ],
        HumanImage,
      )}
      {renderTextBlock(
        'по электроноой почте',
        [
          'Чтобы отправить письмо психологу, укажите Ф.И.О., группу (место работы) и ваш контактный телефон, по которому, в случае необходимости, можно с вами связаться.',
          'Для получения компетентного ответа психолога, лаконично, но информативно, опишите свою проблему (что беспокоит вас в данный момент с учетом «контекста ситуации»).',
          'Сформулируйте вопрос (запрос), который хотите задать психологу.',
          'Письмо рассматривается в течение 2-4 дней.',
          'Будьте внимательны! Ответ отправляется на указанную вами почту.',
        ],
        PcImage,
      )}
      {renderTextBlock('по телефону: +7 (495) 223-05-23', [])}
    </St.Wrapper>
  );
};

export default CanSignInBlock;
