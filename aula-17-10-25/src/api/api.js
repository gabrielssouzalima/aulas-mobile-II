const API_URL = "https://apihotelaria.webapptech.site/api/clientes"; 


// Listar todos os clientes
export const getClientes = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

// Mostrar cliente por ID
export const getCliente = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};

// Criar novo cliente
export const createCliente = async (data) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

// Atualizar cliente
export const updateCliente = async (id, data) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

// Deletar cliente
export const deleteCliente = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
