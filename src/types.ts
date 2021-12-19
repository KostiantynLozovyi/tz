import rootReducer from "./redux/rootReducer";

export type RootState = ReturnType<typeof rootReducer>;

export interface IArticleItem {
  title: any;
  titleText: string;
  description: any;
  source: {
    id: string
  };
  urlToImage: string;
  content: string;
}
