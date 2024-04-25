import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

import App from '~/App'
import Home from '~/pages/Home'

import { Routes } from '~/constants/routes'

export const routerConfig = (
  <Route element={<App />} path='/'>
    <Route element={<Home />} index />
    <Route element={<div>Requests</div>} path={Routes.REQUESTS} />
    <Route element={<div>Settings</div>} path={Routes.SETTINGS} />
  </Route>
)
export const router = createBrowserRouter(
  createRoutesFromElements(routerConfig)
)
