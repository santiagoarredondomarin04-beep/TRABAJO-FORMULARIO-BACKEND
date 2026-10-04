function FormularioPersonas({
  TipoDocumento, setTipoDoc,
  Documento, setDocumento,
  Nombre, setNombre,
  Apellido, setApellido,
  Direccion, setDireccion,
  Ciudad, setCiudad,
  FechaNacimiento, setFechaNac,
  Correo, setCorreo,
  edad, setEdad,
  gurdarPersonas
}) {
  return (
    <div>
      <input type="text" placeholder="Tipo de Documento"
        value={TipoDocumento} onChange={(e) => setTipoDoc(e.target.value)} />
      <br /><br />

      <input type="text" placeholder="Documento"
        value={Documento} onChange={(e) => setDocumento(e.target.value)} />
      <br /><br />

      <input type="text" placeholder="Nombre"
        value={Nombre} onChange={(e) => setNombre(e.target.value)} />
      <br /><br />

      <input type="text" placeholder="Apellido"
        value={Apellido} onChange={(e) => setApellido(e.target.value)} />
      <br /><br />

      <input type="text" placeholder="Direccion (ej: calle 88 # 55 - 22)"
        value={Direccion} onChange={(e) => setDireccion(e.target.value)} />
      <br /><br />

      <input type="text" placeholder="Ciudad"
        value={Ciudad} onChange={(e) => setCiudad(e.target.value)} />
      <br /><br />

      <input type="text" placeholder="Fecha de Nacimiento (DD/MM/AAAA)"
        value={FechaNacimiento} onChange={(e) => setFechaNac(e.target.value)} />
      <br /><br />

      <input type="email" placeholder="Correo (ej: nombre@gmail.com)"
        value={Correo} onChange={(e) => setCorreo(e.target.value)} />
      <br /><br />

      <input type="number" placeholder="Edad"
        value={edad} onChange={(e) => setEdad(e.target.value)} />
      <br /><br />

      <button onClick={gurdarPersonas}>Guardar</button>
    </div>
  );
}

export default FormularioPersonas;