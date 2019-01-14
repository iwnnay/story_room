import BaseDataProvider from './base';
import locations from '../../data/locations';

export default class LocalDataProvider extends BaseDataProvider {
  constructor() {
    super();
    this.locations = locations;
  }
}
