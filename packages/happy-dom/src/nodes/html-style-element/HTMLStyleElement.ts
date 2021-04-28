import CSSStyleSheet from '../../css/CSSStyleSheet';
import HTMLElement from '../html-element/HTMLElement';
import IHTMLStyleElement from './IHTMLStyleElement';

/**
 * HTML Style Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement
 */
export default class HTMLStyleElement extends HTMLElement implements IHTMLStyleElement {
	/**
	 * Returns CSS style sheet.
	 *
	 * @return CSS style sheet.
	 */
	public get sheet(): CSSStyleSheet {
		if (!this._isConnected) {
			return null;
		}
		const styleSheet = new CSSStyleSheet();
		styleSheet.replaceSync(this.innerText);
		return styleSheet;
	}

	/**
	 * Returns media.
	 *
	 * @return media.
	 */
	public get media(): string {
		return this.getAttributeNS(null, 'media') || '';
	}

	/**
	 * Sets media.
	 *
	 * @param media media.
	 */
	public set media(media: string) {
		this.setAttributeNS(null, 'media', media);
	}

	/**
	 * Returns type.
	 *
	 * @return type.
	 */
	public get type(): string {
		return this.getAttributeNS(null, 'type') || '';
	}

	/**
	 * Sets type.
	 *
	 * @param type type.
	 */
	public set type(type: string) {
		this.setAttributeNS(null, 'type', type);
	}

	/**
	 * Returns disabled.
	 *
	 * @return Disabled.
	 */
	public get disabled(): boolean {
		return this.getAttributeNS(null, 'disabled') !== null;
	}

	/**
	 * Sets disabled.
	 *
	 * @param disabled Disabled.
	 */
	public set disabled(disabled: boolean) {
		if (!disabled) {
			this.removeAttributeNS(null, 'disabled');
		} else {
			this.setAttributeNS(null, 'disabled', '');
		}
	}
}
