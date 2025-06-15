import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
function Register() {
  const { register } = useAuthStore();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let registroNombre = e.target[0];
    let registroEmail = e.target[1];
    let registroPassword = e.target[2];
    const respuesta = await register(
      registroNombre.value.trim(),
      registroEmail.value.trim(),
      registroPassword.value.trim()
    );
    registroNombre.value = "";
    registroEmail.value = "";
    registroPassword.value = "";
    if (respuesta.success) {
      document.querySelector("#resultado").innerHTML = `Registro exitoso`;
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      document.querySelector("#resultado").innerHTML = `Error al registrarse`;
    }
  };
  return (
    <>
    <h1 className="text-center fw-bold">Registro</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicNombreUsuario">
        <Form.Label>Nombre de usuario</Form.Label>
        <Form.Control type="text" placeholder="Nombre de usuario..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email..." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>
      <div className="d-flex gap-2">
        <Button variant="primary" type="submit">
          Registrarme
        </Button>
        <Button variant="primary" type="button" onClick={() => navigate("/")}>
          Ingresar
        </Button>
      </div>
      <div id="resultado"></div>
    </Form>
    </>
  );
}
export default Register;
