import { useEffect, useRef } from 'react'
import ScrollReveal from "scrollreveal";

// import './home.css'

function Home() {
	const myRef = useRef(null)	

	useEffect(() => {
		ScrollReveal().reveal(myRef.current, {
		  // opciones de configuración aquí
		  duration: 700
		})
	}, [])

	return (
		<div id="home" ref={myRef}>
			hola
		</div>
	)
}

export default Home
