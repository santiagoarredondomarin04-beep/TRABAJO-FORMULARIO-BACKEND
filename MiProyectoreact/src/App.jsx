import { useState, useEffect } from 'react'
import './App.css'
import FormularioPersonas from './componentes/FormularioPersonas'
import FilaPersona from './componentes/FilaPersona'

function App() {

  const [TipoDocumento, setTipoDoc] = useState("")
  const [Documento, setDocumento] = useState("")
  const [Nombre, setNombre] = useState("")
  const [Apellido, setApellido] = useState("")
  const [Direccion, setDireccion] = useState("")
  const [Ciudad, setCiudad] = useState("")
  const [FechaNacimiento, setFechaNac] = useState("")
  const [Correo, setCorreo] = useState("")
  const [edad, setEdad] = useState("")


  const [Persona, setPersona] = useState([])
  const [Mensaje, setMensaje] = useState("")

 
  async function cargarPersonas() {
    const respuesta = await fetch("http://localhost:3001/personas")
    const data = await respuesta.json()
    setPersona(data)
  }

  useEffect(() => {
    cargarPersonas()
  }, [])

  
  async function gurdarPersonas() {
    const Personas = {
      TipoDocumento: TipoDocumento,
      Documento: Documento,
      Nombre: Nombre,
      Apellido: Apellido,
      Direccion: Direccion,
      Ciudad: Ciudad,
      FechaN: FechaNacimiento,
      Correo: Correo,
      Edad: edad
    }

    const personaExiste = Persona.find((p) => p.Documento === Documento)

    if (personaExiste) {
      // PUT
      const respuestaPut = await fetch(`http://localhost:3001/personas/${personaExiste.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Personas)
      })

      if (respuestaPut.ok) {
        setMensaje("Persona Actualizada Correctamente")
      } else {
        setMensaje("Error al actualizar la persona")
      }
    } else {
      // POST
      const respuestaPost = await fetch("http://localhost:3001/personas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Personas)
      })

      if (respuestaPost.ok) {
        setMensaje("Persona Guardada Correctamente")
      } else {
        setMensaje("Error al guardar la persona")
      }
    }

    limpiarCampos()
    cargarPersonas()
  }


  function limpiarCampos() {
    setTipoDoc("")
    setDocumento("")
    setNombre("")
    setApellido("")
    setDireccion("")
    setCiudad("")
    setFechaNac("")
    setCorreo("")
    setEdad("")
  }

 
  function editar(persona) {
    setTipoDoc(persona.TipoDocumento)
    setDocumento(persona.Documento)
    setNombre(persona.Nombre)
    setApellido(persona.Apellido)
    setDireccion(persona.Direccion)
    setCiudad(persona.Ciudad)
    setFechaNac(persona.FechaN)
    setCorreo(persona.Correo)
    setEdad(persona.Edad)
  }

 
  async function eliminarPersona(id) {
    const respuesta = await fetch(`http://localhost:3001/personas/${id}`, {
      method: "DELETE"
    })

    if (respuesta.ok) {
      setMensaje("Persona Eliminada Correctamente")
      cargarPersonas()
    } else {
      setMensaje("Error al eliminar la persona")
    }
  }

  return (
    <div>
      <h1>Registro de usuarios</h1>

      <FormularioPersonas
        TipoDocumento={TipoDocumento} setTipoDoc={setTipoDoc}
        Documento={Documento} setDocumento={setDocumento}
        Nombre={Nombre} setNombre={setNombre}
        Apellido={Apellido} setApellido={setApellido}
        Direccion={Direccion} setDireccion={setDireccion}
        Ciudad={Ciudad} setCiudad={setCiudad}
        FechaNacimiento={FechaNacimiento} setFechaNac={setFechaNac}
        Correo={Correo} setCorreo={setCorreo}
        edad={edad} setEdad={setEdad}
        gurdarPersonas={gurdarPersonas}
      />

      <h3>{Mensaje}</h3>
      <h2>Total de personas: {Persona.length}</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Tipo de Documento</th>
            <th>Documento</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Direccion</th>
            <th>Ciudad</th>
            <th>Fecha de Nacimiento</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {Persona.map((persona) => (
            <FilaPersona
              key={persona.id}
              persona={persona}
              eliminarPersona={eliminarPersona}
              editar={editar}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App