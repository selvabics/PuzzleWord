import renderer from 'react-test-renderer';
import HomeScreen from '../../src/screens/HomeScreen';

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
        const tree = renderer
            .create(<Provider store={store}><HomeScreen /></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

