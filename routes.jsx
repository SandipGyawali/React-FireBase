import Login from "./src/pages/Auth/login";
import SignUp from "./src/pages/Auth/sign-up";
import UsersList from "./src/pages/UsersList";
import InputData from "./src/pages/inputData";

const routes = [
  {
    path: "auth/sign-up",
    element: <SignUp />,
  },
  {
    path: "auth/login",
    element: <Login />,
  },
  {
    path: "inputData",
    element: <InputData />,
  },
  {
    path: "users-list",
    element: <UsersList />,
  },
];

export default routes;
