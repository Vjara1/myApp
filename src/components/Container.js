import { View } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function Container({ children }) {
  const { isDark } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: isDark ? '#0f0f0f' : '#f8f8f8' }}>
      {children}
    </View>
  );
}
