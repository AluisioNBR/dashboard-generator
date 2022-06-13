import { useState, useEffect, useContext } from 'react'

import { DashboardColorContext, SetDashboardContentContext } from '../App'

export function DashboardConfig(){
  return (
    <div id="DashboardConfig">
      <DashboardGeneralConfig />
    </div>
  )
}

function DashboardGeneralConfig(){
  const [dashboardTypeValue, setDashboardTypeValue] = useState('linha')

  const [dashboardColor, setDashboardColor] = useContext(DashboardColorContext)
  const [intermediateDashboardColor, setIntermediateDashboardColor] = useState(dashboardColor)

  const setDashboardContent = useContext(SetDashboardContentContext)

  function submitGeneralConfig(e: SubmitEvent){
    e.preventDefault()

    setDashboardContent({ type: 'submitGeneralConfig', dashboardType: dashboardTypeValue })
    setDashboardColor(intermediateDashboardColor)
  }

  return (
    <form id="DashboardGeneralConfig" onSubmit={(e) => submitGeneralConfig(e as SubmitEvent)}>
      <div>
        <label name="dashboardType" title="Informe o tipo do painel">
          Informe o tipo do painel:
        </label><br/>

        <input
          type="text"
          name="dashboardType"
          value={dashboardTypeValue}
          title="linha | barra | fatia | rosquinha | radar | ponto"
          placeholder="Ex: linha"
          onChange={(e) => setDashboardTypeValue(e.target.value)}
        /><br/>
        <small title="linha | barra | fatia | rosquinha | radar | ponto">
          linha | barra | fatia | rosquinha | radar | ponto
        </small>
      </div>

      <div>
        <label name="dashboardColor" title="Informe a cor do painel">
          Informe a cor do painel:
        </label><br/>
        <input
          type="color"
          name="dashboardColor"
          value={intermediateDashboardColor}
          title="Selecione a cor do painel"
          onChange={(e) => setIntermediateDashboardColor(e.target.value)}
        />
      </div>

      <button title="Aplicar">Aplicar</button>
    </form>
  )
}