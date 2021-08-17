const actions = {
	setEnergy({commit}, energy) {
		commit('SET_ENERGY', energy)
	},
	
	resetEnergy({commit}) {
		commit('RESET_ENERGY')
	},

	setOption({commit}, option) {
		commit('SET_OPTION', option)
	}
}

export default actions