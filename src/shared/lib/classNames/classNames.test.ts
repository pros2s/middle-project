import { classNames } from './classNames';

describe('classNames', () => {
  test('with first class', () => {
    expect(classNames('mainClass')).toBe('mainClass');
  });

  test('with first and other classes', () => {
    const expected = 'mainClass cls cls1';
    expect(classNames('mainClass', ['cls', 'cls1'])).toBe(expected);
  });

  test('with first and other classes, and some true mods', () => {
    const expected = 'mainClass cls cls1 hovered scrollable';
    expect(
      classNames('mainClass', ['cls', 'cls1'], {
        hovered: true,
        scrollable: true,
      }),
    ).toBe(expected);
  });

  test('with first and other classes, and some true or false mods', () => {
    const expected = 'mainClass cls cls1 hovered';
    expect(
      classNames('mainClass', ['cls', 'cls1'], {
        hovered: true,
        scrollable: false,
      }),
    ).toBe(expected);
  });

  test('with first and other classes, and some true or false, or undefined mods', () => {
    const expected = 'mainClass cls cls1 scrollable';
    expect(
      classNames('mainClass', ['cls', 'cls1'], {
        hovered: false,
        scrollable: true,
        opened: undefined,
      }),
    ).toBe(expected);
  });
});
