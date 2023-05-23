import React, { useState } from "react";
import "../styles/navbar.css";
import Logo from "../assets/petShopLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars,faX,faCartShopping,faUsers,faEnvelope,faUser,faNewspaper,faHouse,faShoppingCart,} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import {useUserContext,useLoadedContext,useValidationContext,useArticlesContext,} from "../UserProvider";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const NavBar = () => {
  const Articles = useArticlesContext();
  const auth = useUserContext();

  const [menuResponsive, setMenuResponsive] = useState("NavListResponsive");
  const handleMenu = () => {
    if (menuResponsive === "NavListResponsive") {
      setMenuResponsive("NavListResponsiveShow");
    } else {
      setMenuResponsive("NavListResponsive");
    }
  };
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Cerrar Sesión
    </Tooltip>
  );

  return (
    <>
      <div className="navbar">
        <NavLink className="Logo">
          <img src={Logo} alt="Logo" />
        </NavLink>
        <div className="Title">
          <h1>Tienda de Mascotas Odi</h1>
        </div>
        <ul className="ul">
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/products">Productos</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contacto</NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              Carrito
              {Articles.cart[0] && (
                <>
                  <span className="CartSpan">{Articles.cart.length}</span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            {!auth.auth.name ? (
              <>
                <NavLink to="/Login">
                  Iniciar Sesión
                </NavLink>
              </>
            ) : (
              <OverlayTrigger
                key="login"
                placement="bottom"
                overlay={renderTooltip}
               
              >
                <NavLink  className="Username" onClick={auth.logout}><FontAwesomeIcon  icon={faUser} />{'  '}{auth.auth.name}</NavLink>
              </OverlayTrigger>
            )}
          </li>
        </ul>
        <div className="barsMenu">
          {menuResponsive === "NavListResponsive" ? (
            <FontAwesomeIcon icon={faBars} onClick={handleMenu} />
          ) : (
            <FontAwesomeIcon icon={faX} onClick={handleMenu} />
          )}
        </div>
        <ul className={menuResponsive}>
          <li>
            <NavLink to="/">
              <FontAwesomeIcon icon={faHouse} /> Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/products">
              <FontAwesomeIcon icon={faNewspaper} /> Productos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FontAwesomeIcon icon={faEnvelope} /> Contacto
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <FontAwesomeIcon icon={faUsers} /> Sobre Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} /> Carrito
              {Articles.cart[0] && (
                <>
                  <span className="CartSpan">{Articles.cart.length}</span>
                </>
              )}
            </NavLink>
          </li>
          <li>
          {!auth.auth.name ? (
              <>
                <NavLink to="/Login">
                  Iniciar Sesión
                </NavLink>
              </>
            ) : (
              <OverlayTrigger
                key="login"
                placement="bottom"
                overlay={renderTooltip}
               
              >
                <NavLink  className="Username" onClick={auth.logout}><FontAwesomeIcon  icon={faUser} />{'  '}{auth.auth.name}</NavLink>
              </OverlayTrigger>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
