import ApiService from "./ApiService";

class NewsService extends ApiService {
  constructor() {
    super("/news");
  }

  getBreakingNews() {
    return this.getData("?type=breaking");
  }
  getTopNews() {
    return this.getData("?type=top");
  }
  search(query: string) {
    return this.getData(`/search?query=${query}`);
  }
}

export default new NewsService();
