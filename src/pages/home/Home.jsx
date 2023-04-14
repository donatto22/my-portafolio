import { useState, useEffect, useRef } from "react"
import ScrollReveal from "scrollreveal";
import Minav from "./minav/Minav"
import './home.css'

function Home() {
	const myRef = useRef(null)

	useEffect(() => {
		fetch(`https://api.github.com/users/donatto22`)
			.then(response => response.json())
			.then(data => setUser(data));
	}, [])

	useEffect(() => {
		ScrollReveal().reveal(myRef.current, {
		  // opciones de configuración aquí
		  duration: 3000
		})
	}, [])

	return (
		<div id="container" >
			<div id="min-container" ref={myRef}>
				<Minav />
			</div>
		</div>
	)
}

export default Home
