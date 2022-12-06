export const enterNewQueryParams = (params: OptionalRecord<string, string>) => {
  const searchParams = new URLSearchParams(window.location.search);
  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      searchParams.set(name, value);
    }
  });
  return `?${searchParams.toString()}`;
};

export const setQueryParams = (params: OptionalRecord<string, string>) => {
  window.history.pushState(null, '', enterNewQueryParams(params));
};
