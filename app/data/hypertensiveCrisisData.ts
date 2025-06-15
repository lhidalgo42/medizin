import i18n from '@/src/i18n';
import { FlowNode, FlowConnection } from '@/app/components/FlowDiagram';

export const getHypertensiveCrisisColors = (isDark: boolean) => ({
  title: isDark ? '#004c98' : '#0056b3',
  question: isDark ? '#a0d8f0' : '#b8e2f8',
  yes: isDark ? '#c43434' : '#dc3545',
  no: isDark ? '#e89670' : '#f8a782',
  asymptomatic: isDark ? '#b3d987' : '#c1e5a0',
  headache: isDark ? '#e89670' : '#f8a782',
  treatment: isDark ? '#a0a0a0' : '#cccccc',
  textDark: '#000000',
  textLight: '#ffffff',
  connectionLine: isDark ? '#888888' : '#444444',
  background: isDark ? '#1a1a1a' : '#ffffff'
});

export const getHypertensiveCrisisNodes = (colors: ReturnType<typeof getHypertensiveCrisisColors>): FlowNode[] => [
  {
    id: 'checkOrganDamage',
    title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.checkOrganDamage.title'),
    description: i18n.t('procedures.bloodPressure.hypertensiveCrisis.checkOrganDamage.steps', { returnObjects: true }),
    x: 200,
    y: 50,
    width: 350,
    height: 100,
    color: colors.question
  },
  {
    id: 'yes',
    title: i18n.t('common.yes'),
    x: 555,
    y: 180,
    width: 60,
    height: 40,
    color: colors.yes,
    textColor: '#ffffff'
  },
  {
    id: 'withOrganDamage',
    title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withOrganDamage.title'),
    description: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withOrganDamage.steps', { returnObjects: true }),
    x: 475,
    y: 250,
    width: 220,
    height: 90,
    color: colors.treatment
  },
  {
    id: 'acutePulmonaryEdema',
    title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withOrganDamage.acutePulmonaryEdema.title'),
    x: 470,
    y: 370,
    width: 230,
    height: 60,
    color: colors.treatment
  },
  {
    id: 'aorticDissection',
    title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withOrganDamage.aorticDissection.title'),
    x: 30,
    y: 460,
    width: 200,
    height: 60,
    color: colors.treatment
  },
  {
    id: 'acuteMyocardialInfarction',
    title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withOrganDamage.acuteMyocardialInfarction.title'),
    x: 250,
    y: 460,
    width: 200,
    height: 60,
    color: colors.treatment
  },
  {
    id: 'unstableAngina',
    title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.withOrganDamage.unstableAngina.title'),
    x: 470,
    y: 460,
    width: 200,
    height: 60,
    color: colors.treatment
  },
  {
    id: 'no',
    title: i18n.t('common.no'),
    x: 135,
    y: 180,
    width: 60,
    height: 40,
    color: colors.no
  },
  {
    id: 'asymptomaticPatient',
    title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.asymptomaticPatient.title'),
    x: 40,
    y: 250,
    width: 250,
    height: 60,
    color: colors.asymptomatic
  },
  {
    id: 'headacheOnly',
    title: i18n.t('procedures.bloodPressure.hypertensiveCrisis.headacheOnly.title'),
    x: 40,
    y: 340,
    width: 250,
    height: 150,
    color: colors.headache
  },
];

export const getHypertensiveCrisisConnections = (): FlowConnection[] => [
  { fromId: 'checkOrganDamage', toId: 'yes' },
  { fromId: 'checkOrganDamage', toId: 'no' },
  { fromId: 'yes', toId: 'withOrganDamage' },
  { fromId: 'withOrganDamage', toId: 'acutePulmonaryEdema' },
  { fromId: 'withOrganDamage', toId: 'aorticDissection' },
  { fromId: 'withOrganDamage', toId: 'acuteMyocardialInfarction' },
  { fromId: 'withOrganDamage', toId: 'unstableAngina' },
  { fromId: 'no', toId: 'asymptomaticPatient' },
  { fromId: 'no', toId: 'headacheOnly' },
];