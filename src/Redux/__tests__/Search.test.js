import searchReducer from '../Search';
import { searchActions } from '../Search';

test('user component', () => {

    const initialState = { from: "", to: "", date: "" }


    const newState = searchReducer(initialState, searchActions.search({ from: "vizag", to: "chennai", date: "12-01-2024" }))

    expect(newState).toEqual({ from: "vizag", to: "chennai", date: "12-01-2024" })
})