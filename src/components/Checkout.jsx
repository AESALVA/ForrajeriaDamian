import React, { useEffect, useState } from "react";
import "../styles/checkout.css";
import {useUserContext,useLoadedContext,useValidationContext,useArticlesContext,} from "../UserProvider";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope,faLock,faEye,faEyeSlash,} from "@fortawesome/free-solid-svg-icons";
import Loader from "./Loader";

const Checkout = () => {
  const Articles = useArticlesContext();
  const auth = useUserContext();
  const Load = useLoadedContext();
  const Validation = useValidationContext();

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [number, setNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [message, setMessage] = useState('');


  const [firstName, setFirstName] = useState(true);
  const [firstLastname, setFirstLastname] = useState(true);
  const [firstMail, setFirstMail] = useState(true);
  const [firstPhone, setFirstPhone] = useState(true);
  const [firstAdress, setFirstAdress] = useState(true);
  const [firstNumber, setFirstNumber] = useState(true);
  const [firstDepartment, setFirstDepartment] = useState(true);

  const DelProduct = (id) => {
    Articles.setCart(Articles.cart.filter((d) => d.id !== id));
  };

  return (
    <div className="ContainerCheckout">
      <div className="Checkout">
        <h2>Detalle de Compra</h2>
        <table>
          <thead>
            <tr>
              <th>Articulo</th>
              <th className="Descrip">Descripción</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Articles.cart.map((articulo, i) => (
              <tr key={i}>
                <td>{articulo.name}</td>
                <td className="Descrip">{articulo.description}</td>
                <td className="UpDownContainer">{articulo.quantity}</td>
                <td>{articulo.price}</td>
                <td>
                  <NavLink
                    onClick={() => DelProduct(articulo.id)}
                    className="DelProduct"
                  >
                    X
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="TitleForm">Formulario de Compra</h2>
        <form className="CheckoutForm">
          <div className="Personal">
            <h3 className="PersonalTitle">Información Personal</h3>
            {<span className="text-danger">{message}</span>}
            <div className="PersonalColumn">
              <div className="InputColumn">
                <div className="InputCheckout">
                  <label>Nombre del comprador</label>
                  <input type="text" value={name} required placeholder="Damian" onChange={(e)=>setName(e.target.value)} onBlur={()=>setFirstName(false)} />
                  {!Validation.validateName(name) && !firstName && (
                  <span className="text-danger">Completar</span>
                )}
                </div>
                <div className="InputCheckout">
                  <label>Apellido del comprador</label>
                  <input type="text" value={lastname} required placeholder="FalsoNueve" onChange={(e)=>setLastname(e.target.value)} onBlur={()=>setFirstLastname(false)} />
                  {!Validation.validateName(lastname) && !firstLastname && (
                  <span className="text-danger">Completar</span>
                )}
                </div>
                <div className="InputCheckout">
                  <label>Email del comprador</label>
                  <input type="email" value={mail} required placeholder="Damian@TiendaDeMascotas.com" onChange={(e)=>setMail(e.target.value)} onBlur={()=>setFirstMail(false)} />
                  {!Validation.validateMail(mail) && !firstMail && (
                  <span className="text-danger">
                    Completar 
                  </span>
                )}
                </div>
              </div>
              <div className="InputColumn">
                <div className="InputCheckout">
                  <label>Telefono de contacto</label>
                  <input type="tel" value={phone} required placeholder="3813319943" onChange={(e)=>setPhone(e.target.value)} onBlur={()=>setFirstPhone(false)}/>
                </div>
                <div className="InputCheckout">
                  <label>Dirección</label>
                  <input type="text" value={adress} required placeholder="Calle Elm" onChange={(e)=>setAdress(e.target.value)} onBlur={()=>setFirstAdress(false)}/>
                  {!Validation.validateName(adress) && !firstAdress && (
                  <span className="text-danger">Completar</span>
                )}
                </div>
                <div className="InputCheckout">
                  <label>Número</label>
                  <input type="number" value={number} required placeholder="123" onChange={(e)=>setNumber(e.target.value)} onBlur={()=>setFirstNumber(false)}  />
                </div>
                <div className="InputCheckout">
                  <label>Departamento/Piso</label>
                  <input type="text" value={department} required placeholder="2 B" onChange={(e)=>setDepartment(e.target.value)} onBlur={()=>setFirstDepartment} />
                  {!Validation.validateName(department) && !firstDepartment && (
                  <span className="text-danger">Completar</span>
                )}
                </div>
              </div>
            </div>
          </div>
          <div className="Summary">
            <h3>Orden de Compra</h3>
            <div className="Line">
              <p>Tus items</p>
              <p>$32532332</p>
            </div>
            <div className="Line">
              <p>Envío</p>
              <p>$3253</p>
            </div>
            <div className="Line">
              <p>Total</p>
              <p>$3253</p>
            </div>
            <div className="BtnCheckout">
              <NavLink>Finalizar Compra</NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
