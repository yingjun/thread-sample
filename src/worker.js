import { expose } from 'threads/worker';
import config from './config';

expose(function add(a, b) {
  return a + b + config.NOW;
});
