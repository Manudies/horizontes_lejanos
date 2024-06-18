import { createTrip } from "../../utils/fetch";
import "./CreateTrips.css"
const CreateTrip = ({onCreate})=>{

    const handleSubmit =async (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const data = {name,description};
        console.log("name",data)
        const result = await createCategory(data);
        console.log("result",result)
        onCreate();
    }
    return (
        <form action="" className="create-category" onSubmit={handleSubmit}>
            <label htmlFor="name" >Nombre</label>
            <input type="text" name="destino"/>
            <label htmlFor="destino" >Destino</label>
            <input type="text" name="destino"/>
            <label htmlFor="description" >Descripción</label>
            <textarea name="description"></textarea>
            <label htmlFor="duración" >Duración</label>
            <input type="text" name="duración"/>
            <label htmlFor="precio" >Precio</label>
            <input type="number" name="precio"/>
            <label htmlFor="imagen" >Imagen</label>
            <input type="string" name="imagen"/>
            <label htmlFor="itinerario" >Itinerario</label>
            <input type="object" name="itinerario"/>           
            <button type="submit">Crear</button>
        </form>
    )
}
export default CreateTrip;