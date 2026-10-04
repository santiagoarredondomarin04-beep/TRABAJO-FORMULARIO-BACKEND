function FilaPersona ({
    persona,
    eliminarPersona,
    editar
}) {
    return (
     <tr>
          <td>{persona.TipoDocumento}</td>
          <td>{persona.Documento}</td>
          <td>{persona.Nombre}</td>
          <td>{persona.Apellido}</td>
          <td>{persona.Direccion}</td>
          <td>{persona.Ciudad}</td>
          <td>{persona.FechaN}</td>
          <td>{persona.Correo}</td>
          <td>{persona.Edad}</td>


          <td>
            <button onClick={() => eliminarPersona(persona.id)}>Eliminar</button>
            <button onClick={() => editar(persona)}>Editar</button>
          </td>
          </tr>
          );
}

export default FilaPersona;