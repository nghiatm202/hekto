import { Fragment } from 'react'
/* Routes */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { publicRoutes } from './routes'
/* Theme variables */
import './theme/global.scss'
import './theme/variables.scss'
/* Layouts */
import { MainLayout } from './layouts'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = MainLayout
                        const Page = route.component

                        if (route.layout) {
                            Layout = route.layout
                        } else if (route.layout === null) {
                            Layout = Fragment
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        )
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
