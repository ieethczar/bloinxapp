import utils from '../utils';

describe('utils', () => {
  describe('determineIndex', () => {
    const options = ['one', 'two', 'three'];

    it('should return a index 1 with value is two', () => {
      const value = 'two';
      const actual = utils.determineIndex(options, value);
      expect(actual).toEqual(1);
    });

    it('should return a index 0 with value is other', () => {
      const value = 'other';
      const actual = utils.determineIndex(options, value);
      expect(actual).toEqual(0);
    });
  });
});