import { useSelector } from 'react-redux';

const App = () => {
	const counter = useSelector((state) => state);
	console.log(counter);

	return <div></div>;
};

export default App;
