type THashtagItemProps = {
  company: string;
  onSelectCompany: (company: string) => void;
};
const HashtagItem = ({ onSelectCompany, company }: THashtagItemProps) => {
  return (
    <li key={company}>
      <button onClick={() => onSelectCompany(company)}>#{company}</button>
    </li>
  );
};

export default HashtagItem;
