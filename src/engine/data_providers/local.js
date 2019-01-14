import BaseDataProvider from './base';
import * as locations from '../../data/locations';

export default class LocalDataProvider extends BaseDataProvider {
  constructor() {
    super();
    this.locations = locations;
  }
}
