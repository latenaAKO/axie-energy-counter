const actions = {
	setEnergy({commit}, energy) {
		commit('SET_ENERGY', energy)
	},
	
	resetEnergy({commit}) {
		commit('RESET_ENERGY')
	}
}

export default actions