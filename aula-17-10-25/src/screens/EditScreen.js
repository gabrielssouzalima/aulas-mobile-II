import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert, ScrollView } from "react-native";
import { updateCliente } from "../api/api";

// Tela de edição — recebe 'cliente' via route.params
const EditScreen = ({ route, navigation }) => {
  const { cliente } = route.params;

  // estados preenchidos com os dados existentes
  const [nome, setNome] = useState(cliente.nome ?? "");
  const [endereco, setEndereco] = useState(cliente.endereco ?? "");
  const [telefone, setTelefone] = useState(cliente.telefone ?? "");
  const [CPF, setCPF] = useState(cliente.CPF ?? "");
  const [numeroQuarto, setNumeroQuarto] = useState(String(cliente.numero_quarto ?? ""));

  // envia atualização
  const handleUpdate = async () => {
    try {
      const payload = {
        nome,
        endereco,
        telefone,
        CPF,
        numero_quarto: Number(numeroQuarto),
      };

      await updateCliente(cliente.id, payload);
      navigation.goBack();
    } catch (err) {
      if (err.status === 422 && err.body && err.body.errors) {
        const messages = Object.values(err.body.errors).flat().join("\n");
        Alert.alert("Erro de validação", messages);
        return;
      }
      Alert.alert("Erro", err.message || "Falha ao atualizar cliente");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput value={nome} onChangeText={setNome} style={styles.input} />
      <TextInput value={endereco} onChangeText={setEndereco} style={styles.input} />
      <TextInput value={telefone} onChangeText={setTelefone} style={styles.input} keyboardType="phone-pad" />
      <TextInput value={CPF} onChangeText={setCPF} style={styles.input} keyboardType="number-pad" />
      <TextInput value={numeroQuarto} onChangeText={setNumeroQuarto} style={styles.input} keyboardType="number-pad" />
      <Button title="Atualizar" onPress={handleUpdate} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { borderWidth: 1, marginBottom: 12, padding: 10, borderRadius: 6 },
});

export default EditScreen;
