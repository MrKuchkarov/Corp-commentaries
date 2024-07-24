import HashtagItem from "./HashtagItem.tsx";

type THashtagsList = {
  companyList: string[];
};
const HashtagList = ({ companyList }: THashtagsList) => {
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem company={company} />
      ))}
    </ul>
  );
};

export default HashtagList;
