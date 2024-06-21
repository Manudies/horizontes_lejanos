import ActionButton from "../../components/actionButton/actionButton";
import { createTrip, update } from "../../utils/fetch";
import "./CreateTrips.css"
const CreateTrip = ({onCreate, onUpdate, trip=null})=>{

    const handleSubmit =async (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const descripcion = e.target.descripcion.value;
        const destino = e.target.destino.value;
        const duracion = e.target.duracion.value;
        const precio = e.target.precio.value;
        const imagen = e.target.imagen.value;
        //const itinerario = e.target.itinerario.value;
        //const data = {name,descripcion,destino,duracion,precio,imagen,itinerario};
        const data = {name,descripcion,destino,duracion,precio,imagen};
        if(trip === null){
            console.log("nuevo viaje",data)
            const result = await createTrip(data);
            console.log("result",result)
            onCreate(result.data);
        }
        else{
            console.log("viaje existente",data)
            const result = await update(trip._id,data);
            console.log("result",result)
            onUpdate(result.data);
        }
    
    }
    return (
        <form action="" className="create-category" onSubmit={handleSubmit}>
            <label htmlFor="name" >Nombre</label>
            <input type="text" name="name" defaultValue={trip ? trip.name : ""}/>

            <label htmlFor="destino" >Destino</label>
            <input type="text" name="destino" defaultValue={trip ? trip.destino : ""}/>

            <label htmlFor="descripcion" >Descripción</label>
            <textarea name="descripcion" defaultValue={trip ? trip.descripcion : ""}></textarea>

            <label htmlFor="duracion" >Duración</label>
            <input type="number" name="duracion"defaultValue={trip ? trip.duracion : ""}/>

            <label htmlFor="precio" >Precio</label>
            <input type="number" name="precio"defaultValue={trip ? trip.precio : ""}/>

            <label htmlFor="imagen" >Imagen</label>
            <input type="string" name="imagen" defaultValue={trip ? trip.imagen : ""}/>

            {/* <label htmlFor="itinerario" >Itinerario</label>
            <input type="object" name="itinerario" defaultValue={trip ? trip.itinerario : ""}/>    */}

            <ActionButton label={trip ? "Actualizar" : "Crear"} className="create" type="submit"></ActionButton>

        </form>
    )
}
export default CreateTrip;