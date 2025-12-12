import CompositionTasks from "./components/CompositionTasks";
import UseEffectTasks from "./components/UseEffectTasks";
import UseStateTasks from "./components/UseStateTasks";

function App() {
  console.log("какая-то хуйня");

  return (
    <>
      {/* <UseStateTasks /> */}
      {/* <CompositionTasks /> */}
      <UseEffectTasks />
    </>
  );
}

export default App;
