const getQueryParams = (params: object) => {
  const searchParams = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([name, value]) => {
    value !== undefined && searchParams.set(name, value);
  });

  return searchParams.toString();
};

export const addQueryParams = (params: object) => {
  const currentPath = window.location.pathname;

  const queryParams = getQueryParams(params);

  const newUrl = queryParams ? `${currentPath}?${queryParams}` : currentPath;

  window.history.pushState(null, '', newUrl);
};
