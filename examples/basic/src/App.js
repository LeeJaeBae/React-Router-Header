import Routes from 'react-router-header';
import RoutesFunctions from './Routes';

function App() {
	Routes.render(RoutesFunctions);

	return (
		<>
			<Routes.Header />
			<Routes.Router />
		</>
	);
}

export default App;
