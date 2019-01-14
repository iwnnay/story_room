export default class BaseDataProvider {
  getLocation(name) {
    if (typeof name === 'string') {
      return this.locations[name];
    }
    throw new Error(`We don't current support locations requested like: ${name}`);
  }
}
