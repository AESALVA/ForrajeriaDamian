import React, { useEffect, useState } from "react";
import "../styles/login.css";
import imgLogin from "../assets/landing2.png";
import { NavLink, useNavigate } from "react-router-dom";
import {faEnvelope,faLock,faEye,faEyeSlash,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgLoginMobile from "../assets/LoginMobile.png";
import {
  useUserContext,
  useLoadedContext,
  useValidationContext,
} from "../UserProvider";
import Loader from "./Loader";

const Login = () => {

  const auth = useUserContext();
  const navigate = useNavigate();
  const Load = useLoadedContext();
  const Validation = useValidationContext();

  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [firstPassword, setFirstPassword] = useState(true);
  const [firstMail, setFirstMail] = useState(true);
  const [wrongCredentials, setWrongCredentials] = useState("");
  const [eye, setEye] = useState(false);
  const [showPass, setShowPass] = useState("password");

  const handleClick = () => {
    Load.setIsLoaded(true);
    Validation.validateLogin(mail, password);
    auth.login(mail, password);
  };

  const handleEye = () => {
    if (eye === false) {
      setEye(true);
      setShowPass("text");
    } else {
      setEye(false);
      setShowPass("password");
    }
  };

  useEffect(() => {
    setWrongCredentials("");
  }, [mail, password]);

  useEffect(() => {
    if (auth.auth.role) {
      navigate("/");
    }
    if (auth.auth.role === false) {
      setWrongCredentials("Credenciales incorrectas!");
    }
  }, [auth.auth]);

  return (
    <div className="ContainerLogin">
      <div className="Login">
        <div className="CardLogin">
          <h2>Iniciar Sesión</h2>
          <form className="FormLogin">
            <div className="InputLogin">
              <label>
                <FontAwesomeIcon icon={faEnvelope} /> Email{' '}{!Validation.validateMail(mail) && !firstMail && (
                  <span className="text-danger">
                    Completar 
                  </span>
                )}
              </label>
              <input
                placeholder="Damian@TiendaDeMascotas.com"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                onBlur={() => setFirstMail(false)}
                required
                maxLength={50}
              />
            </div>
            <div className="InputLogin">
              <label>
                <FontAwesomeIcon icon={faLock} /> Contraseña{" "}
                {!Validation.validatePassword(password) && !firstPassword && (
                  <span className="text-danger">
                    Completar
                  </span>
                )}
              </label>
              <input
                type={showPass}
                placeholder="Damian9"
                required
                maxLength={30}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setFirstPassword(false)}
              />
               <span onClick={handleEye} className="Eye">
                {!eye ? (
                  <>
                    <FontAwesomeIcon icon={faEyeSlash} />
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faEye} />
                  </>
                )}
              </span>
            </div>
            <span className="text-danger d-flex justify-content-center">
              {wrongCredentials}
            </span>
            <div className="imgLoginMobile">
              <img src={imgLoginMobile} alt="imgLogin" />
            </div>
            <NavLink onClick={() => handleClick()}  className="LoginBtn">{Load.isLoaded ? (
                  <>
                    <Loader />
                  </>
                ) : (
                  "Ingresar"
                )}</NavLink>
            <div className="LoginRegister">
              No tienes cuenta?<NavLink to="/register"> Registrate</NavLink>
            </div>
            <div className="forgotpass">
              <NavLink to="/forgotPass">Olvidaste tu contraseña?</NavLink>
            </div>
          </form>
        </div>
        <div className="imgLogin">
          <img src={imgLogin} alt="imgLogin" />
        </div>
      </div>
    </div>
  );
};

export default Login;
