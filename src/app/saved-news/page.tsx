import Header from "@/components/Header";
import SavedNews from "@/components/SavedNews";

export default function SavedArticles() {
  return (
    <>
      <Header color="black" isLoggedIn={true} />
      <main>
        <SavedNews />
      </main>
    </>
  );
}
