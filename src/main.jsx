import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './css/styles.config.css'

import { Provider } from 'react-redux'
import store from './app/store'

import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Projects from './pages/projects/Projects'
import OutletManager from './outlet'

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path='/' element={<OutletManager />}>
                    <Route index element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/projects' element={<Projects />} />
                </Route>
            </Routes>
        </Provider>
    </BrowserRouter>
)
