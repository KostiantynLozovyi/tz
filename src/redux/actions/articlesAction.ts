import { Dispatch } from "react";
import { ActionCreator } from "redux";
import { URL } from "../../constants/URL";

export const GET_ARTICLES = 'GET_ARTICLES';

interface IGetArticles {
  type: typeof GET_ARTICLES
  payload: any
}

export type ArticlesType = IGetArticles

export const getArticles: ActionCreator<IGetArticles> = (payload) => ({
  type: GET_ARTICLES,
  payload,
});

export function fetchTasks() {
  return async (dispatch: Dispatch<ArticlesType>) => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      dispatch(getArticles(data))
    } catch (error) {
    }
  };
}