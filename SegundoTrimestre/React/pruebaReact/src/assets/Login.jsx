export default function Login() {
    var titulo = "Login";
    var contenido;
    var estaLogeado = false;
    if (estaLogeado) {
        contenido = <h1>Bienvenido {localStorage.getItem("nombre")}</h1>;
    } else {
        contenido = <h1>Bienvenido</h1>;
    }
    return (
        <div>
            <h1>{titulo}</h1>
            {contenido}
        </div>
    )

}