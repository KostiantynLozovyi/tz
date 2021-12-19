import rootReducer from "./redux/rootReducer";

export type RootState = ReturnType<typeof rootReducer>;

export interface IArticleItem {
  title: string;
  description: string;
  source : {
    id : string
  };
  urlToImage : string;
  content : string;
}
