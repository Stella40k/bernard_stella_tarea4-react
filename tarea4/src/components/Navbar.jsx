import { Link } from "react-router"; //Link sirve para navegar entre paginas sin recargarlas

export const Navbar = ()=>{
    return(
        <nav className="bg-yellow-100 p2 text-dark w-full flex justify-between">
            <Link to= "/HomePage" className="mr-4 hover:text-orange-50">
            Home
            </Link>
            <Link to="/about" className="mr-5">
            Exit
            </Link>
        </nav>
    );
};
//logout tiene q redirecionar a la pagina de registro o ,ogn y borrando 