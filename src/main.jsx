import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './css/styles.config.css'

import { Provider } from 'react-redux'
import store from './app/store'

import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Projects from './pages/projects/Projects'
import Products from './pages/products/Products'
import OutletManager from './outlet'

import ReactGa from 'react-ga'
ReactGa.initialize('G-YD30L6VZZZ')

import { hotjar } from 'react-hotjar'
hotjar.initialize(3489963, 6)

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path='/' element={<OutletManager />}>
                    <Route index element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/contact' element={<Contact />} />
                </Route>
            </Routes>
        </Provider>
    </BrowserRouter>
)
