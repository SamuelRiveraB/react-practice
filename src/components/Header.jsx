import { memo } from "react";

const Header = memo(() => {
  console.log("Header");
  return <h1 className="f2">RoboFriends</h1>;
});

export default Header;
