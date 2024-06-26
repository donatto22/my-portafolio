import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Nav from './components/nav/Nav'
import AnimatedCursor from "react-animated-cursor"

import { useSelector } from 'react-redux'

// google analytics
import ReactGa from 'react-ga'
ReactGa.initialize('G-YD30L6VZZZ')

// hotjar
import { hotjar } from 'react-hotjar'
hotjar.initialize(3489963, 6)

import { Context } from './Context'

const OutletManager = () => {
    const cursorSelector = useSelector(state => state.cursor)
    const [menu, setMenu] = useState(false);

    return (
        <>
        {
            cursorSelector && (
                <AnimatedCursor color="255,120,155"
                    innerSize={8}
                    outerSize={45}
                    innerScale={1}
                    outerScale={1.5}
                    outerAlpha={0}
                    outerStyle={{
                        border: '2px solid var(--discord-blue2)'
                    }}
                />
            )
        }

        <Context.Provider value={{ menu, setMenu }} >
            <Nav>
                <Outlet />
            </Nav>
        </Context.Provider>
        </>
    )
}


export default OutletManager
