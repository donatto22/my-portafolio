import { useEffect, useRef } from 'react'
import ScrollReveal from "scrollreveal"

import './home.css'

// iconos
import { FaLinkedinIn, FaWhatsapp, FaGithub } from 'react-icons/fa';

function Home() {
	const myRef = useRef(null)	

	useEffect(() => {
		ScrollReveal().reveal(myRef.current, {
		  // opciones de configuración aquí
		  duration: 700,
		})
	}, [])

	return (
		<div id="home" ref={myRef}>
			<div id="presentation" className='black-g'>

			</div>

			<div id="social-media" className='black-g'>
				{/* linkedin */}
				<a href='https://www.linkedin.com/in/devdonatto-minaya/' className='black-g'><FaLinkedinIn/></a>

				{/* whatsapp */}
				<a href='https://api.whatsapp.com/send?phone=51913242570' className='black-g'><FaWhatsapp/></a>
				<a href='#' className='black-g'><FaGithub/></a>
			</div>
		</div>
	)
}

export default Home
