import { render, screen } from "@testing-library/react"
import Mainpage from "./MainPage"
import { BrowserRouter } from 'react-router-dom';

import Root from "./Root"; 

test('search button', () => {

    render(
        <Root>
            <BrowserRouter>
                <Mainpage />
            </BrowserRouter>
        </Root>
    );

    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
})