import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
import { Spinner } from "react-bootstrap";
function Login() {
  const { setCargando, cargando } = useAuthStore();
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      const data = await login({ email, password });
      if (data.success) {
        setTimeout(() => {
          setCargando();
          navigate("/home");
        }, 1000);
      } else {
        setCargando();
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = "Usuario o contraseña incorrectos";
      }
    } catch (error) {
      console.error(error);
      setCargando();
    }
  };

  return (
    <Form
      className="d-flex flex-column w-75 form-login"
      onSubmit={handleSubmit}
    >
      <h1 className="login-titulo">Login</h1>
      <Form.Group
        className="justify-content-center my-3"
        controlId="form-email"
      >
        <Form.Control type="email" placeholder="Ingrese su correo" />
      </Form.Group>
      <Form.Group className="">
        <Form.Control type="password" placeholder="Ingrese su contraseña" />
      </Form.Group>
      <div className="my-3 d-flex gap-2 justify-content-center">
        <Button type="submit" className="btn-primary">
          Ingresar
        </Button>
        <Button
          type="button"
          className="btn-primary"
          onClick={() => navigate("/register")}
        >
          Register
        </Button>
      </div>
      <div>
        {cargando ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          ""
        )}
      </div>
      <div id="resultado"></div>
    </Form>
  );
}

export default Login;
