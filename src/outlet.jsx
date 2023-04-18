import { Outlet } from 'react-router-dom'
import Nav from './components/nav/Nav'

const OutletManager = () => {
    return (
        <>
        <Nav>
            <Outlet/>
        </Nav>
        </>
    )
}


export default OutletManager
