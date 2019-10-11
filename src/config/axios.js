import axios from 'axios';
import config from './config';

axios.defaults.timeout = config.networkTimeout;
