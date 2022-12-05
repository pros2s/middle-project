import { enterNewQueryParams } from './setQueryParams';

describe('enterNewQueryParams.test', () => {
  test('one param', () => {
    const param = enterNewQueryParams({ test: 'test' });

    expect(param).toBe('?test=test');
  });
  test('multiple params', () => {
    const params = enterNewQueryParams({
      test: 'test',
      test2: 'test2',
      test3: 'test3',
    });

    expect(params).toBe('?test=test&test2=test2&test3=test3');
  });
});
