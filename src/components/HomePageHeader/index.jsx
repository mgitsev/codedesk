import LogoContainer from "./LogoContainer";
import SearchBar from "./SearchBar";
import SignupToggle from "./SignupToggle";
import { header, nav_toggle } from "./style.module.scss";
export default function HomePageHeader(props) {
  return (
    <header className={header}>
      <LogoContainer />
      <SearchBar />
      <SignupToggle />
    </header>
  );
}
