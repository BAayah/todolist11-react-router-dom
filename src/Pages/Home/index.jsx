import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
            <h1>Welcome!</h1>
            <Link to="/login">
               <button>Enter</button>
            </Link>
            <Link to="/todos">
               <button>Todos</button>
            </Link>
        </div>
    )
}


