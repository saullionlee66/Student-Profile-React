import { InfoProvider } from "./Context/InfoContext";
import "./CSS/App.css";
import InfoList from "./Components/InfoList";

function App() {
	return (
		<InfoProvider>
			<div className='App'>
				<InfoList />
			</div>
		</InfoProvider>
	);
}

export default App;
