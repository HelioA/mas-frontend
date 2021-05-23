import {Container} from './styles';

export function ActivyTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Unidade Curricular</th>
                        <th>Atividade</th>
                        <th>Avaliação</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Programação Web</td>
                        <td>Desenvolvimento do Frontend</td>
                        <td>9.50</td>
                        <td>05/05/2021</td>
                    </tr>
                    <tr>
                        <td>Programação Web</td>
                        <td>Implementação de Autenticação</td>
                        <td>10.00</td>
                        <td>06/05/2021</td>
                    </tr>
                    <tr>
                        <td>Programação Web</td>
                        <td>Alterar estilos</td>
                        <td>10.00</td>
                        <td>06/05/2021</td>
                    </tr>

                </tbody>
            </table>

        </Container>
    )
}