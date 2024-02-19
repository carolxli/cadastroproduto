import { Alert } from "react-bootstrap";
export default function Cabecalho(props){
    return(
       <Alert variant="dark" className="text-center"><h2>{props.texto}</h2></Alert>
    );
}