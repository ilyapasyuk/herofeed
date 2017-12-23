import HeroPage from './HeroPage.jsx'

const props = [
    'data'
];

const ReactHeroPage = (reactDirective) => reactDirective(HeroPage, props);
ReactHeroPage.$inject = ['reactDirective'];

export default ReactHeroPage;
