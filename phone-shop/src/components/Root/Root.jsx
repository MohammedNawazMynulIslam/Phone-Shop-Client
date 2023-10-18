import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div className="max-w-8xl mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
