<template>
	<div class="keycode">
		<span class="keycode__letter">
			{{ letter }}
		</span>
		<span class="keycode__label">
			{{ label }}
		</span>
	</div>
</template>

<script>


export default {
	props: {
		letter: {
			required: true,
			type: String
		},
		label: {
			required: true,
			type: String
		},
	}
}
</script>
