<script>
import { VueEditor } from 'vue2-editor';
import QuillTag from './EditorPlugins/QuillTag';


export default {
	name: 'EditorDemoTags',

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
			field: {},
			localContent: '',
			editorSettings: {},
			customToolbar: [
				[{ 'size': ['small', false, 'large', 'huge'] }],
				[{'align': ''}, {'align': 'center'}, {'align': 'right'}, {'align': 'justify'}],
				[{ 'header': 1 }, { 'header': 2 }],
				['link', 'image', 'video', 'formula'],
				['clean'],
			],
			tagText: 'tag tekst',
			tagType: 'red'
		};
	},

	methods: {
		updateContent() {
			this.$emit('input', this.localContent);
		},

		insertTweet(text, type) {
			QuillTag.insert(this.$refs.editor.quill, {text, type})
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
					@input="updateContent()">

			<template slot="toolbar">
				<div class="ql-snow ql-toolbar">
					<div class="ql-formats">
						<span class="ql-picker"><span class="ql-picker-label" style="line-height:22px">Insert tag:</span></span>

						<select class="tag-select" style="height:26px" v-model="tagType">
							<option value="red">Crvena</option>
							<option value="blue">Plava</option>
							<option value="orange">Narandžasta</option>
						</select>

						<input type="text" v-model="tagText" style="height:26px">
					</div>
					<div class="ql-formats">
						<button @click="insertTweet(tagText, tagType)">INSERT</button>
					</div>
				</div>
			</template>
		</vue-editor>
	</article>
</template>


<!-- =========================================================================================== -->
<!-- =========================================================================================== -->
<!-- =========================================================================================== -->


<style>
.tag {
	padding:3px 5px;
	display:inline-block;
	border-radius:3px;
	color:#FFFF;
	font-weight:bold;
	margin:0 3px;
}
.tag-red {
	background-color:crimson;
}
.tag-blue {
	background-color:#009efb;
}
.tag-orange {
	color:darkred;
	background-color:coral;
}
</style>