<template>
  <ion-page>
	<ion-header class="ion-no-border header-main" :translucent="true" no-border >
		<ion-toolbar>
			<ion-title>
				<ion-img class="header-main__logo" src="assets/icon/icon.png"></ion-img>
			</ion-title>
		</ion-toolbar>
	</ion-header>
	
	<ion-content :fullscreen="true">
		
		<Counter />

		<Shortcuts />

		<ion-fab vertical="bottom" horizontal="center" slot="fixed">
			<ion-fab-button color="dark" size="small">
				<ion-icon :icon="icons.ellipsisHorizontal"></ion-icon>
			</ion-fab-button>
			<ion-fab-list side="top">
				<ion-fab-button @click="reset()"><ion-icon :icon="icons.refreshOutline"></ion-icon></ion-fab-button>
			</ion-fab-list>
		</ion-fab>

	</ion-content>
  </ion-page>
</template>

<script>
import {
	IonGrid,
	IonCol,
	IonRow,
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonFab,
	IonFabButton,
	IonImg
} from '@ionic/vue';

import {
	ellipsisHorizontal,
	refreshOutline
} from 'ionicons/icons'

import Counter from '../components/Counter.vue'
import Shortcuts from '../components/Shortcuts.vue'

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonFab,
	IonFabButton,
	Counter,
	Shortcuts,
	IonGrid,
	IonCol,
	IonRow,
	IonImg
  },

	data() {
		return {
			icons: {
				ellipsisHorizontal,
				refreshOutline
			}
		}
	},

	created() {
		this.$store.dispatch('resetEnergy')
	},

	methods: {
		reset() {
			this.$store.dispatch('setEnergy', 3)
		}
	},

});
</script>
