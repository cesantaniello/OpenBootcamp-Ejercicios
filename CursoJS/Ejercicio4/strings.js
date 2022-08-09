let miNombre = "Carlos";
let miApellido = "Santaniello";

let estudiante = `    ${miNombre} ${miApellido}     `;

let estudianteMayus = estudiante.toUpperCase();

let estudianteMinus = estudiante.toLowerCase();

let longitudEstudiante = estudiante.length;

let inicialNombre = miNombre.slice(0, 1);

let ultimaLetraApellido = miApellido.slice(-1);

let nombreCompleto = estudiante.trim();

let esNombreIncluido = estudiante.includes("Carlos");