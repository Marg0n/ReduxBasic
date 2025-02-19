import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { Button } from "./components/ui/button";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handleDecrement = (amount: number) => {
    dispatch(decrement(amount));
  };

  return (
    <>
      <Navbar/>
      <Outlet/>
     {/* Your application code here */}
      <div>
        <h1>Counter with Redux</h1>
        <Button onClick={() => handleIncrement(2)}>Increment</Button>
        <div>{count}</div>
        <Button onClick={() => handleDecrement(1)}>Decrement</Button>
      </div>
    </>
  );
}

export default App;
