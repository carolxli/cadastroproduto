import FormCadProd from "../formularios/formCadProd";
import Pagina from "../templates/pagina";

export default function TelaCadProd(props) {
    return (
        <div>
            <Pagina>
                <h2>Cadastro de Produtos</h2>
                <FormCadProd />
            </Pagina>
        </div>
    )
}