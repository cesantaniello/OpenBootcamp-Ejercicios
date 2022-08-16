const miNombre = 'Carlos';
const miApellido = 'Santaniello';

miNombreCompleto = {
    nombre: miNombre,
    apellido: miApellido
};

//Almacena objeto en la sessionStorage
//sessionStorage.setItem('miNombreCompleto', JSON.stringify(miNombreCompleto));

//Almacena objeto en la localStorage
//localStorage.setItem('miNombreCompleto', JSON.stringify(miNombreCompleto));

//Crea cookie con los datos del objeto
//document.cookie = 'miNombreCompleto= + JSON.stringify(miNombreCompleto); expires=Thu, 18 Aug 2022 11:57:00 UTC';