import renderer from 'react-test-renderer';
import LeaderBoardScreen from '../../src/screens/LeaderBoardScreen';

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';

jest.useFakeTimers();

describe('Testing login screen', () => {
    it('renders Login Screen', () => {
        const mockStore = configureStore()
        const store = mockStore({loginReducer: {userList: []}})
        const tree = renderer
            .create(<Provider store={store}><LeaderBoardScreen /></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});