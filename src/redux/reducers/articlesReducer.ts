import { IArticleItem } from './../../types';
import { ArticlesType, GET_ARTICLES } from './../actions/articlesAction';

export interface IDefaultState {
  data: IArticleItem[],
  loading: boolean,
}

export const defaultState = {
  data: [],
  loading: true,
};

export default function articlesReducer(state: IDefaultState = defaultState, action: ArticlesType) {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        data: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}