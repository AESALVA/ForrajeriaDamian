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

  const [id,setId]=useState('');
  const [article, setArticle] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [disp, setDisp]=useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (articulo) => {setShow(true);
    setArticle(articulo.name);
    setDescription(articulo.description);
    setStock(articulo.quantity);
    setPrice(articulo.price);
    setDisp(articulo.disponibility);
    setId(articulo.id);
  };

  let Art = {}

  const SaveChanges = ()=>{
    Art = {id:id,name:article,description:description,quantity:stock,price:price,disponibility:disp}
    Articles.data.map((art,i)=>{if(art.id===Art.id){
      art = Art;
      Articles.data[i]=Art;
    }});
  }
const Delete = (articulo)=>{
Articles.data.map((art,i)=>{
 if(articulo.id===art.id){
  Articles.data.splice(i,1)
 } 
})
}


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
                  <NavLink className='Btns' onClick={()=>handleShow(articulo)}>Editar</NavLink>
                </td>
                <td>
                  <NavLink className='Btns text-danger' onClick={()=>Delete(articulo)} >Eliminar</NavLink>
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
            <input type="text" value={article} onChange={(e)=>setArticle(e.target.value)} />
          </div>
          <div className="Input">
            <label>Descripción</label>
            <input type="text"  value={description} onChange={(e)=>setDescription(e.target.value)} />
          </div>
          <div className="Input">
            <label>Cantidad en Stock</label>
            <input type="text"  value={stock} onChange={(e)=>setStock(e.target.value)}/>
          </div>
          <div className="Input">
            <label>Precio</label>
            <input type="text"  value={price} onChange={(e)=>setPrice(e.target.value)} />
          </div>
          <div className="Input">
            <label>Disponibilidad</label>
          <div className="Checkbox">
          <input type="checkbox" value={disp} checked={disp} onChange={()=>setDisp(!disp)} />
            <span>Hay Stock</span>
          </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="secondary" onClick={SaveChanges}>Guardar cambios</Button>  
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Managment;
