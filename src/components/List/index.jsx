import './style.css'

function List() {
    return (
        <section>
            <h2 id="exemplo-h2">Seçao de listas</h2>
            <h3>Exemplo</h3>
            <ul>
                <li>Chocolate</li>
                <li>Salgadinho</li>
                <li>Balas</li>
            </ul>

            <h3>Lista ordenada</h3>
            <ol>
                <li>Arroz</li>
                <li>Feijao</li>
                <li>Farofa</li>
            </ol>
        </section>
    )
}

export default List