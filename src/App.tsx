import Button from './components/Button/Button';
import { useState } from 'react';
import type { MouseEvent } from 'react';
import Input from './components/Input/Input';
function App() {
	const [counter, setCounter] = useState<number>(0);
	const addCounter = (e: MouseEvent) => {
		console.log(e);
		setCounter((prev) => prev + 1);
	};
	return (
		<>
			<Input type='text' placeholder='Имя' name='name' label='Ваше имя' />
			<Input
				type='password'
				name='password'
				placeholder='Пароль'
				label='Ваш пароль'
			/>
			<Button viewType='big' onClick={addCounter}>
				Кнопка {counter}
			</Button>
	
			<Button onClick={addCounter}>Кнопка {counter}</Button>
		</>
	);
}

export default App;
