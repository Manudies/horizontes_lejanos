import './modal.css'
import PropTypes from 'prop-types';


function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;


  return (
    <div className="modal">
      <div className="modal-content">
        <div id='boton'>
          <button id='buttonModal' onClick={onClose}>Cerrar</button>
        </div>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export {
  Modal
}

export default Modal



/*
ejemplo de uso:

import { useState } from 'react'
import '../App.css'
import './modal.css'
import Modal from './modal'
import { BuscarNombre } from '../api'

function BusquedaNombre() {
  const [img, setImg] = useState('')
  const [data,setData] = useState(null);
  const [rotuloFav,setRotuloFav] = useState('');
  let delIMG = document.getElementById('izquierda')

  let allFav = localStorage.getItem('favs')
  if (allFav == null) {
    localStorage.setItem('favs', '')
  }

  let listImg;
  
  async function buttonOnsubmitHandler(e) {
    e.preventDefault()
    delIMG.innerHTML = ''

    let nombre = e.target[0].value;
    let result = await BuscarNombre(nombre)
    result = await result.drinks

    listImg = await result.map((data) =>
      <div onClick={()=>{
        setData(data)
        revisar(data)}}>
        <p id='pNombre' key={data.strDrink}>{data.strDrink}</p>
        <img id='imgNombre' src={data.strDrinkThumb} key={data.strDrinkThumb} />
      </div>
    )
    setImg(listImg)
  } 


  function buttonDelete(e) {
    e.preventDefault()
    setImg('')
    delIMG.innerHTML = '<img src="/imgs/drink-4188629_1280.jpg" alt="bebida" className="imgIndex" />'
    let inputDel = document.getElementById('inputName')
    inputDel.value = ''
  }


  function onFavs(e) {
    let nameFav = e.target.value

    if (allFav.includes(nameFav)) {
      allFav = allFav.replace(`${nameFav},`,'')
      localStorage.setItem('favs', allFav)
      setRotuloFav('Añadir a favorito')
    } else {
      allFav = allFav + `${nameFav},`
      localStorage.setItem('favs', allFav)
      setRotuloFav('Quitar a favorito')
    }
  }


  function revisar(e) {
    let revisarFav = e.strDrink

    if (allFav.includes(revisarFav)) {
      setRotuloFav('Quitar a favorito')
    } else {
      setRotuloFav('Añadir a favorito')
    }
 }

  
    return (
      <div>
        <form onSubmit={buttonOnsubmitHandler}>
          <div>
            <h3>Nombre de cocktail</h3>
            <label htmlFor="nombre" />
            <input id='inputName' type='text' placeholder='Todos' name='nombre' />
          </div>
          <br />  
          <div>
            <input id="buttonFind" className='buttonName' type="submit" value="Buscar" />
            <input id="buttonDelete" className='buttonName' type='button' value="Borrar" onClick={buttonDelete} />
          </div>
        </form>
        <br />
        <br />

        {data &&
          <Modal isOpen={true} onClose={()=> {
            setData(null)
            setRotuloFav('Favorito')}}>
            <div id="modalNombre">
              <div id="divModalNombre">
                <h1 id='h1Modal'>{data.strDrink}</h1>
                <h4>Category: {data.strCategory}</h4>
                <p>{data.strInstructions}</p>
              </div>
              <div id='modalInferior'>
                <div id='divModalIngredientes'>
                  <h3>Ingredients</h3>
                  <p>{data.strIngredient1}    {data.strMeasure1}</p>
                  <p>{data.strIngredient2}    {data.strMeasure2}</p>
                  <p>{data.strIngredient3}    {data.strMeasure3}</p>
                  <p>{data.strIngredient4}    {data.strMeasure4}</p>
                  <p>{data.strIngredient5}    {data.strMeasure5}</p>
                  <p>{data.strIngredient6}    {data.strMeasure6}</p>
                  <p>{data.strIngredient7}    {data.strMeasure7}</p>
                  <p>{data.strIngredient8}    {data.strMeasure8}</p>
                  <button id='buttonFav' value={data.strDrink} onClick={onFavs}>{rotuloFav}</button>
                </div>
                <div id="divModalIMG">
                  <img src={data.strDrinkThumb} />
                </div>
              </div>
            </div>
          </Modal>
        }
        
        <div id='div-img'>
          {img}
        </div>  
      </div>
    )
  }


  export {
    BusquedaNombre
  }

*/