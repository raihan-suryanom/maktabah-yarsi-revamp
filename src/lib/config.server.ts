const envConfigs = {
  path: {
    baseUrl: process.env.BASE_API_URL,
    categories: process.env.CATEGORIES_API,
    bibliographies: process.env.BIBLIOGRAPHIES_API,
    contents: process.env.CONTENTS_API,
    toc: process.env.TOC_API,
    search: process.env.SEARCH_API,
    searchLimit: process.env.SEARCH_LIMIT,
  },
};

export default Object.freeze(envConfigs);
