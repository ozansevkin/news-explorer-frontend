"use client";

import CurrentModalContext from "@/contexts/CurrentModalContext";
import CurrentUserContext from "@/contexts/CurrentUserContext";
import SavedNewsItemsContext from "@/contexts/SavedNewsItemsContext";
import { sendGetRequestWithToken } from "@/utils/mainApi";
import {
  currentModalType,
  currentUserType,
  savedNewsItemsType,
} from "@/utils/types";
import { ReactNode, useEffect, useState } from "react";
import useSWR from "swr";

export default function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [currentUser, setCurrentUser] = useState<currentUserType>(null);
  const [currentModal, setCurrentModal] = useState<currentModalType>(null);
  const [savedNewsItems, setSavedNewsItems] =
    useState<savedNewsItemsType>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleUserSuccess = ({ user }: { user: currentUserType }) => {
    setCurrentUser(user);
  };

  const handleArticlesSuccess = ({
    articles,
  }: {
    articles: savedNewsItemsType;
  }) => {
    setSavedNewsItems(articles);
  };

  const handleError = (err: any) => {
    console.error(err);
  };

  const token =
    typeof window !== "undefined" ? window.localStorage.getItem("jwt") : null;

  useSWR(
    mounted && token ? ["/users/me", token] : null,
    ([path, token]) => sendGetRequestWithToken(path, { arg: { token } }),
    {
      onSuccess: handleUserSuccess,
      onError: handleError,
    },
  );

  useSWR(
    mounted && token ? ["/articles", token] : null,
    ([path, token]) => sendGetRequestWithToken(path, { arg: { token } }),
    {
      onSuccess: handleArticlesSuccess,
      onError: handleError,
    },
  );

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, setCurrentUser, isLoggedIn: Boolean(currentUser) }}
    >
      <CurrentModalContext.Provider value={{ currentModal, setCurrentModal }}>
        <SavedNewsItemsContext.Provider
          value={{ savedNewsItems, setSavedNewsItems }}
        >
          {children}
        </SavedNewsItemsContext.Provider>
      </CurrentModalContext.Provider>
    </CurrentUserContext.Provider>
  );
}
