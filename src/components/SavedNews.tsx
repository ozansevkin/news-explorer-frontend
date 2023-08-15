import NewsCardList from "./NewsCardList";
import SavedNewsHeader from "./SavedNewsHeader";

export default function SavedNews() {
  return (
    <>
      <SavedNewsHeader />
      <NewsCardList newsItems={null} />
    </>
  );
}
