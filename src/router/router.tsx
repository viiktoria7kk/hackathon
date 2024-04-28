import { lazy } from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

import AppLayout from '~/containers/layouts/AppLayout'
import AuthLayout from '~/containers/layouts/AuthLayout'

import App from '~/App'

import { Routes } from '~/constants/routes'

const Home = lazy(() => import('~/pages/Home'))
const Requests = lazy(() => import('~/pages/Requests'))
const Request = lazy(() => import('~/pages/Request'))
const Profile = lazy(() => import('~/pages/Profile'))
const SignIn = lazy(() => import('~/pages/SignIn'))
const SignUp = lazy(() => import('~/pages/SignUp'))
const Chat = lazy(() => import('~/pages/Chat'))

export const routerConfig = (
  <Route element={<App />} path='/'>
    <Route element={<AppLayout />}>
      <Route element={<Home />} index />
      <Route element={<Requests />} path={Routes.REQUESTS} />
      <Route element={<Request />} path={Routes.REQUEST} />
      <Route element={<Profile />} path={Routes.PROFILE} />
      <Route element={<Chat />} path={Routes.CHAT} />
      <Route element={<div>Settings</div>} path={Routes.SETTINGS} />
    </Route>
    <Route element={<AuthLayout />}>
      <Route element={<SignIn />} path={Routes.SIGN_IN} />
      <Route element={<SignUp />} path={Routes.SIGN_UP} />
    </Route>
  </Route>
)

export const router = createBrowserRouter(
  createRoutesFromElements(routerConfig)
)
