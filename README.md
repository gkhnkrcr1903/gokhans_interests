# Gökhan'ın İlgileri / Gökhan's Interests

Retro/CRT temalı, TR/EN dil destekli statik blog. Derleme adımı yoktur; GitHub Pages ile doğrudan yayınlanabilir.

## Yapı
- `index.html` – iskelet
- `css/style.css` – retro tasarım
- `js/i18n.js` – arayüz metinleri (tr/en)
- `js/posts/*.js` – yazılar (her biri `window.POSTS`'a eklenir)
- `js/app.js` – yönlendirme, dil, filtreler, istatistikler, lightbox

## Yeni konu eklemek
1. `js/posts/yeni-konu.js` oluştur (`computer-history.js` örnek alınabilir).
2. `index.html` içinde `app.js`'ten önce `<script>` ile ekle.

## Yerelde çalıştırma
```
python -m http.server 8765
```

Görseller Wikimedia Commons'tan, ilgili lisansları altında kullanılmaktadır.
