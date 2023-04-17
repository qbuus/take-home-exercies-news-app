export type News = {
  title: string | null;
  source: { name: string | null };
  publishedAt: string;
  author: string | null;
  content: string | null;
  url: string | undefined;
  urlToImage: string | null;
  description: string | null;
  // totalResults?: number;
};

export interface NewsArray {
  totalResults: number;
  articles: News[];
}

export type Country = {
  name: string;
  code: string;
};
