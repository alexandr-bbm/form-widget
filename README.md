### Инструкции по развертыванию проекта
1. Установить node
2. Установить зависимости: папке проекта запустить команду `npm i`.
3. Разработка с hot-reload: Запустить `npm start`
4. Сборка: запустить команду `npm run build`

### Пример вставки виджета на сайт
Внутри закрывающим тегом `head` вставьте
```javascript
<script src="https://alexandr-bbm.github.io/form-widget/dist/bundle.js"></script>
```

Перед закрывающим тегом `<body>` вставьте
```javascript
<script>
   CompanyName.FormWidget.create({
      affiliateId: 'YOUR_ID',
      containerId: 'FORM_CONTAINER_ID',
    });
</script>
```

Если вы хотите поменять цвета фона, кнопки или текста, задайте конфигурацию следующим образом
```javascript
<script>
   CompanyName.FormWidget.create({
      affiliateId: 'YOUR_ID',
      containerId: 'FORM_CONTAINER_ID',
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
- Браузеры: IE 9+, Opera 15 и все остальные current version - 1.
- Использование css-модулей позволяет изолировать стили от внешней страницы.
- С помощью плагина postcss-autoreset предотвращается поломка стилей
виджета возможными глобальными стилями страницы (напр. `form {margin-bottom: 10px}`)
- Cделан адаптив по ширине контейнера.
- Возможно вставить несколько форм, расширить апи виджета.
