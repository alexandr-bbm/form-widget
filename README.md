### Инструкции по развертыванию проекта
1. Установить зависимости: в папке проекта запустить команду `npm i`. (подразумевается, что [NodeJS](https://nodejs.org/en/) установлена)
2. Разработка с hot-reload: Запустить `npm start`
3. Сборка `/dist/bundle.js`: запустить команду `npm run build`

### Инструкции по вставке виджета на сайт
Перед закрывающим тегом `head` вставьте
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

Если вы хотите поменять цвета фона (background), кнопки (button) или текста (text), задайте конфигурацию следующим образом
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
В качестве значений этих полей принимаются строки с цветами в форме HEX либо RGBA.

Возможна вставка нескольких форм на странице:
```javascript
<script>
   CompanyName.FormWidget.create({
      affiliateId: 'YOUR_ID',
      containerId: 'FORM_CONTAINER_ID_1',
    });
   CompanyName.FormWidget.create({
      affiliateId: 'YOUR_ID',
      containerId: 'FORM_CONTAINER_ID_2',
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
- Cделан адаптив по ширине родительского контейнера формы.
- Возможно вставить несколько форм, легко расширить апи виджета.
- Подключен календарь.
