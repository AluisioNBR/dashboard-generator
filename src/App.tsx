import { useState, useReducer, createContext } from 'react'
import './App.css'

import { DashboardConfig } from './components/DashboardConfig'
import { DashboardViewer } from './components/DashboardViewer'

import { dashboardReducer } from './components/dashboardReducer'
const [dashboardContentReducer, dashboardContentInitialState] = dashboardReducer

const DashboardColorContext = createContext()
const SetDashboardContentContext = createContext()

export default function App() {
  const [dashboardContent, setDashboardContent] = useReducer(dashboardContentReducer,dashboardContentInitialState)
  const [dashboardColor, setDashboardColor] = useState('#fdfdfd')

  return (
    <main id="App">
      <h1 title="Gerador de Dashboards">Gerador de Dashboards</h1>

      <DashboardColorContext.Provider value={[dashboardColor, setDashboardColor]}>
        <SetDashboardContentContext.Provider value={setDashboardContent}>
          <DashboardConfig />
        </SetDashboardContentContext.Provider>
      </DashboardColorContext.Provider>

      <DashboardViewer dashboardColor={dashboardColor} dashboardOptions={dashboardContent} />
    </main>
  )
}

export { DashboardColorContext, SetDashboardContentContext }