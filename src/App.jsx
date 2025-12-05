import Tabs from "./components/Tabs";
import Converter from "./components/Converter";
import Accordion from "./components/Accordion";
import Slider from "./components/Slider";
import SwitchingThemes from "./components/SwitchingThemes";
import Password from "./components/Password";
import Counter from "./components/Counter";
import Volume from "./components/Volume";
import Downloader from "./components/Downloader";
import Squares from "./components/Squares";
import Accordion2 from "./components/Accordion2.0";
import Multilingualism from "./components/Multilingualism";
import PaginatedList, { ProductCard, UserCard } from "./components/FetchUsers";
import Tooltip from "./components/Tooltip";

function App() {
  return (
    <>
      <Tabs />
      <Converter />
      <Accordion />
      <Slider />
      <SwitchingThemes />
      <Password />
      <Counter />
      <Volume />
      <Downloader />
      <Squares />
      <Accordion2 />
      <Multilingualism />
      <PaginatedList entity="users" entityCard={UserCard} />
      <PaginatedList entity="products" entityCard={ProductCard} />
      <Tooltip />
    </>
  );
}

export default App;
