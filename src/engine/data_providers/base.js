export default class BaseDataProvider {
  getLocation(name) {
    if (typeof name === 'string') {
      if (!this.locations || this.locations.length === 0) {
        throw new Error('Location data could not be found');
      }

      const data = this.locations.find(l => l.name === name);
      if (!data) {
        throw new Error(`Could not load location data for ${name}`);
      }
      return data;
    }
    throw new Error(`We don't current support locations requested like: ${name}`);
  }
}
