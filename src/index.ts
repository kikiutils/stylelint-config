// @ts-expect-error Ignore this error.
import merge from 'lodash/merge.js';
import type { Config } from 'stylelint';

export interface Options {
    /**
     * Determines how the final config is merged.
     * - `'assign'`: Shallow merge using `Object.assign`.
     * - `'lodash-merge'`: Deep merge using `lodash.merge`.
     *
     * @default 'lodash-merge'
     */
    configOverrideMode: 'assign' | 'lodash-merge';

    /**
     * Whether to ignore the `@apply` directive being flagged as deprecated.
     * Useful when working with utility-first frameworks like Tailwind CSS or UnoCSS.
     *
     * @default true
     */
    ignoreDeprecatedApply?: boolean;

    /**
     * Whether to ignore at-rules used by utility-first frameworks
     * like Tailwind CSS, UnoCSS, etc. (e.g., `@apply`, `@screen`)
     *
     * @default true
     */
    ignoreUtilityAtRules?: boolean;

    /**
     * An optional custom Stylelint config to override the base configuration.
     * Will be merged using the method defined in `configOverrideMode`.
     */
    overrideConfig?: Config;
}

export function createConfig(environment: 'html' | 'vue', options?: Options): Config {
    const extendConfigs = ['stylelint-config-standard-scss'];
    if (environment === 'html') extendConfigs.push('stylelint-config-html');
    else if (environment === 'vue') extendConfigs.push('stylelint-config-recommended-vue/scss');
    extendConfigs.push('stylelint-config-clean-order');

    const rules: Config['rules'] = { 'plugin/declaration-block-no-ignored-properties': true };
    if (options?.ignoreDeprecatedApply !== false) {
        rules['at-rule-no-deprecated'] = [
            true,
            { ignoreAtRules: ['apply'] },
        ];
    }

    if (options?.ignoreUtilityAtRules !== false) {
        rules['scss/at-rule-no-unknown'] = [
            true,
            {
                ignoreAtRules: [
                    'responsive',
                    'screen',
                    'theme',
                    'utilities',
                    'variants',
                ],
            },
        ];
    }

    const baseConfig: Config = {
        extends: extendConfigs,
        plugins: ['stylelint-declaration-block-no-ignored-properties'],
        reportInvalidScopeDisables: true,
        reportNeedlessDisables: true,
        rules,
    };

    if (options?.configOverrideMode === 'assign') return Object.assign(baseConfig, options.overrideConfig);
    return merge(baseConfig, options?.overrideConfig);
}

export const html = createConfig('html');
export const vue = createConfig('vue');
