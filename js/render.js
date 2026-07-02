// js/render.js — motor de renderizado desde JSON

export async function cargarDatos(ruta) {
  const respuesta = await fetch(ruta);
  if (!respuesta.ok) throw new Error(`No se pudo cargar ${ruta}`);
  return respuesta.json();
}

export function tarjetaMateria({ nombre, docente }) {
  const article = document.createElement('article');
  article.className = 'tarjeta-materia';
  article.innerHTML = `
    <h3>${nombre}</h3>
    <p>${docente}</p>
  `;
  return article;
}