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
  const Load = useLoadedContext();

  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [del, setDel] = useState({});

  const [id, setId] = useState("");
  const [article, setArticle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg]= useState('');
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [disp, setDisp] = useState(false);
  const [title, setTitle]=useState('');
  const [category, setCategory]=useState('');
  const [subcategory, setSubcategory]=useState('');
  const [type, setType]=useState('');

  const handleClose = () => setShow(false);
  const handleShow = (articulo) => {
    setShow(true);
    setArticle(articulo.name);
    setDescription(articulo.description);
    setStock(articulo.quantity);
    setPrice(articulo.price);
    setDisp(articulo.disponibility);
    setId(articulo.id);
    setImg(articulo.img);
    setTitle(articulo.title);
    setCategory(articulo.category);
    setSubcategory(articulo.subcategory);
    setType(articulo.type);
  };

  let Art = {};

  const SaveChanges = () => {
    Art = {
      id: id,
      name: article,
      description: description,
      title:title,
      category:category,
      subcategory:subcategory,
      type:type,
      quantity: stock,
      price: price,
      disponibility: disp,
      img:img
    };
    Articles.data.map((art, i) => {
      if (art.id === Art.id) {
        art = Art;
        Articles.data[i] = Art;
      }
    });
  };

  const DelProd = () => {
    Articles.data.map((art, i) => {
      if (del.id === art.id) {
        Articles.data.splice(i, 1);
      }
    });
  };

  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = (articulo) => {
    setShowDelete(true);
    setDel(articulo);
  };

  return (
    <div className="ContainerManagment">
      <div className="Managment">
        <h1>Administración</h1>
        <table>
          <thead>
            <tr>
              <th>Articulo</th>
              <th className="DescripManagment">Descripción</th>
              <th className="DescripManagment">Cantidad</th>
              <th>Precio</th>
              <th className="DescripManagment">En Stock</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {Articles.LISTA.map((articulo, i) => (
              <tr key={i}>
                <td>{articulo.name}</td>
                <td className="DescripManagment">{articulo.description}</td>
                <td className="DescripManagment">{articulo.quantity}</td>
                <td>{articulo.price}</td>
                <td className="DescripManagment">{articulo.disponibility ? <>SI</> : <>NO</>}</td>
                <td>
                  <NavLink
                    className="Btns"
                    onClick={() => handleShow(articulo)}
                  >
                    Editar
                  </NavLink>
                </td>
                <td>
                  <NavLink
                    className="Btns text-danger"
                    onClick={() => handleShowDelete(articulo)}
                  >
                    Eliminar
                  </NavLink>
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
            <input
              type="text"
              value={article}
              onChange={(e) => setArticle(e.target.value)}
            />
          </div>
          <div className="Input">
            <label>Descripción</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="Input">
            <label>Cantidad en Stock</label>
            <input
              type="text"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <div className="Input">
            <label>Precio</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="Input">
            <label>Disponibilidad</label>
            <div className="Checkbox">
              <input
                type="checkbox"
                value={disp}
                checked={disp}
                onChange={() => setDisp(!disp)}
              />
              <span>Hay Stock</span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="secondary" onClick={SaveChanges}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showDelete}
        onHide={handleCloseDelete}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Eliminar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>Esta seguro desea eliminar este producto ?.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            Close
          </Button>
          <Button onClick={() => DelProd()} variant="danger">
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Managment;
