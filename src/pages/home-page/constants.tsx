import ConcentrationImage from '../../assets/images/main/reasons/reason_concentration.png';
import FindingYourselfImage from '../../assets/images/main/reasons/reason_finding-yourself.png';
import ProblemSolvingImage from '../../assets/images/main/reasons/reason_problem-solving.png';
import MoodSwingsImage from '../../assets/images/main/reasons/reason_mood-swings.png';
import SelfetimateImage from '../../assets/images/main/reasons/reason_selfetimate.png';
import StressReductionImage from '../../assets/images/main/reasons/reason_stress-reduction.png';
import DegreeImage from '../../assets/images/main/features/feature_degree.png';
import FormatImage from '../../assets/images/main/features/feature_format.png';
import TimeImage from '../../assets/images/main/features/feature_time.png';
import RescheduleImage from '../../assets/images/main/features/feature_reschedule.png';

export const SERVICE_PROPS = [
  'тренинги;',
  'тематические лекции и беседы;',
  'индивидуальное психологическое консультирование;',
  'cоциально-психологическое анкетирование, тестирование и опросы.',
];

export const REASONS_TO_VISIT = [
  { title: 'Помощь в нахождении себя', image: FindingYourselfImage },
  { title: 'Поиск решения в трудный период', image: ProblemSolvingImage },
  { title: 'Преодоление колебаний в настроении', image: MoodSwingsImage },
  { title: 'Повышение самооценки', image: SelfetimateImage },
  { title: 'Повышение концентрации', image: ConcentrationImage },
  { title: 'Снижение уровня стресса', image: StressReductionImage },
];

export const FEATURES_OF_WORK = [
  {
    title: 'График работы',
    image: TimeImage,
    desc: 'Психологическая служба работает в течение всего календарного года, за исключением выходных и государственных праздников',
  },
  {
    title: 'Формат консультаций',
    image: FormatImage,
    desc: 'Консультации проводятся очно и дистанционно с помощью: мобильной связи, мессенджеров, зума, скайпа, электронной почты',
  },
  {
    title: 'Компетентые психологи',
    image: DegreeImage,
    desc: 'Все психологи службы обладают опытом работы и высшим образованием для оказания самой качественной поддержки',
  },
  {
    title: 'Перенос или пропуск консультации',
    image: RescheduleImage,
    desc: 'В случае необходимости переноса консультации, необходимо как можно раньше сообщить об этом сотруднику СПП. Пропуск запланированной консультации без предупреждения не допускается',
  },
];
export const faq = [
  {
    id: 1,
    ask: 'В каком режиме проходят консультации?',
    answer:
      'Консультации проводятся очно в кабинетах службы и дистанционно с помощью: мобильной связи, мессенджеров, зума, скайпа, электронной почты. Они бесплатны и конфиденциальны.',
  },
  {
    id: 2,
    ask: 'Сколько времени длится консультация?',
    answer: 'Длительность заранее запланированной консультации 50 мин. - 1 час.',
  },
  {
    id: 3,
    ask: 'Как отменить или перенести консультацию?',
    answer:
      'При необходимости переноса или отмены консультации, обучающийся обязан предупредить специалиста службы психологической помощи минимум за 1 сутки до запланированной встречи;',
  },
  {
    id: 4,
    ask: 'Можно ли опоздать на консультацию?',
    answer:
      'Можно, но вы должны заблаговременно предупредить сотрудника СПП об опоздании. Если вы опоздали на консультацию на 15 мин. и не предупредили об этом, консультация отменяется.',
  },
  {
    id: 5,
    ask: 'Можно ли получить консультацию вне очереди?',
    answer:
      'Если Вы находитесь в остром, кризисном состоянии, то возможна внеочередная срочная консультация в день обращения продолжительностью от 15 до 30 минут.',
  },
];