### Инструкции по развертыванию проекта
1. Установить node
2. Установить зависимости: папке проекта запустить команду `npm i`.
3. Разработка с hot-reload: Запустить `npm start`
4. Сборка: запустить команду `npm run build`

### Пример вставки виджета на сайт
Перед закрывающим тегом `<body>` вставить код
```javascript
<script src="./dist/bundle.js"></script>
<script>
   CompanyName.FormWidget.create({
      /* Required */
      affiliateId: 'YOUR_ID',
      containerId: 'FORM_CONTAINER_ID',
      /* Optional  */
      customColors: {
        background: '#4990E2',
        button: '#F4A43E',
        text: '#FFF',
      }
    });
</script>
```

### note
Шрифты не соответствуют макету, поскольку не удалось открыть sketch файл.
Пробовал открывать в версиях sketch 43,42, 3, везде одна и та же ошибка
"The document “TP_test.sketch” could not be opened."

### done
- Возможность кастомизации цветов кнопки, фона и текста.
- Браузеры: IE 9+, Opera 12 и все остальные current version - 1.
- Использование css-модулей позволяет изолировать стили от внешней страницы.
- С помощью плагина postcss-autoreset предотвращается поломка стилей
виджета возможными глобальными стилями страницы (напр. `form {margin-bottom: 10px}`)
- Cделан адаптив по ширине контейнера.
- Возможно вставить несколько форм, расширить апи виджета.
