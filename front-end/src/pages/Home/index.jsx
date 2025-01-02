import { useState, useRef, useEffect } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'


function Home() {


    async function createUsers() {
        await api.post('/usuarios', {
            name: inputName.current.value,
            age: inputAge.current.value,
            email: inputEmail.current.value
        })

        getUsers()
    }

    async function deleteUser(userId) {
        await api.delete(`/usuarios/${userId}`)

        getUsers()
    }

    const getUsers = async () => {
        const result = await api.get('/usuarios')
        setUsers(result.data)
    }

    const [users, setUsers] = useState([])

    const inputName = useRef()
    const inputAge = useRef()
    const inputEmail = useRef()

    useEffect(() => {
        getUsers()
    }, [])

    return (

        <div className='container'>
            <form>
                <h1>Cadastro de Usuários</h1>
                <input placeholder="Nome" name="nome" type="text" ref={inputName} />
                <input placeholder="Idade" name="idade" type="number" ref={inputAge} />
                <input placeholder="E-mail" name="email" type="email" ref={inputEmail} />
                <button type="button" onClick={createUsers}>Cadastrar</button>
            </form>

            {users.map(user => (
                <div key={user.id} className='card'>
                    <div>
                        <p>Nome: <span>{user.name}</span></p>
                        <p>Idade: <span>{user.age}</span></p>
                        <p>Email: <span>{user.email}</span></p>
                    </div>
                    <button>
                        <img src={Trash} onClick={() => deleteUser(user.id)}></img>
                    </button>
                </div>
            ))}
        </div >
    )
}


export default Home
