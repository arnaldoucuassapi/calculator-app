import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { styles } from "./style";

interface ButtonProps extends TouchableOpacityProps {
	title: string | string,
	type?: 'function' | 'operation' | 'calculator'
}

export function Button({ title, type, ...rest }: ButtonProps) {

	const buttonStyleType = (type === 'operation' ? styles.buttonOperation : (type === 'calculator' ? styles.buttonCalculator : styles.button));
	const buttonTitleStyleType = (type === 'function' ? styles.buttonTitleFunction : styles.buttonTitle);

	return (
		<TouchableOpacity style={buttonStyleType} {...rest}>
			<Text style={buttonTitleStyleType}>{title}</Text>
		</TouchableOpacity>
	)
}