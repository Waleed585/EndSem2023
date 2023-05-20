import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
import Form from "../Form";

const MainDash = ({title}) => {
  return (
    <div className="MainDash">
      <h1 style={{textTransform: 'capitalize'}}>{title}</h1>
      {title === 'dashboard' && <Cards />}
      {title === 'dashboard' && <Table />}
      {title === 'test' && <Form />}
    </div>
  );
};

export default MainDash;
