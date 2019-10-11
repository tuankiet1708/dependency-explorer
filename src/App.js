import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import configureStore, { exposedStore } from "./configureStore";
import {
  LocalizeProvider,
  initialize as initLocale,
  addTranslationForLanguage as addLanguage
} from 'react-localize-redux';

import config from './config/config';
import './config/axios';

import moment from 'moment';
import 'moment/locale/vi';
import 'moment/locale/en-gb';

import SuspenseLoading from './components/SuspenseLoading/SuspenseLoading';
import { currentLocaleSelector } from './selectors/session';
import { LANGUAGES } from './config/constants';
import pushTranslations from './translations/pushTranslations';

// Containers
const MaterialLayout = React.lazy(() => import('./containers/MaterialLayout'));

class App extends Component {
  state = {
    store: configureStore(async () => {
      const {store} = this.state.store;

      // current locale
      const currentLocale = currentLocaleSelector(store.getState());

      // init locale
      store.dispatch(initLocale(
        {
          languages: LANGUAGES,
          options: {
            defaultLanguage: currentLocale,
            renderToStaticMarkup: false
          }
        }
      ));
      // push translations
      pushTranslations(store.dispatch, addLanguage);

      // set locale for momentjs
      currentLocale === 'vi' ? moment.locale('vi') : moment.locale('en-gb');
    })
  }

  render() {
    const {store, persistor} = this.state.store;

    return (
      <Provider store={store}>
        <LocalizeProvider store={store}>
          <PersistGate loading={<SuspenseLoading/>} persistor={persistor}>
            <HashRouter>
              <React.Suspense fallback={<SuspenseLoading/>}>
                <Switch>
                  <Route path="/" name="Home"
                         render={props => <MaterialLayout {...props}/>}
                  />
                </Switch>
              </React.Suspense>
            </HashRouter>
          </PersistGate>
        </LocalizeProvider>
      </Provider>
    );
  }
}

export default hot(App);
