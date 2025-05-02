import React from "react";
import { useNavigate } from "react-router-dom"; // Importando o hook useNavigate
import { LuLayoutDashboard } from "react-icons/lu";
import "./sidebar.css";

function Sidebar() {
  const navigate = useNavigate(); 

  return (
    <div className="barra-lateral">
      <h3 className="titulo-menu">Menu</h3>

      <button
        className="item-menu"
        onClick={() => navigate("/")} 
      >
        <LuLayoutDashboard /> Home
      </button>

      <button
        className="item-menu"
        onClick={() => navigate("/dashboard")} 
      >
        <LuLayoutDashboard /> Dashboard
      </button>
    </div>
  );
}

export default Sidebar;