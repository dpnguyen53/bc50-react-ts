import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Product from "./Product";
import ListProduct from "./components/ListProduct";

function App(): JSX.Element {
  const [isShow, setIsShow] = useState<boolean>(true);

  const handleHidden = (): void => {
    setIsShow(false);
  };

  const handleShow = (): void => {
    setIsShow(true);
  };

  const handleAlertName = (name: string): void => {
    alert(name);
  };

  return (
    <div>
      <button onClick={handleHidden}>HIDDEN</button>
      <button onClick={handleShow}>SHOW</button>
      {isShow && <p>BC50 REACT TYPESCRIPT</p>}
      <Product
        name="IPhone 13"
        price={3000}
        handleAlertName={handleAlertName}
        handleHidden={handleHidden}
        handleShow={handleShow}
      />

      <hr />
      <ListProduct />
    </div>
  );
}

export default App;
