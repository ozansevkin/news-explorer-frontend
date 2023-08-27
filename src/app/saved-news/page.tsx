"use client";

import Header from "@/components/Header";
import SavedNews from "@/components/SavedNews";
import { sendGetRequestWithToken } from "@/utils/mainApi";
import { useRouter } from "next/navigation";

export default function SavedArticles() {
  const router = useRouter();

  const token = localStorage.getItem("jwt");

  const isAuth = token
    ? sendGetRequestWithToken("/users/me", { arg: { token } })
        .then(() => true)
        .catch(() => false)
    : false;

  if (!isAuth) return router.push("/");

  return (
    <>
      <Header color="black" />
      <main>
        <SavedNews />
      </main>
    </>
  );
}
