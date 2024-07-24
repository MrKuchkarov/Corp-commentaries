import HashtagItem from "./HashtagItem.tsx";

type THashtagsList = {
  companyList: string[];
  handleSelectCompany: (company: string) => void;
};
const HashtagList = ({ companyList, handleSelectCompany }: THashtagsList) => {
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem company={company} onSelectCompany={handleSelectCompany} />
      ))}
    </ul>
  );
};

export default HashtagList;
