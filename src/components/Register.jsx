import React, { useEffect, useState } from "react";
import "../styles/register.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RegistroImg from "../assets/registroImg.png";
import RegistroImgMobile from "../assets/RegistroImgMobile.png";
import {
  useUserContext,
  useLoadedContext,
  useValidationContext,
} from "../UserProvider";
import Loader from "./Loader";

const Register = () => {
  const auth = useUserContext();
  const navigate = useNavigate();

  const Load = useLoadedContext();

  const Validation = useValidationContext();

  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [eye, setEye] = useState(false);
  const [eyeTwo, setEyeTwo] = useState(false);
  const [showPass, setShowPass] = useState("password");
  const [showPassTwo, setShowPassTwo] = useState("password");

  const [firstName, setFirstName] = useState(true);
  const [firstPassword, setFirstPassword] = useState(true);
  const [firstMail, setFirstMail] = useState(true);
  const [wrongCredentials, setWrongCredentials] = useState("");
  const [message, setMessage] = useState("");

  const handleEye = () => {
    if (eye === false) {
      setEye(true);
      setShowPass("text");
    } else {
      setEye(false);
      setShowPass("password");
    }
  };

  const handleEyeTwo = () => {
    if (eyeTwo === false) {
      setEyeTwo(true);
      setShowPassTwo("text");
    } else {
      setEyeTwo(false);
      setShowPassTwo("password");
    }
  };

  const handleClick = () => {
    Load.setIsLoaded(true);
    if (
      Validation.validateName(name) &&
      Validation.validateMail(mail) &&
      Validation.validatePassword(password) &&
      password === confirmPass
    ) {
      auth.setAuth({ name: name, role: "user" });
      auth.addUser({
        name: name,
        mail: mail,
        password: password,
        role: "user",
      });
      navigate("/");
    } else {
      setMessage("Debe completar el formulario");
      Load.setIsLoaded(false);
    }
  };

  useEffect(() => {
    setWrongCredentials("");
    password !== confirmPass && setWrongCredentials("Contraseñas no coinciden");
  }, [confirmPass]);

  useEffect(() => {
    setMessage("");
  }, [name, mail, password]);

  useEffect(() => {
    if (auth.auth.role) {
      navigate("/");
    }
  }, [auth.auth]);

  return (
    <div className="ContainerRegister">
      <div className="Register">
        <div className="ImgRegister">
          <img src={RegistroImg} alt="registroImg" />
        </div>
        <div className="CardRegister">
          <h2>Registro</h2>
          <span className="text-danger d-flex justify-content-center">
          {message}
        </span>
          <div className="ImgRegisterMobile">
            <img src={RegistroImgMobile} alt="registroImg" />
          </div>
          <form className="FormRegister">
            <div className="InputRegister">
              <label>
                {" "}
                <FontAwesomeIcon icon={faUser} /> Nombre de Usuario{" "}
                {!Validation.validateName(name) && !firstName && (
                  <span className="text-danger">Completar</span>
                )}
              </label>
              <input
                type="text"
                value={name}
                onInput={(e) => setName(e.target.value)}
                onBlur={() => setFirstName(false)}
                required
                maxLength={50}
                placeholder="JulioDamian"
              />
              <span className="Conditions">
                Al menos una letra mayúscula, sin números
              </span>
            </div>
            <div className="InputRegister">
              <label>
                {" "}
                <FontAwesomeIcon icon={faEnvelope} /> Email{" "}
                {!Validation.validateMail(mail) && !firstMail && (
                  <span className="text-danger">Completar</span>
                )}
              </label>
              <input
                type="mail"
                required
                maxLength={40}
                placeholder="Damian@TiendaDeMascotas.com"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                onBlur={() => setFirstMail(false)}
              />
              <span className="Conditions"></span>
            </div>
            <div className="InputRegister">
              <label>
                {" "}
                <FontAwesomeIcon icon={faLock} /> Contraseña{" "}
                {!Validation.validatePassword(password) && !firstPassword && (
                  <span className="text-danger">Completar</span>
                )}
                <span className="text-danger">{wrongCredentials}</span>
              </label>
              <div className="InputRegisterTwo">
              <input
                type={showPass}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setFirstPassword(false)}
                required
                maxLength={30}
                placeholder="Damian9"
              />
              <span onClick={handleEye} className="EyeRegister">
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
              <span className="Conditions">
                Al menos una letra mayúscula, una minúscula y un número
              </span>
            </div>
            <div className="InputRegister">
              <label>
                {" "}
                <FontAwesomeIcon icon={faLock} /> Repetir Contraseña{" "}
                {!Validation.validatePassword(confirmPass) &&
                  !firstPassword && (
                    <span className="text-danger">Completar</span>
                  )}
                <span className="text-danger">{wrongCredentials}</span>
              </label>
              <div className="InputRegisterTwo">
              <input
                type={showPassTwo}
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                onBlur={() => setFirstPassword(false)}
                required
                maxLength={30}
                placeholder="Damian9"
              />
               <span onClick={handleEyeTwo} className="EyeRegister">
              {!eyeTwo ? (
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
            </div>
            <NavLink onClick={() => handleClick()} className="RegisterBtn">
              {Load.isLoaded ? <Loader /> : "Registrarse"}
            </NavLink>
            <div className="LoginRegister">
              Ya tienes cuenta?<NavLink to="/login"> Iniciar Sesión</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
