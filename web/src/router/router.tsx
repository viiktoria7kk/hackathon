import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

import App from '~/App'
import Home from '~/pages/Home'
import MainLayout from '~/containers/layouts/MainLayout'
import AuthLayout from '~/containers/layouts/AuthLayout'

import { Routes } from '~/constants/routes'
import SignIn from '~/pages/SignIn'
import SignUp from '~/pages/SignUp'

export const routerConfig = (
  <Route element={<App />} path='/'>
    <Route element={<MainLayout />}>
      <Route element={<Home />} index />
      <Route element={<div>Requests</div>} />
      <Route element={<div>Settings</div>} path={Routes.SETTINGS} />
    </Route>
    <Route element={<AuthLayout />} path={'/auth'}>
      <Route element={<SignIn />} path={Routes.SIGN_IN} />
      <Route element={<SignUp />} path={Routes.SIGN_UP} />
    </Route>
  </Route>
)
export const router = createBrowserRouter(
  createRoutesFromElements(routerConfig)
)
