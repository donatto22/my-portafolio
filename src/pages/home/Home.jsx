import { useState, useEffect, useRef } from "react"
import ScrollReveal from "scrollreveal";
import Minav from "./minav/Minav"
import './home.css'

function Home() {
	const [user, setUser] = useState(null)
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

				<div id="profile">
					<div id="profile-content">
						<div id="profile-title">
							<h1>Donatto Minaya</h1>
							<p>Desarrollador Web Frontend</p>
						</div>

						<div id="profile-description">

						</div>
					</div>
					
					<div id="profile-image">
						<img src={user && user.avatar_url} alt="" />
					</div>
				</div>

				<div id="projects">
					
				</div>
			</div>
		</div>
	)
}

export default Home
