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

import AnimatedCursor from "react-animated-cursor"

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
        <Provider store={store}>
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
