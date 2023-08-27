import { SavedNewsItemsContextType } from "@/utils/types";
import { createContext } from "react";

const SavedNewsItemsContext = createContext<SavedNewsItemsContextType>(null!);

export default SavedNewsItemsContext;
