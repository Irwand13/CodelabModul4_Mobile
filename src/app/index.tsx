import { ScrollView } from 'react-native';
import SecureVaultDemo from '../../asset/SecureVaultDemo';
import CloudHealthScreen from '../components/CloudHealthScreen';

console.log('Supabase URL:', process.env.EXPO_PUBLIC_SUPABASE_URL);

export default function Index() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 20, backgroundColor: '#000' }}>
      <SecureVaultDemo />
      <CloudHealthScreen />
    </ScrollView>
  );
}
