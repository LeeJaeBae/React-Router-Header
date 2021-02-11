import Routes from 'react-router-header';

const Home = () => {
	return <>Home</>;
};

export default function HomePage() {
	Routes.add(Home, '/', 'Home', true);
}
