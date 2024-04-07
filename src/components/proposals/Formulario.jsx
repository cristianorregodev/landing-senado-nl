export const Formulario = () => {
    return (
        <section className="formulario__container">
            <form className="formulario">
                <h2 className="formulario__title">¡Deja tus propuestas aquí!</h2>

                <textarea className="formulario__texto"></textarea>

                <input className="formulario__enviar" type="submit" value="Enviar" />
            </form>
        </section>
    )
}
