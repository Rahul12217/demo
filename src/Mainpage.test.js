import { render, screen } from "@testing-library/react"
import Mainpage from "./MainPage"
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./Redux/user";
import searchReducer from "./Redux/Search";
import { Provider } from "react-redux";


const store = configureStore({
    reducer: {
        user: userReducer,
        search: searchReducer,
    },
});

test('search button', () => {

    render(
        <Provider store={store}>
            <BrowserRouter>
                <Mainpage />
            </BrowserRouter>
        </Provider>
    );

    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
})