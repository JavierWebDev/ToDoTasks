const URL_API = "http://localhost:3000/"

const myHeaders = new Headers({
    "Content-Type": "application/json"
});

const postTask = async (datos) => {
    try {
        return await fetch(`${URL_API}/tasks`, {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(datos)
        });
    } catch (error) {
        console.error('Error en la solicitud POST:', error.message);
    }
}