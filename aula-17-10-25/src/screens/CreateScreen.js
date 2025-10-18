import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert, ScrollView } from "react-native";
import { createCliente } from "../api/api";

// Tela para criar novo cliente
const CreateScreen = ({ navigation }) => {
  // campos (controlados)
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [CPF, setCPF] = useState("");
  const [numeroQuarto, setNumeroQuarto] = useState("");

  // envia para a API
  const handleSubmit = async () => {
    try {      
      const payload = {
        nome,
        endereco,
        telefone,
        CPF,
        numero_quarto: Number(numeroQuarto),
      };

      await createCliente(payload); // createCliente trata resposta e lança em caso de erro
      // volta para a lista (o listener de focus recarrega)
      navigation.goBack();
    } catch (err) {
      // se for validação (422), o body tem errors
      if (err.status === 422 && err.body && err.body.errors) {
        // oraganiza mensagens de validação
        const messages = Object.values(err.body.errors)
          .flat()
          .join("\n");
        Alert.alert("Erro de validação", messages);
        return;
      }
      Alert.alert("Erro", err.message || "Falha ao criar cliente");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput placeholder="Nome" value={nome} onChangeText={setNome} style={styles.input} />
      <TextInput placeholder="Endereço" value={endereco} onChangeText={setEndereco} style={styles.input} />
      <TextInput placeholder="Telefone (Sem DDD) (9 dígitos)" value={telefone} onChangeText={setTelefone} style={styles.input} keyboardType="phone-pad" />
      <TextInput placeholder="CPF (11 dígitos)" value={CPF} onChangeText={setCPF} style={styles.input} keyboardType="number-pad" />
      <TextInput placeholder="Número do quarto" value={numeroQuarto} onChangeText={setNumeroQuarto} style={styles.input} keyboardType="number-pad" />
      <Button title="Salvar" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { borderWidth: 1, marginBottom: 12, padding: 10, borderRadius: 6 },
});

export default CreateScreen;
