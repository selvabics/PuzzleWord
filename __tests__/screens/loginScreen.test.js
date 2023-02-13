import renderer from 'react-test-renderer';
import LoginScreen from '../../src/screens/LoginScreen';

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';

jest.useFakeTimers();

describe('Testing login screen', () => {
    it('renders Login Screen', () => {
        const mockStore = configureStore()
        const store = mockStore({})
        const tree = renderer
            .create(<Provider store={store}><LoginScreen /></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

