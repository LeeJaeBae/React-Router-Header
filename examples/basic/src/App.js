import Routes from 'react-router-header';
import RoutesFunctions from './Routes';

function App() {
	Routes.render(RoutesFunctions);

	return (
		<>
			<Routes.Router>
				<Routes.Header />
			</Routes.Router>
		</>
	);
}

export default App;
