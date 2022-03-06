import { defineConfig } from '@windicss/plugin-utils';

export default defineConfig({
    /**
     * Write windi classes in html attributes.
     * @see https://windicss.org/features/attributify.html
     */
    attributify: true,
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        extend: {
            fontFamily: {
                sans: ['Poppins'],
            },
        },
    },
});
