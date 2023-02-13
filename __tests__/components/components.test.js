import renderer from 'react-test-renderer';
import Header from '../../src/components/header';
import ActionButton from '../../src/components/actionButton';
import BackgroundWallpaper from '../../src/components/backgroundWallpaper';
import Category from '../../src/components/category';
import PuzzleBox from '../../src/components/puzzleBox';
import Success from '../../src/components/success';

jest.useFakeTimers();

jest.mock('react-native-sound', () => 'Sound');

describe('Testing common component', () => {
    it('renders ActionButton', () => {
        const tree = renderer
            .create(<Header />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders ActionButton', () => {
        const tree = renderer
            .create(<ActionButton />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders BackgroundWallpaper', () => {
        const tree = renderer
            .create(<BackgroundWallpaper />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders Category', () => {
        const tree = renderer
            .create(<Category />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders PuzzleBox', () => {
        const tree = renderer
            .create(<PuzzleBox />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders Success', () => {
        const tree = renderer
            .create(<Success />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

