<template>
  <ion-page>
	<ion-header :translucent="true">
	</ion-header>
	
	<ion-content :fullscreen="true">
	  <ion-header collapse="condense">
		<ion-toolbar>
		  <ion-title size="large">Blank</ion-title>
		</ion-toolbar>
	  </ion-header>
		
		<Counter />
		
	
		<ion-fab vertical="bottom" horizontal="center" slot="fixed">
			<ion-fab-button>
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
	IonFabButton
} from '@ionic/vue';

import {
	ellipsisHorizontal,
	refreshOutline
} from 'ionicons/icons'

import Counter from '../components/Counter.vue'

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
	IonGrid,
	IonCol,
	IonRow,
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
