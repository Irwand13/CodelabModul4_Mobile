import React from 'react';
import { ScrollView } from 'react-native';
import SecureVaultDemo from '../../../asset/SecureVaultDemo';

export default function VaultScreen() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 20, backgroundColor: '#000' }}
    >
      <SecureVaultDemo />
    </ScrollView>
  );
}
