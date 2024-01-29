import searchReducer from './Search';
import { search } from './Search';

test('user component', () => {

    const initialState = { from: "", to: "", date: "" }

    const expectedState = { from: "vizag", to: "chennai", date: "12-01-2024" };

    // const action = {
    //     type : search,
    //     payload : { from: "vizag", to: "chennai", date: "12-01-2024" }
    // }


    const newState = search({ from: "vizag", to: "chennai", date: "12-01-2024" })

    expect(newState.payload).toEqual(expectedState)
})