const mutations = {
	SET_ENERGY(state, energy) {
		state.energy = energy
	},
	RESET_ENERGY(state) {
		state.energy = 3
	}
}

export default mutations