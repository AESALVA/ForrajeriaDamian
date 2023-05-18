import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  useUserContext,
  useLoadedContext,
  useValidationContext,
  useArticlesContext,
} from "../UserProvider";
import "../styles/managment.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Managment = () => {
  const Articles = useArticlesContext();
  const [show, setShow] = useState(false);
  const [articulo, setArticulo] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (id) => {setShow(true);console.log(id)};

  return (
    <div className="ContainerManagment">
      <div className="Managment">
        <h1>Administración</h1>
        <table>
          <thead>
            <tr>
              <th>Articulo</th>
              <th>Descripción</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>En Stock</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {Articles.data.map((articulo, i) => (
              <tr key={i}>
                <td>{articulo.name}</td>
                <td>{articulo.description}</td>
                <td>{articulo.quantity}</td>
                <td>{articulo.price}</td>
                <td>{articulo.disponibility?(<>SI</>):(<>NO</>)}</td>
                <td>
                  <NavLink onClick={()=>handleShow(articulo.id)}>Editar</NavLink>
                </td>
                <td>
                  <NavLink>Eliminar</NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="Input">
            <label>Nombre</label>
            <input type="text" />
          </div>
          <div className="Input">
            <label>Descripción</label>
            <input type="text" />
          </div>
          <div className="Input">
            <label>Cantidad en Stock</label>
            <input type="text" />
          </div>
          <div className="Input">
            <label>Precio</label>
            <input type="text" />
          </div>
          <div className="Input">
            <label>Disponibilidad</label>
            <Form.Check id="default" label="Disponible en Stock" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="secondary">Guardar cambios</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Managment;
