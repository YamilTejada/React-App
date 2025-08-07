

//Como quiero eliminar un elemento , tal cual como las variables de Nombre , Edad e ID ,hago lo mismo
//con el evento de onEliminar , de esa forma lo pasaré en el App :D
export function Elemento({ Nombre, Edad, ID, onEliminar, onTareaCompletada , Completado }) {
  return (
    <div
      className="Elemento-Container"
      style={{ backgroundColor: Completado ? "lightgreen" : "white" }}
    >
      <p>Nombre: {Nombre}</p>
      <p>Edad: {Edad}</p>
      <p>ID: {ID}</p>

      <button onClick={() => onEliminar(ID)}>Eliminar</button>
      <button onClick={() => onTareaCompletada(ID)}>
        {Completado ? "Desmarcar" : "Tarea Completada"}
      </button>
    </div>
  );
}
