import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import Repository from "./pages/Repository";
import Main from "./pages/Main";

// Define withRouter function
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} match={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

// Wrap your components with withRouter
const MainWithRouter = withRouter(Main);
const RepositoryWithRouter = withRouter(Repository);

export default function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Render your wrapped components */}
        <Route path="/" element={<MainWithRouter />} />
        <Route
          path="/repository/:repository"
          element={<RepositoryWithRouter />}
        />
      </Routes>
    </BrowserRouter>
  );
}
