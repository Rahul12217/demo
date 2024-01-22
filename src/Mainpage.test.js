import { render, screen } from "@testing-library/react"
import Mainpage from "./MainPage"
import { BrowserRouter } from 'react-router-dom';

test('search button', () => {

    render(<BrowserRouter>
        <Mainpage />
    </BrowserRouter>);
    
    expect(screen.getByRole('button',{name : /search/i})).toBeInTheDocument();
})