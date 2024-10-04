import { FC } from 'react';
import ClockImage from '../../../../assets/images/main/chart/clock.svg';
import * as St from './schedule-block-style';

interface TextBlockProps {
  title: string;
  info: string;
}

const items: TextBlockProps[] = [
  {
    title:
      'Горячая линия Московской службы психологической помощи населению - 8 (495) 051 (с городского телефона) и 051 (с мобильного телефона)',
    info: 'Режим работы: круглосуточно',
  },
  {
    title:
      'Горячая линия по оказанию психологической помощи студенческой молодежи организованной Минобрнауки России - 8 (800) 222-55-71',
    info: 'Режим работы: круглосуточно',
  },
  {
    title: 'Телефон доверия для детей, подростков и их родителей - 8 (800) 2000-122',
    info: 'Режим работы: круглосуточно',
  },
  {
    title:
      'Горячая линия центра экстренной психологической помощи МЧС России - 8 (495) 989-50-50 (бесплатно по Москве)',
    info: 'Режим работы: круглосуточно',
  },
];

const ItemsBlock: FC<TextBlockProps> = ({ title, info }) => (
  <St.TextBlock>
    <St.TextLine>—</St.TextLine>
    <St.TextList>
      <li>{title}</li>
      <li>
        <St.ListBold>{info}</St.ListBold>
      </li>
    </St.TextList>
  </St.TextBlock>
);

const ChartBlock: FC = () => {
  return (
    <St.Wrapper>
      <St.SpaceBetween>
        <St.TextBlock>
          <St.TextLine>—</St.TextLine>
          <St.Schedule>
            <St.ScheduleTitle>Расписание:</St.ScheduleTitle>
            <St.ScheduleList>
              <li>понедельник - четверг 9:30-18:30</li>
              <li>пятница 9:30-17:15 </li>
              <li>перерыв на обед 13:00-13:45</li>
            </St.ScheduleList>
          </St.Schedule>
        </St.TextBlock>
        <img src={ClockImage} alt="Иллюстрация рядом с расписанием" />
      </St.SpaceBetween>
      <h3>
        <St.TextLineHidden>—</St.TextLineHidden>
        <span>
          В выходные и праздничные дни, ночью, за срочной психологической помощью можно обратиться
          по следующим телефонам:
        </span>
      </h3>
      {items.map((block, index) => (
        <ItemsBlock key={index} title={block.title} info={block.info} />
      ))}
    </St.Wrapper>
  );
};

export default ChartBlock;
