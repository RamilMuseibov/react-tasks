import ProductCards from "./composition-tasks/ProductCards";
import Taskbar from "./composition-tasks/Taskbar";
import UserProfile from "./composition-tasks/UserProfile";

export default function CompositionTasks() {
  return (
    <>
      <UserProfile />
      <ProductCards />
      <Taskbar />
    </>
  );
}
