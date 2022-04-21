import './App.scss';
import employees from './data/employees.json';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const status = 'internalUser';

function App() {
	return (
		<div className="App">
			<Header status={status}/>
			<ul>
				{employees.map((emp, index) => {
					return (
						<li key={index}>
							{emp.firstName} {emp.lastName}
						</li>
					);
				})}
			</ul>
			<Footer />
		</div>
	);
}

export default App;
