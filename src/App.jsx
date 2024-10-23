import { useDispatch, useSelector } from 'react-redux';
import { asyncdecrement, increment } from './store/actions/counterActions';

const App = () => {
	const dispatch = useDispatch();
	const { value } = useSelector((state) => state.counter);

	const incrementHandler = () => {
		dispatch(increment(value + 1));
	};
	const decrementHandler = () => {
		dispatch(asyncdecrement(value - 1));
	};
	return (
		<div className="w-[80%] bg-blue-200 rounded-xl mx-auto my-10 p-8">
			<h1 className="text-8xl">{value}</h1>
			<button
				onClick={incrementHandler}
				className="px-3 py-2 bg-green-400 rounded mt-4 mr-4">
				Increment by 1
			</button>
			<button
				onClick={decrementHandler}
				className="px-3 py-2 bg-red-400 rounded">
				Decrement by 1
			</button>
		</div>
	);
};

export default App;
