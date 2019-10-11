const pushTranslations = (dispatch, addLanguage) => {
  // English
  dispatch(addLanguage({
    common: require('./en/common.json'),
    welcome: require('./en/welcome.json'),
    dashboard: require('./en/dashboard.json'),
  }, 'en'));

  // Vietnamese
  dispatch(addLanguage({
    common: require('./vi/common.json'),
    welcome: require('./vi/welcome.json'),
    dashboard: require('./vi/dashboard.json'),
  }, 'vi'));
}

export default pushTranslations;
