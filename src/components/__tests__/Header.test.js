import { render,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
it("should load Header component with a login button",() => {
    render(
        <BrowserRouter>
        <Provider store = {appStore}>
            <Header/>

        </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByText(/login/i);
expect(loginButton).toBeInTheDocument();

});