export const Calendar = () => {
    return (
        <section className="calendar__main">
            <h4>Eventos Destacados</h4>
            <section className="calendar__content">
                <div className="calendar__cal">
                    <img src="./img/calendar.webp" alt="" />
                </div>
                <div className="calendar__list">
                    <h5>Enero</h5>
                    <ul>
                        <li>
                            5 de Enero
                            <p>Perezcopio - El Nuevo Día: Presentación candidatos.</p>
                        </li>

                        <li>
                            11 de Enero
                            <p>Salida Cota</p>
                        </li>

                        <li>
                            23 de Enero
                            <p>Lanzamiento campaña Bogotá</p>
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    )
}
