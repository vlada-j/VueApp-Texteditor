import { Quill } from 'vue2-editor';
const Embed = Quill.import('blots/embed');

class QuillTag extends Embed {
	static create(options) {
		let node = super.create();
		node.dataset.type = options.type;

		node.contentEditable = false;
		node.innerText = '[' + options.text + ']';
		node.classList.add('tag-' + options.type);

		return node;
	}

	static value(domNode) {
		return domNode.dataset.type;
	}

	static insert(ref, options) {
		if (!ref) return;

		let selection = ref.getSelection();
		if (selection) {
			ref.insertEmbed(selection.index, 'tag', options, Quill.sources.USER);
			ref.setSelection(selection.index + 1, Quill.sources.SILENT);
		}
	}
}
QuillTag.blotName = 'tag';
QuillTag.tagName = 'span';
QuillTag.className = 'tag';

Quill.register(QuillTag);

export default QuillTag;