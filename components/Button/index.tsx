import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

interface ButtonProps {
	title: string,
	type?: 'function' | 'operation' | 'calculator'
}

export function Button({ title, type }: ButtonProps) {

	const buttonStyleType = (type === 'operation' ? styles.buttonOperation : (type === 'calculator' ? styles.buttonCalculator : styles.button));
	const buttonTitleStyleType = (type === 'function' ? styles.buttonTitleFunction : styles.buttonTitle);

	return (
		<TouchableOpacity style={buttonStyleType}>
			<Text style={buttonTitleStyleType}>{title}</Text>
		</TouchableOpacity>
	)
}