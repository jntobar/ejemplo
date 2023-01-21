import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <h1>Proyecto ASSR</h1>
            <ul>
                <li>
                    <Link to="/"> Home</Link>

                </li>
                <li>
                    <Link to="/registro"> Registro Usuario</Link>
                </li>
            </ul>
        </div>

    )
}

export default Navbar