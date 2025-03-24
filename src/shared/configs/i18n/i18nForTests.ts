import i18n from './i18n';

const newInstance = i18n.createInstance(
  {
    lng: 'ru',
    fallbackLng: 'ru',
    ns: ['file1', 'file2'],
    defaultNS: 'file1',
    debug: true,
  },
  (err, t) => {
    if (err) return console.log('something went wrong loading', err);
    t('key'); // -> same as i18next.t
  },
);

export default newInstance;
