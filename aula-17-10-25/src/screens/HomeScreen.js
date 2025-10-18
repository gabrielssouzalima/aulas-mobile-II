import React, { useEffect, useState } from "react";
import { 
  View, 
  FlatList, 
  Button, 
  RefreshControl, 
  Alert, 
  ActivityIndicator, 
  Text, 
  StyleSheet 
} from "react-native";
import { getClientes, deleteCliente } from "../api/api";
import ClienteCard from "../components/ClienteCard";

const HomeScreen = ({ navigation }) => {
  const [clientes, setClientes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  // Função para carregar clientes
  const loadClientes = async () => {
    try {
      setRefreshing(true);
      const data = await getClientes();

      if (data.status) {
        setClientes(data.data); // array de clientes
      } else {
        setClientes([]);
      }
    } catch (err) {
      console.error("Erro ao carregar clientes:", err);
      Alert.alert("Erro", err.message || "Não foi possível carregar clientes");
      setClientes([]);
    } finally {
      setRefreshing(false);
      setLoading(false);
    }
  };

  // Recarrega lista ao ganhar foco (após criar ou editar)
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", loadClientes);
    return unsubscribe;
  }, [navigation]);

  // Deletar cliente com confirmação
  const handleDelete = (id) => {
    Alert.alert(
      "Confirmar exclusão",
      "Deseja realmente excluir este cliente?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            try {
              await deleteCliente(id);
              loadClientes(); // recarrega lista após deletar
            } catch (err) {
              console.error("Erro ao deletar cliente:", err);
              Alert.alert("Erro", err.message || "Falha ao excluir");
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Novo Cliente"
        onPress={() => navigation.navigate("Create")}
      />

      {loading ? (
        <ActivityIndicator style={{ marginTop: 20 }} size="large" />
      ) : (
        <FlatList
          data={clientes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ClienteCard
              cliente={item}
              onEdit={(c) => navigation.navigate("Edit", { cliente: c })}
              onDelete={handleDelete}
            />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={loadClientes} />
          }
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Nenhum cliente encontrado</Text>
            </View>
          )}
          contentContainerStyle={clientes.length === 0 ? { flex: 1 } : null}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#555",
  },
});

export default HomeScreen;
