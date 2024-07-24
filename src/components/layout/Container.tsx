import Header from "./Header.tsx";
import FeedbackList from "../feedback/FeedbackList.tsx";
import { TFeedbackItem } from "../../lib/types";

type TContainerProps = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  handleAddToList: (text: string) => void;
};
const Container = ({
  feedbackItems,
  isLoading,
  errorMessage,
  handleAddToList,
}: TContainerProps) => {
  return (
    <main className="container">
      <Header handleAddToList={handleAddToList} />
      <FeedbackList
        errorMessage={errorMessage}
        isLoading={isLoading}
        feedbackItems={feedbackItems}
      />
    </main>
  );
};

export default Container;
