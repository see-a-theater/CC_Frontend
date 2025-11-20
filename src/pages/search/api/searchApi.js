
export const searchAPI = {
  // 검색 API
  searchShows: async (fetchData, keyword, page = 0, size = 20) => {
  const queryParams = new URLSearchParams({
    keyword,
    page: page.toString(),
    size: size.toString()
  }).toString();
  const response = await fetchData(`/search?${queryParams}`, 'GET');
  return response;
},

  // 임박한 공연 목록
  getShowIncoming: async (fetchData) => {
    const response = await fetchData('/amateurs/incoming', 'GET');
    return response;
  },

  // 현재 진행중인 공연 목록
  getOngoingShows: async (fetchData, page = 0, size = 20) => {
    const response = await fetchData('/amateurs/ongoing', 'GET', null, {
      page,
      size
    });
    return response;
  }
};

export default searchAPI;