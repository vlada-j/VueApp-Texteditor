<script>
import { VueEditor } from 'vue2-editor';

export default {
	name: 'EditorDemoImage',

	props: ['value'],

	components: {
		VueEditor
	},

	watch:{
		value() {
			this.localContent = this.value;
		}
	},

	mounted() {
		this.localContent = this.value;
	},

	data() {
		return {
			localContent: '',
			editorSettings: {},
			customToolbar: [
				[{ 'size': ['small', false, 'large', 'huge'] }],
				[{'align': ''}, {'align': 'center'}, {'align': 'right'}, {'align': 'justify'}],
				[{ 'header': 1 }, { 'header': 2 }],
				['link', 'image', /*'video', 'formula'*/],
				['clean'],
			]
		};
	},

	methods: {
		updateContent() {
			this.$emit('input', this.localContent);
		},

		handleImageAdded(file, Editor, cursorLocation, resetUploader) {
			// https://github.com/davidroyer/vue2-editor#example---custom-image-handler

			// Ovde dodati odgovarajuci servis za upload
			console.log('handleImageAdded', file);

			let urlOfUploadedImage = '/assets/logo.png';
			Editor.insertEmbed(cursorLocation, 'image', urlOfUploadedImage);
			resetUploader();
		}
	}
}
</script>


<!-- =========================================================================================== -->
<!-- =========================================================================================== -->
<!-- =========================================================================================== -->


<template>
	<article>
		<vue-editor ref="editor"
					v-model="localContent"
					:editorOptions="editorSettings"
					:editorToolbar="customToolbar"
					useCustomImageHandler
					@imageAdded="handleImageAdded"
					@input="updateContent()"
		/>
	</article>
</template>


<!-- =========================================================================================== -->
<!-- =========================================================================================== -->
<!-- =========================================================================================== -->


<style scoped></style>