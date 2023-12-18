/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            'background1': 'var(--background1)',
            'background2': 'var(--background2)',
            'background3': 'var(--background3)',
            'background4': 'var(--background4)',
            'background5': 'var(--background5)',
            'backgroundInactive': 'var(--backgroundInactive)',
            'backgroundInverse': 'var(--backgroundInverse)',
            'backgroundInput': 'var(--backgroundInput)',
            'actionPrimaryBackground': 'var(--actionPrimaryBackground)',
            'actionPrimaryBackgroundHover': 'var(--actionPrimaryBackgroundHover)',
            'actionPrimaryText': 'var(--actionPrimaryText)',
            'actionPrimaryTextHover': 'var(--actionPrimaryTextHover)',
            'actionSecondaryText': 'var(--actionSecondaryText)',
            'actionSecondaryTextHover': 'var(--actionSecondaryTextHover)',
            'border1': 'var(--border1)',
            'border2': 'var(--border2)',
            'border3': 'var(--border3)',
            'text1': 'var(--text1)',
            'text2': 'var(--text2)',
            'text3': 'var(--text3)',
            'textInactive': 'var(--textInactive)',
            'textInverse': 'var(--textInverse)',
            'blueText': 'var(--blueText)',
            'blueIcon': 'var(--blueIcon)',
            'blueBorder': 'var(--blueBorder)',
            'greenBackground': 'var(--greenBackground)',
            'greenBackgroundHover': 'var(--greenBackgroundHover)',
            'greenText': 'var(--greenText)',
            'greenIcon': 'var(--greenIcon)',
            'greenBorder': 'var(--greenBorder)',
            'yellowBackground': 'var(--yellowBackground)',
            'yellowBackgroundHover': 'var(--yellowBackgroundHover)',
            'yellowText': 'var(--yellowText)',
            'yellowIcon': 'var(--yellowIcon)',
            'yellowBorder': 'var(--yellowBorder)',
            'redBackground': 'var(--redBackground)',
            'redBackgroundHover': 'var(--redBackgroundHover)',
            'redText': 'var(--redText)',
            'redIcon': 'var(--redIcon)',
            'redBorder': 'var(--redBorder)',
            'orangeBackground': 'var(--orangeBackground)',
            'orangeBackgroundHover': 'var(--orangeBackgroundHover)',
            'orangeText': 'var(--orangeText)',
            'orangeIcon': 'var(--orangeIcon)',
            'orangeBorder': 'var(--orangeBorder)',
            'purpleBackground': 'var(--purpleBackground)',
            'purpleBackgroundHover': 'var(--purpleBackgroundHover)',
            'purpleText': 'var(--purpleText)',
            'purpleIcon': 'var(--purpleIcon)',
            'purpleBorder': 'var(--purpleBorder)',

        },
        // fontSize:{
        //     'size-small':'--font-size-small',
        //     'size-large':'--font-size-large',
        // },
        letterSpacing:{
            'small-letter-spacing':'--font-size-small-letter-spacing'
        },
        borderRadius:{
            'radius-sm':'--border-radius'
        },
        extend: {

            fontFamily: {
                'inter': ['Inter, sans-serif']
            },
            backgroundImage:{
                'actionSecondaryBackground': 'var(--actionSecondaryBackground)',
                'actionSecondaryBackgroundHover': 'var(--actionSecondaryBackgroundHover)',
            },
            boxShadow:{
                'action-colored': 'var(--boxShadows-action-colored)',
                'action-secondary': 'var(--boxShadows-action-secondary)',
                'input-inner': 'var(--boxShadows-input-inner)',
                'menu': 'var(--boxShadows-menu)',
                'input-inner-shadow': 'var(--input-inner-shadow)',
                'menu-shadow': 'var(--menu-shadow)',
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
