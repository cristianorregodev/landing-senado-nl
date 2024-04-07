import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../sass/main.scss'
import { Header } from '../components/Header'
import { Main } from '../components/home/Main'
import { Propues } from '../components/proposals/Main'
import Glide from '@glidejs/glide'
window.addEventListener('load', function () {
    slider()
})

function slider() {
    const config = {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        autoplay: 2500,
    }
    new Glide('.glide', config).mount()
}
export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/propuestas" element={<Propues />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
