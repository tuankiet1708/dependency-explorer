import React from 'react';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withLocalize } from 'react-localize-redux';
import { LANGUAGES } from '../../config/constants';
import { currentLocaleSelector } from '../../selectors/session';

function MaterialLanguageSwitcher({setActiveLanguage, currentLocale}) {
  return (
    <Select
      style={{color: "#fff"}}
      value={currentLocale}
      onChange={(event) => setActiveLanguage(event.target.value)}
      inputProps={{
        name: 'name',
        id: 'code',
      }}
    >
      {LANGUAGES.map(({name, code}) => (
        <MenuItem value={code} key={code}>{name}</MenuItem>
      ))}
    </Select>
  );
}

export default withLocalize(connect(
  state => ({
    currentLocale: currentLocaleSelector(state)
  })
)(MaterialLanguageSwitcher));
