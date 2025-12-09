import Tabs from "./use-state-tasks/Tabs";
import Converter from "./use-state-tasks/Converter";
import Accordion from "./use-state-tasks/Accordion";
import Slider from "./use-state-tasks/Slider";
import SwitchingThemes from "./use-state-tasks/SwitchingThemes";
import Password from "./use-state-tasks/Password";
import Counter from "./use-state-tasks/Counter";
import Volume from "./use-state-tasks/Volume";
import Downloader from "./use-state-tasks/Downloader";
import Squares from "./use-state-tasks/Squares";
import Accordion2 from "./use-state-tasks/Accordion2.0";
import Multilingualism from "./use-state-tasks/Multilingualism";
import PaginatedList, { ProductCard, UserCard } from "./use-state-tasks/PaginatedList";
import Tooltip from "./use-state-tasks/Tooltip";
import App from "./CompositionTasks";

export default function UseStateTasks() {
  return (
    <>
      <Tabs />
      <Converter />
      <Accordion
        sections={[
          {
            id: 1,
            title: "First item",
            subtitle:
              "Click the accordion button to see a different style when expanded.",
          },
          {
            id: 2,
            title: "Second item",
            subtitle:
              "The trigger background changes to teal with white text when expanded.",
          },
          {
            id: 3,
            title: "Third item",
            subtitle: "You can use any style props with the _open pseudo selector.",
          },
        ]}
      />
      <Accordion
        sections={[
          {
            id: 1,
            title: "ALKJSHD",
            subtitle: "Click dfj;laskdf",
          },
          {
            id: 2,
            title: "AS:DLFKLJDLKGJ",
            subtitle: "Tkjsklfjskdfjklsjdf",
          },
        ]}
      />
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
