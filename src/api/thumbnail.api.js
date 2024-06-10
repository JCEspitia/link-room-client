const API_KEY = "ab447ca2136c4488f9ddcb9c47c11b3e5ce5b345000b";
const URL_BASE = "https://api.thumbnail.ws/api/";

export const getPageScreenshot = (url) =>
  `${URL_BASE}/${API_KEY}/thumbnail/get?url=${url}&width=400`;
