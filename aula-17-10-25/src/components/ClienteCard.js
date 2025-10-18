import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

// Componente visual para exibir um cliente na lista
const ClienteCard = ({ cliente, onEdit, onDelete }) => {
  return (
    <View style={styles.card}>
      {/* nome em destaque */}
      <Text style={styles.title}>{cliente.nome}</Text>

      {/* demais informações */}
      <Text>CPF: {cliente.CPF}</Text>
      <Text>Telefone: {cliente.telefone}</Text>
      <Text>Endereço: {cliente.endereco}</Text>
      <Text>Nº quarto: {cliente.numero_quarto}</Text>

      {/* botões de ação (editar / excluir) */}
      <View style={styles.actions}>
        <Button title="Editar" onPress={() => onEdit(cliente)} />
        <Button title="Excluir" color="red" onPress={() => onDelete(cliente.id)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 12,
    margin: 10,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  title: { fontWeight: "700", fontSize: 16, marginBottom: 6 },
  actions: { flexDirection: "row", justifyContent: "space-between", marginTop: 8 },
});

export default ClienteCard;
