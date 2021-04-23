import React, { useRef } from "react";
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";
import background from "./image/explorer.png";
import './index.css';
import { useState } from 'react';
import explorerr from "./image/explorer.png";


class ComponentToPrint extends React.Component {
  render() {
    return (
   
      <h1></h1>
    );
  }
}
const Example = () => {

  const [nama, setNama] = useState('');
  const [level, setLevel] = useState('Level 1');
  const [challange, setChallange] = useState('Explorer');

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  return (
    <div >
      <ComponentToPrint ref={componentRef} />
      <div className="ComponentToPrint">
      <h2 clas>Sertifikat Generator</h2>
      <form>
        <label>Nama Lengkap</label>
        <input
          type="text"
          require
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <label>Pilih Level kamu</label>
        <select value={level}
          onChange={(e) => setLevel(e.target.value)}>
        <option value="level 1">  Level 1</option>
          <option value="level 2">Level 2</option>
          <option value="Ievel 3">Level 3</option>
          <option value="Ievel 4">Level 4</option>
          <option value="level 5">Level 5</option>
          <option value="level 6">Level 6</option>
          <option value="Ievel 7">Level 7</option>
        </select>
        <label>Pilih challange kamu</label>
        <select value={challange}
          onChange={(e) => setChallange(e.target.value)}>
          <option value="Explorer">Explorer</option>
          <option value="Inventor">Inventor</option>
          <option value="Wizard">Wizard</option>
        </select>


        <div className='App-div' ref ={componentRef}>
        <h1 className='App-H' ComponentToPrint ref={componentRef}>{nama}</h1>
        <p className= 'App-judul2'>{level}</p>
        <p className= 'App-judul3'>{challange}</p>
        <img ComponentToPrint ref={componentRef} src={explorerr} className='App-gambar'/>
      </div>

      </form>

    </div> <center>
    <button className="buttonPrint" onClick={handlePrint}>Generate Sertif !</button>
    </center>
    </div> 
  );

};

render(<Example />, document.querySelector("#root"));