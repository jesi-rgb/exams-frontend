const blockTools = require('@sanity/block-tools').default;
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const defaultSchema = require('./defaultSchema');

const DEFAULT_BLOCK = Object.freeze({
	_type: 'block',
	markDefs: [],
	style: 'normal'
});

const HTML_HEADER_TAGS = {
	h1: { ...DEFAULT_BLOCK, style: 'h1' },
	h2: { ...DEFAULT_BLOCK, style: 'h2' },
	h3: { ...DEFAULT_BLOCK, style: 'h3' },
	h4: { ...DEFAULT_BLOCK, style: 'h4' },
	h5: { ...DEFAULT_BLOCK, style: 'h5' },
	h6: { ...DEFAULT_BLOCK, style: 'h6' }
};

const HTML_BLOCK_TAGS = {
	p: DEFAULT_BLOCK,
	blockquote: { ...DEFAULT_BLOCK, style: 'blockquote' }
};

const blockContentType = defaultSchema
	.get('blogPost')
	.fields.find((field) => field.name === 'body').type;
function tagName(el) {
	if (!el || el.nodeType !== 1) {
		return undefined;
	}
	return el.tagName.toLowerCase();
}
function parseHTML(HTMLDoc) {
	const rules = [
		{
			deserialize(el, next) {
				const blocks = { ...HTML_BLOCK_TAGS, ...HTML_HEADER_TAGS };
				let block = blocks[tagName(el)];
				if (!block) {
					return undefined;
				}
				// Don't add blocks into list items
				if (el.parentNode && tagName(el) === 'li') {
					return next(el.childNodes);
				}
				// Add an id property for heading blocks
				if (/^h\d/.test(tagName(el))) {
					return {
						...block,
						id: el.id,
						children: next(el.childNodes)
					};
				}

				return {
					...block,
					children: next(el.childNodes)
				};
			}
		},
		{
			deserialize(el, next, block) {
				if (el.tagName.toLowerCase() !== 'figure') {
					return undefined;
				}
				const img = Array.from(el.children).find((child) => child.tagName.toLowerCase() === 'img');
				const caption = Array.from(el.children).find(
					(child) => child.tagName.toLowerCase() === 'figcaption'
				);

				return block({
					_type: 'figure',
					image: {
						// using the format for importing assets via the CLI
						// https://www.sanity.io/docs/data-store/importing-data#import-using-the-cli
						_sanityAsset: `image@${img.getAttribute('src')}`
					},
					alt: img.getAttribute('alt'),
					caption: caption.textContent
				});
			}
		},
		{
			// Special case for code blocks (wrapped in pre and code tag)
			deserialize(el, next, block) {
				if (!el) {
					return undefined;
				}
				if (el.tagName.toLowerCase() !== 'pre') {
					return undefined;
				}
				const code = el.children[0];

				const childNodes =
					code && code.tagName.toLowerCase() === 'code' ? code.childNodes : el.childNodes;
				let text = '';
				childNodes.forEach((node) => {
					text += node.textContent;
				});
				/**
				 * use `block()` to add it to the
				 * root array, instead of as
				 * children of a block
				 *  */

				return block({
					_type: 'code',
					language: el.dataset.language,
					text
				});
			}
		}
	];
	/**
	 * Since we're in a node context, we need
	 * to give block-tools JSDOM in order to
	 * parse the HTML DOM elements
	 */
	return HTMLDoc
		? blockTools.htmlToBlocks(HTMLDoc, blockContentType, {
				rules,
				parseHtml: (html) => new JSDOM(html).window.document
		  })
		: [];
}

module.exports = parseHTML;
