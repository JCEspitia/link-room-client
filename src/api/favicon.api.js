const URL_BASE = "https://www.google.com/s2/favicons?sz=64&";

export const getPageFavicon = (url) =>
  `${URL_BASE}domain_url=${url}`;
