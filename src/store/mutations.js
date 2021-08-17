const mutations = {
	SET_ENERGY(state, energy) {
		state.energy = energy
	},

	RESET_ENERGY(state) {
		state.energy = 3
	},

	SET_OPTION(state, option) {
		try {
			state.options[option.key] = option.value
		}
		catch(error) {

		}
	}
}

export default mutations