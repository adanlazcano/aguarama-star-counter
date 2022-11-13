import { Link } from "react-router-dom";
import "./css/header.scss";
import { Close, ExitToApp, HelpOutline, Search } from "@material-ui/icons";
import { useState, useRef } from "react";
import Sidebar from "../sidebar/Sidebar";
import Main from "../main/Main";
import Advice from "../advice/Advice";
import * as services from "../../services/services";

// Top Bar Header

const Topbar = () => {
  const [search, setSearch] = useState("");

  const inputSearch = useRef();
  const inputNombre = useRef();
  const inputCel = useRef();

  const handleToggleRegister = (e) => {
    document
      .querySelector(".headerRegisterContainer")
      .classList.toggle("active");
    document.querySelectorAll(".inputRegister").forEach((el) => {
      el.style.border = "none";
    });
    inputNombre.current.value = "";
    inputCel.current.value = "";
    document.querySelector(".messageRegister").innerText = "";
  };

  const handleChangeSearch = (_) => {
    document.querySelector(".headerSearch").classList.toggle("active");
    document.querySelector(".headerSearchInput").focus();
  };

  const handleToggleAdvice = (_) => {
    document
      .querySelector(".headerAdviceContainer")
      .classList.toggle("inactive");
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setSearch(inputSearch.current.value.trim());
    inputSearch.current.value = "";
  };

  const handlePress = (e) => {
    return (e.target.value = e.target.value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*?)\..*/g, "$1"));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    document.querySelector(".messageRegister").innerText = "";
    document.querySelectorAll(".inputRegister").forEach((el) => {
      el.style.border = "none";
    });

    if (inputNombre.current.value && inputCel.current.value) {
      if (inputCel.current.value.length === 10) {
        try {
          const newClient = {
            nombre: inputNombre.current.value,
            cel: inputCel.current.value,
          };

          await services.createClient(newClient);

          document.querySelector(".messageRegister").innerText = "";
          setSearch(inputCel.current.value);
          inputNombre.current.value = "";
          inputCel.current.value = "";
          document
      .querySelector(".headerRegisterContainer")
      .classList.remove("active");
        } catch (error) {
          let mensaje = (error.message = "Registrado anteriormente");
          document.querySelector(".messageRegister").style.color = "red";
          document.querySelector(".messageRegister").innerText = mensaje;
        }
      } else {
        document.querySelector(".inputCel").style.border = "1px solid red";
        document.querySelector(".messageRegister").style.color = "tomato";
        document.querySelector(".messageRegister").innerText =
          "Teclee 10 digitos";
      }
    } else {
      document.querySelectorAll(".inputRegister").forEach((el) => {
        if (el.value === "") {
          el.style.border = "1px solid red";
        }
      });
      document.querySelector(".messageRegister").style.color = "red";
      document.querySelector(".messageRegister").innerText =
        "* Completa los campos";
    }
  };

  return (
    <>
      <header className="header">
        <div className="headerLogo">
          <Link to="/dashboard">
            <img src="assets/img/logo.png" alt="" />
          </Link>
        </div>
        <ul>
          <li className="headerRegister">
            <span onClick={handleToggleRegister} className="headerSpan">
              Registro
            </span>
            <div className="headerRegisterContainer">
              <Close
                onClick={handleToggleRegister}
                className="headerRegisterContainerClose"
              />

              <form onSubmit={handleRegister}>
                <input
                  className="inputRegister"
                  ref={inputNombre}
                  maxLength="100"
                  type="text"
                  placeholder="Nombre"
                />
                <input
                  className="inputRegister inputCel"
                  type="text"
                  onInput={handlePress}
                  maxLength="10"
                  ref={inputCel}
                  placeholder="N&uacute;mero de Tel&eacute;fono"
                />
                <button type="submit">Guardar</button>
                <span className="messageRegister"></span>
              </form>
            </div>
          </li>
          <li title="Buscar Participantes" className="headerSearch">
            <Search onClick={handleChangeSearch} className="headerSearchIcon" />
            <form onSubmit={handleSubmitSearch}>
              <input
                ref={inputSearch}
                maxLength="10"
                className="headerSearchInput"
                type="search"
                placeholder="Número de Teléfono"
              />
            </form>
          </li>
        </ul>
        <HelpOutline
          onClick={handleToggleAdvice}
          titleAccess="Ayuda"
          className="headerIconHelp"
        />
        <img
          className="headerImgLogin"
          src="https://www.licor.com/fluxsuite/images/demo.png"
          alt=""
          title="Hola Demo"
        />
        <Link to="/">
          <ExitToApp
            titleAccess="Cerrar Sesi&oacute;n"
            style={{ fontSize: "26px", marginTop: "5px", cursor: "pointer" }}
            htmlColor="tomato"
          />
        </Link>
      </header>

      <Advice />

      <Sidebar search={search} />

      <Main search={search} />
    </>
  );
};

export default Topbar;
