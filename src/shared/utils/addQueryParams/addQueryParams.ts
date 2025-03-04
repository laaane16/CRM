const getQueryParams = (params: object) => {
  const searchParams = new URLSearchParams('');

  Object.entries(params).forEach(([name, value]) => {
    value !== undefined && searchParams.set(name, Array.isArray(value) ? value.join(',') : value);
  });

  return decodeURIComponent(searchParams.toString());
};

export const addQueryParams = (params: object) => {
  const currentPath = window.location.pathname;

  const queryParams = getQueryParams(params);

  const newUrl = queryParams ? `${currentPath}?${queryParams}` : currentPath;

  window.history.pushState(null, '', newUrl);
};
