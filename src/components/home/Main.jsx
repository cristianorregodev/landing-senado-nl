import { Acciones } from './Acciones'
import { Banner } from './Banner'
import { Calendar } from './Calendar'
import { Equipo } from './Equipo'
import { Footer } from './Footer'
import { Galan } from './Galan'
import { Propuestas } from './Propuestas'
import { SuscribBlog } from './SuscribBlog'

export const Main = () => {
    return (
        <>
            <Banner />
            <Acciones />
            <Galan />
            <Propuestas />
            <Equipo />
            <Calendar />
            <SuscribBlog />
            <Footer />
        </>
    )
}
