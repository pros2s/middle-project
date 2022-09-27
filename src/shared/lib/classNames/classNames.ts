type Mode = Record<string, boolean | string>;

export const classNames = (
  mainClass: string,
  otherClasses: string[] = [],
  mods: Mode = {},
): string =>
  [
    mainClass,
    ...otherClasses.filter(Boolean),
    ...Object.entries(mods)
      .filter(([, key]) => Boolean(key))
      .map(([className]) => className),
  ].join(' ');
