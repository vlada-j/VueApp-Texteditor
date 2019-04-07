<script>
import { VueEditor } from 'vue2-editor';

export default {
	name: 'EditorDemoSimple',

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
				[{ 'header': [false, 1, 2, 3, 4, 5, 6, ] }],
				['bold', 'italic', 'underline', 'strike'],
				[{'align': ''}, {'align': 'center'}, {'align': 'right'}, {'align': 'justify'}],
				['blockquote', 'code-block'],
				[{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
				[{ 'script': 'sub'}, { 'script': 'super' }],
				[{ 'indent': '-1'}, { 'indent': '+1' }],
				[{ 'color': [] }, { 'background': [] }],
				['link'],
				// [{ 'direction': 'rtl' }],
				['clean'],
			]
		};
	},

	methods: {
		updateContent() {
			this.$emit('input', this.localContent);

			// Takodje moze i ovako, direktno preuzeti html preko api-a instance
			// this.$emit('input', this.$refs.editor.quill.getHTML());
		}
	}
}
</script>


<!-- =========================================================================================== -->
<!-- =========================================================================================== -->
<!-- =========================================================================================== -->


<template>
	<article>
		<vue-editor ref="editor" v-model="localContent" @input="updateContent()" :editorOptions="editorSettings" :editorToolbar="customToolbar"/>
	</article>
</template>


<!-- =========================================================================================== -->
<!-- =========================================================================================== -->
<!-- =========================================================================================== -->


<style scoped></style>