function dashboardContentReducer(state, action){
  switch(action.type){
    case 'submitGeneralConfig': 
      return submitGeneralConfig(action.dashboardType, state)
      break;
  }
}

function submitGeneralConfig(dashboardType: string, state){
	dashboardType = dashboardType.toLowerCase()
	
	const types = {
		'linha': 'line',
		'barra': 'bar',
		'fatia': 'pie',
		'rosquinha': 'doughnut',
		'radar': 'radar',
		'ponto': 'scatter'
	}, dashboardTypeNoExists = (dashboardType != 'linha' &&
		dashboardType != 'barra' &&
		dashboardType != 'fatia' &&
		dashboardType != 'rosquinha' &&
		dashboardType != 'radar' &&
		dashboardType != 'ponto')

	if(dashboardTypeNoExists)
		return {
			data: state.data,
			options: state.options
		}
	else
		return {
			type: types[dashboardType],
			data: state.data,
			options: state.options
		}
}

const labels = [
  '2004',
  '2008',
  '2012',
  '2016',
  '2020',
  '2024',
];

const data = {
	labels: labels,
  datasets: [{
    label: 'Teste',
    color: '#fdfdfd',
    backgroundColor: '#dd9988',
    borderColor: '#dd9988',
    data: [10, 20, 30, 40, 50, 60],
  },{
    label: 'Teste 2',
    backgroundColor: '#9988dd',
    borderColor: '#9988dd',
    data: [60, 50, 40, 30, 20, 10],
  }]
};

const dashboardContentInitialState = {
  type: 'line',
  data: data,
  options: {}
}

const dashboardReducer = [dashboardContentReducer, dashboardContentInitialState]

export { dashboardReducer }