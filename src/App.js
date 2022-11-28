import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import UserPage from "./components/Login/UserPage";
// import EmailcontextProvider from "./Context/emailContextprovider";
import AuthForm from "./components/Login/Login";
import AuthContex from "./Context/CreateContext";
// import Dummy from "./components/Dummy";
import ContactDetails from "./components/Login/ContactDetails";
import LoadingSpinner from "./components/Loadingspinner/LoadingSpinner";
import ExpenseForm from "./components/Expense/ExpenseForm";
import { useSelector } from "react-redux";
function App() {
  const ctx = useContext(AuthContex);
  // const item = useSelector((state) => console.log(state.expense.isisrendering));
  // console.log(item);
  //console.log(ctx);
  return (
    <React.Fragment>
      <Switch>
        <Route path="/contactdetails">
          <ContactDetails></ContactDetails>
        </Route>
        {ctx.loginState && (
          <Route path="/userpage" exact>
            <UserPage></UserPage>
          </Route>
        )}
        <Route path="/loading">
          <LoadingSpinner></LoadingSpinner>
        </Route>
        <Route path="/login" exact>
          <AuthForm></AuthForm>
        </Route>
        <Route path="/expenseform" exact>
          <ExpenseForm></ExpenseForm>
        </Route>

        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
