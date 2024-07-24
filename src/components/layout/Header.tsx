import Pattern from "../Pattern.tsx";
import Logo from "../Logo.tsx";
import PageHeading from "../PageHeading.tsx";
import FeedbackForm from "../feedback/FeedbackForm.tsx";

type THeaderProps = {
  handleAddToList: (text: string) => void;
};
const Header = ({ handleAddToList }: THeaderProps) => {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={handleAddToList} />
    </header>
  );
};

export default Header;
