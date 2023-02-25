import { useState } from 'react'

function AddForm({onAdd}) {
    const [texto, setTexto] = useState('')
    const [fecha, setFecha] = useState('')
    const [terminada, setTerminada ] = useState(false)

    const submit=(e)=>{
        e.preventDefault();
        if(!texto){
            alert('Ingresa alguna información')
        }else{
            onAdd({texto,fecha,terminada})
            setTexto('')
            setFecha('')
            setTerminada(false)
        }
    }
  return (
    <form onSubmit={submit}>
            <div className="form-control">
                <label>Tarea</label>
                <input type="text" name="task" placeholder="Tarea" value={texto} onChange={(e)=>setTexto(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Fecha</label>
                <input type="text" name="date" placeholder="Fecha" value={fecha}  onChange={(e)=>setFecha(e.target.value)} />
            </div>
            <div className="form-control check">
                <label>Terminada</label>
                <input type="checkbox" name="status" checked={terminada} value={terminada}  onChange={(e)=>setTerminada(e.currentTarget.checked)} />
            </div>
            <button className="btn block">Agregar tarea</button>
    </form>
  )
}

export default AddForm