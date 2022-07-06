import { Movie } from './movies.model';

describe('Movies', () => {
  it('should create an instance', () => {
    expect(new Movie()).toBeTruthy();
  });
});
