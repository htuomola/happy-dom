import CSSStyleSheet from '../../css/CSSStyleSheet';
import IHTMLElement from '../html-element/IHTMLElement';

/**
 * HTML Style Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement
 */
export default interface IHTMLStyleElement extends IHTMLElement {
	media: string;
	type: string;
	disabled: boolean;
	readonly sheet: CSSStyleSheet;
}
