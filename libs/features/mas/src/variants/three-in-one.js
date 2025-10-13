import { html, css } from 'lit';
import { VariantLayout } from './variant-layout.js';
import { CSS } from './three-in-one.css.js';

export const THREE_IN_ONE_AEM_FRAGMENT_MAPPING = {
    "mnemonics": {
        "size": "s",
        "slot": "icons"
    },
    "title": {
        "tag": "h3",
        "slot": "heading-xs",
        "maxCount": 250,
        "withSuffix": true
    },
    "subtitle": {
        "tag": "h4",
        "slot": "heading-xxs",
        "maxCount": 200,
        "withSuffix": true
    },
    "description": {
        "tag": "div",
        "slot": "body-s",
        "maxCount": 2000,
        "withSuffix": false
    },
    "prices": {
        "tag": "p",
        "slot": "price"
    },
    "borderColor": {
        "attribute": "border-color",
        "specialValues": {
            "gray": "--spectrum-gray-300",
            "blue": "--spectrum-blue-400"
        }
    }
};

export class ThreeInOne extends VariantLayout {
    getGlobalCSS() {
        return CSS;
    }

    get aemFragmentMapping() {
        return THREE_IN_ONE_AEM_FRAGMENT_MAPPING;
    }

    renderLayout() {
        return html`
            <div class="header">
                <div class="title-section">
                    <slot name="icons"></slot>
                    <slot name="heading-xs"></slot>
                </div>
                <slot name="heading-xxs"></slot>
            </div>
            <div class="description">
                <slot name="body-s"></slot>
            </div>
            <div class="pricing-section">
                <div class="price-container">
                    <slot name="price"></slot>
                </div>
            </div>
        `;
    }

    static variantStyle = css`
        :host([variant='three-in-one']) {
            --merch-card-three-in-one-max-width: 294px;
            --merch-card-three-in-one-padding: 24px;
            --merch-card-three-in-one-min-height: 389px;
            min-width: var(--merch-card-three-in-one-max-width);
            min-height: var(--merch-card-three-in-one-min-height);
            background: var(--spectrum-gray-50);
            border-radius: 16px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            padding: var(--merch-card-three-in-one-padding);
            gap: 16px;
            box-sizing: border-box;
            position: relative;
        }

        :host([variant='three-in-one']) .header {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            gap: 8px;
        }

        :host([variant='three-in-one']) .title-section {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 8px;
            flex: 1;
        }

        :host([variant='three-in-one']) .badge {
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--spectrum-blue-400);
            color: white;
            padding: 4px 12px;
            border-radius: 6px;
            font-size: 16px;
            font-weight: 700;
            z-index: 1;
        }

        :host([variant='three-in-one']) .pricing-section {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        :host([variant='three-in-one']) .price-container {
            display: flex;
            flex-direction: row;
            align-items: baseline;
            gap: 4px;
        }

        :host([variant='three-in-one']) .cta-section {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: auto;
        }

        :host([variant='three-in-one']) .footer-text {
            font-size: 12px;
            line-height: 1.4;
            color: var(--spectrum-gray-700);
        }
    `;
}

customElements.define('three-in-one-card', ThreeInOne);