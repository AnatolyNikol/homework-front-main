import {ChangeEvent} from "react";

type InputPropsType = {
	// currentText: any // НУЖНО ПРОТИПИЗИРОВАТЬ
	// setCurrentText: any // НУЖНО ПРОТИПИЗИРОВАТЬ
	currentText: string
	setCurrentText: (newText: string) => void
};

export const Input = (props: InputPropsType) => {
	// const onChangeHandler = (event: 'НУЖНО ПРОТИПИЗИРОВАТЬ') => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		// НУЖНО ДОПИСАТЬ
		props.setCurrentText(event.currentTarget.value)

	};

	return (
	  <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
	);
};
