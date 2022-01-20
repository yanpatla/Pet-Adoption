import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import AuthState from "./context/auth/authState";
import PetState from "./context/pet/petState";
import PrivateRoutes from "./components/routes/PrivateRoutes";
import Profile from "./components/profile/Profile";
import Pets from "./components/pets/Pets";
import Bar from "./components/Bar";
import MyPetsPage from "./components/pets/MyPetsPage";
import PetProfile from "./components/pets/PetProfile";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminState from "./context/admin/adminState";
import FormAddPet from "./components/admin/FormAddPet";
import UserProfile from "./components/admin/UserProfile";
import PetEdit from "./components/admin/PetEdit";
 
function App() {
  //!Arreglar routa mal escrita

  return (
    <AuthState>
      <PetState>
        <AdminState>
          <Router>
            <Bar />
            <Switch>
              <Route exact path="/" component={Home} />
              <PrivateRoutes
                exact
                path="/user/profile/:id"
                component={Profile}
              />
              <Route exact path="/serach-pet-adoption" component={Pets} />
              <PrivateRoutes
                exact
                path="/user/my-pets"
                component={MyPetsPage}
              />
              <PrivateRoutes
                exact
                path="/admin-dashboard"
                component={AdminDashboard}
              />
              <Route path="/pet-profile/:_id" component={PetProfile} />
              <PrivateRoutes
                path="/admin-dashboard/add-pet"
                component={FormAddPet}
              />
              <PrivateRoutes
                path="/admin-dashboard/user/:id"
                component={UserProfile}
              />
              <PrivateRoutes
                path="/admin-dashboard/edit-pet/:id"
                component={PetEdit}
              />
      
            </Switch>
          </Router>
        </AdminState>
      </PetState>
    </AuthState>
  );
}

export default App;
