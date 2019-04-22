<script>
import EditorDemoSimple from '../TextEditor/EditorDemoSimple';
import EditorDemoImage from '../TextEditor/EditorDemoImage';
import EditorDemoTags from '../TextEditor/EditorDemoTags';

export default {
	name: 'TheDashboard',

	components: {
		EditorDemoSimple,
		EditorDemoImage,
		EditorDemoTags,
	},

	data() {
		return {
			content1: '<h1>Neki defaultni tekst</h1><p>Lore <strong>ipsum</strong>...</p><p>Bla bal truc ...</p>',
			content2: '<p>Ubaci neku sliku ovde </p>',
			content3: '<p>TAG TAG TAG</p>',
		}
	},

	methods: {
		setSomeContent() {
			this.content1 = '<h3>Neki naslov</h3><p>Neki paragraf</p><p class="ql-align-center"><img src="/assets/logo.png" height="120"></p>';
		}
	}
}
</script>


<!-- =========================================================================================== -->
<!-- =========================================================================================== -->
<!-- =========================================================================================== -->


<template>
	<section class="content container-fluid">
		<h1>The Dashboard</h1>

		<h3>Demo jednostavnog editora <button @click="setSomeContent()">Setuje neki demo tekst</button></h3>
		<editor-demo-simple v-model="content1" />
		<div class="ql-editor" v-html="content1">s</div>

		<h3>Demo editora sa uploadom slike</h3>
		<editor-demo-image v-model="content2" />

		<h3>Demo editora sa tagovima</h3>
		<editor-demo-tags v-model="content3" />
	</section>
</template>


<!-- =========================================================================================== -->
<!-- =========================================================================================== -->
<!-- =========================================================================================== -->


<style scoped></style>