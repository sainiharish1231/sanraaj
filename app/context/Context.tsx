// Define the NewsItem type
export interface NewsItem {
  id: string;
  slug_key: string;
  title: string;
  description: string;
  article: string;
  image_url: string;
  categoryId: string;
  keywords: string[];
  noOfLikes: number;
  isTopNews: boolean;
  isBreakingNews: boolean;
  createdAt: string;
  updatedAt: string;
}
