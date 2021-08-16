<template class="counter">

	<div class="counter">
		<ion-text color="dark" class="ion-text-center">
			<h2 class="counter__number">{{ energy }}</h2>
		</ion-text>

		<ion-grid class="ion-text-center">
			<ion-row class="ion-justify-content-center">
				<ion-col>
					<ion-button size="large" @click="decrement"><ion-icon :icon="icons.removeOutline"></ion-icon></ion-button>
					<ion-button size="large" @click="nextRound">Next round</ion-button>
					<ion-button size="large" @click="increment"><ion-icon :icon="icons.addOutline"></ion-icon></ion-button>
				</ion-col>
			</ion-row>
		</ion-grid>
	</div>

</template>

<script>
import { mapGetters } from 'vuex'

import {
	IonButton,
	IonIcon,
	IonGrid,
	IonCol,
	IonRow,
} from '@ionic/vue'

import {
	addOutline,
	removeOutline
} from  'ionicons/icons'

export default {
	components: {
		IonGrid,
		IonCol,
		IonRow,
		IonButton,
		IonIcon
	},

	data() {
		return {
			icons: {
				addOutline,
				removeOutline
			}
		}
	},

	created() {
		this.handleShortcuts()
	},

	destroyed() {

	},

	methods: {
		handleShortcuts() {
			const keycodeMappins = {
				65: this.decrement,
				68: this.increment,
				82: this.reset,
				70: this.nextRound
			}

			window.addEventListener('keydown', (e) => {
				if (keycodeMappins[e.keyCode]) {
					keycodeMappins[e.keyCode]();
				}
			});
		},

		increment() {
			this.$store.dispatch('setEnergy', this.energy + 1)
		},

		decrement() {
			if(this.energy <= 0) {
				return
			}

			this.$store.dispatch('setEnergy', this.energy - 1)
		},

		reset() {
			this.$store.dispatch('resetEnergy')
		},

		nextRound() {
			this.$store.dispatch('setEnergy', this.energy + 2)
		}
	},

	computed: {
		...mapGetters({
			energy: 'energy'
		})
	}
}
</script>