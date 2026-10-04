const URL = "http://localhost:3001/personas";

export async function obtenerPersonas() {
  const res = await fetch(URL);
  return res.json();
}

export async function crearPersona(persona) {
  return fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(persona),
  });
}

export async function actualizarPersona(id, persona) {
  return fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(persona),
  });
}

export async function borrarPersona(id) {
  return fetch(`${URL}/${id}`, { method: "DELETE" });
}