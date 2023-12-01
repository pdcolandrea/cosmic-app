import { Text } from 'react-native';

const variantStyles = {
  default: 'rounded',
  primary: 'bg-blue-500 text-white',
  secondary: 'bg-white-500 text-black',
};

export default function PText({ variant }) {
  return (
    <Text
      className={`
        font-bold
        ${variantStyles.default}
        ${variantStyles[variant]}
      `}
    />
  );
}
