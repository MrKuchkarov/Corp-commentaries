type THashtagItem = {
  company: string;
};
const HashtagItem = ({ company }: THashtagItem) => {
  return (
    <li key={company}>
      <button>#{company}</button>
    </li>
  );
};

export default HashtagItem;
