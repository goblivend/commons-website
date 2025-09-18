document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    const elementsToTranslate = document.querySelectorAll('[data-en], [data-fr]');

    languageToggle.addEventListener('click', function() {
        const currentLanguage = languageToggle.textContent;
        if (currentLanguage === 'FR') {
            languageToggle.textContent = 'EN';
            switchLanguage('fr');
        } else {
            languageToggle.textContent = 'FR';
            switchLanguage('en');
        }
    });

    function switchLanguage(lang) {
        elementsToTranslate.forEach(element => {
            const key = lang === 'en' ? 'data-en' : 'data-fr';
            const text = element.getAttribute(key);
            if (text) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = text;
                } else {
                    element.innerHTML = text;
                }
            }
        });

        // Dispatch event so other scripts can react
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }
});
