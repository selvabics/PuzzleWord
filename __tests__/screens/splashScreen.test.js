import renderer from 'react-test-renderer';
import SplashScreen from '../../src/screens/SplashScreen';

describe('Testing splach screen', () => {
    it('renders Splash Screen', () => {
        const tree = renderer
            .create(<SplashScreen />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

