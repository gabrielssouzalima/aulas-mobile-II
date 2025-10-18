import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { createEstoque, fetchEstoque, updateEstoque } from "../Api";

export default function Cadastro({ navigation }) {
  const [registro, setRegistros] = useState([]);
  const [nome, setNome] = useState("");
  const [marca, setMarca] = useState("");
  const [preco, setPreco] = useState("");

  useEffect(() => {
    fetchEstoque(setRegistros);
  }, []);

  const handleSubmit = async () => {
    if (!nome || !marca || !preco) {
      Alert.alert("Atenção", "Preencha todos os campos antes de cadastrar.");
      return;
    }

    const newProduto = { nome, marca, preco };

    try {
      const addedProduto = await createEstoque(newProduto);
      if (addedProduto) {
        Alert.alert("Sucesso!", "Cadastro realizado com sucesso!", [
          { text: "OK", onPress: () => navigation.navigate("Home") },
        ]);
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível cadastrar o produto.");
      console.error(error);
    }

    setNome("");
    setMarca("");
    setPreco("");
  };

  return (
    <View>
      <TextInput placeholder="Produto" value={nome} onChangeText={setNome} />
      <TextInput placeholder="Marca" value={marca} onChangeText={setMarca} />
      <TextInput placeholder="Preço" value={preco} onChangeText={setPreco} />
      <Button title="Cadastrar" onPress={handleSubmit} />
    </View>
  );
}
