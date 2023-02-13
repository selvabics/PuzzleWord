import renderer from 'react-test-renderer';
import PuzzleScreen from '../../src/screens/PuzzleScreen';

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';

jest.useFakeTimers();

describe('Testing login screen', () => {
    it('renders Login Screen', () => {
        const mockStore = configureStore()
        const currentUser = {
            email: '',
            level: {},
            points: {},
            totalPoints: 0,
        };
        const store = mockStore({ loginReducer: { currentUser } });
        const routeObj = { params: { category: { puzzles: []} } };

        // const store = mockStore({});
        const tree = renderer
            .create(<Provider store={store}><PuzzleScreen route={routeObj} /></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

