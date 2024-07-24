import FeedbackItem from "./FeedbackItem.tsx";
import Spinner from "./Spinner.tsx";
import ErrorMessage from "./ErrorMessage.tsx";
import { TFeedbackItem } from "../lib/types";

type TFeedbackListProps = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
};
const FeedbackList = ({
  feedbackItems,
  errorMessage,
  isLoading,
}: TFeedbackListProps) => {
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
};

export default FeedbackList;
