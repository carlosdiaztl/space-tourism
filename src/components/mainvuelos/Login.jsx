import React, { useState } from "react";
import "./style.scss";
import Swal from "sweetalert2";
import { useNavigate, Link, Outlet } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { searchFligths } from "../services/getflight";


const Login = () => {
  const navigate = useNavigate()
  const [dataForm, handleChangeInput ] = useForm({
    origen: "",
    destino: "",
    salidaDate: "",
    regresoDate: "",
    pasajeros: "",
  });
  // useEffect(() => {
  //   filterFligth()
    
  // }, [handleSubmit]);
  const initialVuelos=[]
  const [vuelos, setVuelos] = useState(initialVuelos)
  const filterFligth =async(dataForm)=>{
    const vuelosFiltrados= await searchFligths(dataForm)
    
    if (vuelosFiltrados.length) {
      console.log(vuelosFiltrados);
      
      
      navigate('/vuelos')
    }else{
      Swal.fire(
        'upps',
        'No se encontraron vuelos!',
        'error'
      )
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(dataForm);
    if (
      dataForm.origen !== "" &&
      dataForm.destino !== "" &&
      dataForm.salidaDate !== "" &&
      dataForm.regresoDate !== "" &&
      dataForm.pasajeros !== ""
    ) {
      console.log("se puede continuar");
      await filterFligth(dataForm)
    } else {
      console.log("llene los datos porfavor");
    }
  };

  return (
    <div className="vuelos">
      <h1>Vuelos</h1>
      <form className="vuelos__form" onSubmit={handleSubmit}>
        <span>
          <h6>Origen</h6>
          <select name="origen" onChange={handleChangeInput}>
            <option value="">---</option>
            <option value="medellin"> Medellin</option>
            <option value="monteria"> Monteria</option>
          </select>
        </span>
        <span>
          <h6>Seleccion un destino</h6>
          <select name="destino" onChange={handleChangeInput}>
            <option value="">---</option>
            <option value="medellin"> Medellin</option>
            <option value="monteria"> Monteria</option>
          </select>
        </span>
        <span>
          <h6>Salida</h6>
          <input
            onChange={handleChangeInput}
            type="date"
            name="salidaDate"
            className="main_form_control"
            aria-label="Fecha"
            aria-describedby="date"
            min="2022-10-16"
            max="2022-10-16"
          />
        </span>
        <span>
          <h6>Regreso</h6>
          <input
            onChange={handleChangeInput}
            type="date"
            name="regresoDate"
            className="main_form_control"
            aria-label="Fecha"
            aria-describedby="date"
            min="2022-10-16"
            max="2022-10-16"
          />
        </span>
        <span>
          <h6>Pasajeros</h6>
          <select name="pasajeros" onChange={handleChangeInput}>
            <option value="">---</option>
            <option value="1"> 1 Adulto</option>
            <option value="2"> 2 Adulto</option>
            <option value="3"> 3 Adulto</option>
            <option value="4"> 4 Adulto</option>
          </select>
        </span>
        <span>
          {" "}
          <h6>¿Tienes un código de promoción?</h6>
          <input
            type="text"
            style={{ marginLeft: "5px" }}
            placeholder="-- -- -- --"
          />
        </span>
        <button type="submit">
          {" "}
          <p>Buscar vuelos </p>{" "}
        </button>
      </form>

      <Link to="home">home </Link>
    </div>
  );
};

export default Login;
