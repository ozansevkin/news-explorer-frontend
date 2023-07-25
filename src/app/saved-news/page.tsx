import Header from "@/components/Header";
import SavedNews from "@/components/SavedNews";

export default function SavedArticles() {
  return (
    <>
      <div className="px-adaptive max-w-7xl mx-auto">
        <Header color="black" />
      </div>
      <main className="px-adaptive max-w-7xl mx-auto">
        <SavedNews />
      </main>
    </>
  );
}
