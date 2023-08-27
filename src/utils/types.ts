import { Dispatch, SetStateAction } from "react";

export type searchValueType = string | null;

export type currentUserType = {
  name: string;
  email: string;
} | null;

export type CurrentUserContextType = {
  currentUser: currentUserType;
  setCurrentUser: Dispatch<SetStateAction<currentUserType>>;
  isLoggedIn: boolean;
};

export type currentModalType = "sign-in" | "sign-up" | "sign-up-success" | null;

export type CurrentModalContextType = {
  currentModal: currentModalType;
  setCurrentModal: Dispatch<SetStateAction<currentModalType>>;
};

export interface INewsItem {
  id: string | null | undefined;
  publishedAt: string | null;
  source: {
    id: string | null;
    name: string | null;
  } | null;
  title: string | null;
  description: string | null;
  url: string | undefined;
  urlToImage: string | null;
  searchValue: string | null;
}

export interface ISavedNewsItem {
  _id: string;
  date: string | null;
  source: string | null;
  title: string | null;
  text: string | null;
  link: string | null;
  image: string | null;
  keyword: string | null;
}

export type savedNewsItemsType = Array<ISavedNewsItem | null> | null;

export type SavedNewsItemsContextType = {
  savedNewsItems: savedNewsItemsType;
  setSavedNewsItems: Dispatch<SetStateAction<savedNewsItemsType>>;
};
