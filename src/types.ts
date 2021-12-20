import rootReducer from "./redux/rootReducer";

export type RootState = ReturnType<typeof rootReducer>;

export interface IArticleItem {
  title: any;
  titleText: string;
  summary: string,
  summaryDesc: any;
  imageUrl: string;
  publishedAt: string;
}
