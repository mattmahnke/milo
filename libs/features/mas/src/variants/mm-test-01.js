import { html, css } from 'lit';
import { VariantLayout } from './variant-layout.js';
import { CSS } from './mm-test-01.css.js';

export const MM_TEST_01_AEM_FRAGMENT_MAPPING = {
    "mnemonics": {
        "size": "s"
    },
    "title": {
        "tag": "h3",
        "slot": "heading-xs",
        "maxCount": 250,
        "withSuffix": true
    },
    "borderColor": {
        "attribute": "border-color",
        "specialValues": {
            "gray": "--spectrum-gray-300",
            "blue": "--spectrum-blue-400"
        }
    }
};

export class MmTest01 extends VariantLayout {
    getGlobalCSS() {
        return CSS;
    }

    get aemFragmentMapping() {
        return MM_TEST_01_AEM_FRAGMENT_MAPPING;
    }

    renderLayout() {
        return html`
            <div class="header">
                <div class="title-section">
                    <slot name="icons"></slot>
                    <slot name="heading-xs"></slot>
                </div>
            </div>
        `;
    }

    static variantStyle = css`
        :host([variant='mm-test-01']) {
            --merch-card-mm-test-01-max-width: 294px;
            --merch-card-mm-test-01-padding: 24px;
            --merch-card-mm-test-01-min-height: 389px;
            min-width: var(--merch-card-mm-test-01-max-width);
            min-height: var(--merch-card-mm-test-01-min-height);
            background: var(--spectrum-gray-50);
            border-radius: 16px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            padding: var(--merch-card-mm-test-01-padding);
            gap: 16px;
            box-sizing: border-box;
            position: relative;
        }

        :host([variant='mm-test-01']) .header {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            gap: 8px;
        }

        :host([variant='mm-test-01']) .title-section {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 8px;
            flex: 1;
        }

        :host([variant='mm-test-01']) .badge {
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

        :host([variant='mm-test-01']) .pricing-section {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        :host([variant='mm-test-01']) .price-container {
            display: flex;
            flex-direction: row;
            align-items: baseline;
            gap: 4px;
        }

        :host([variant='mm-test-01']) .cta-section {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: auto;
        }

        :host([variant='mm-test-01']) .footer-text {
            font-size: 12px;
            line-height: 1.4;
            color: var(--spectrum-gray-700);
        }
    `;
}

customElements.define('mm-test-01-card', MmTest01);