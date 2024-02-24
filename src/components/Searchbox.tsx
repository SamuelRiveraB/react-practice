import { ChangeEventHandler } from "react";

interface ISearchBoxProps {
  searchChange: ChangeEventHandler<HTMLInputElement>;
}

const Searchbox = ({ searchChange }: ISearchBoxProps): JSX.Element => {
  console.log("Searchbox");
  return (
    <div className="tc">
      <input
        aria-label="Search Robots"
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default Searchbox;
