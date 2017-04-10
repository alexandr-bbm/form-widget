### Инструкции по развертыванию проекта
1. Установить зависимости: в папке проекта в терминале запустить команду `npm i`. (подразумевается, что уже установлена [NodeJS](https://nodejs.org/en/))
2. Разработка: запустить команду `npm start`.
3. Сборка `/dist/bundle.js`: запустить команду `npm run build`.

### Инструкции по вставке виджета на сайт
Перед закрывающим тегом `<head>` вставьте:
```javascript
<script src="https://alexandr-bbm.github.io/form-widget/dist/bundle.js"></script>
```

Перед закрывающим тегом `<body>` вставьте следующий код, заменив `YOUR_ID` на ваш партнерский id, а `FORM_CONTAINER_ID` - на id элемента на странице, внутри которого вы хотите поместить виджет:
```javascript
<script>
   CompanyName.FormWidget.create({
      affiliateId: 'YOUR_ID',
      containerId: 'FORM_CONTAINER_ID',
    });
</script>
```

Если вы хотите поменять цвета фона (background), кнопки (button) или текста (text), задайте конфигурацию следующим образом:
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
В качестве значений этих полей принимаются строки с цветами в форме HEX, либо RGB.

Возможна вставка нескольких виджетов на странице:
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

### Замечания
- Присутвтсвуют несоответствия с макетом (в основном связанные со шрифтами), поскольку не удалось открыть sketch файл.
Пробовал открывать в версиях sketch 43,42, 3, везде одна и та же ошибка
"The document “TP_test.sketch” could not be opened."

### Комментарии
- Возможность кастомизации цветов кнопки, фона и текста.
- Браузеры: IE 10+, Opera 15 и все остальные current version - 1.
- Реализован адаптив по ширине родительского контейнера.
- Использование css-модулей позволяет изолировать стили виджета от внешней страницы.
- С помощью плагина postcss-autoreset предотвращается поломка стилей
виджета возможными глобальными стилями страницы (напр. `form {margin-bottom: 10px}`)
- Возможно вставить несколько форм, интерфейс виджета легко расширяем.
- Для компонентного подхода использован Preact - легковесный аналог React.
- Подключен календарь. Выбор плагина сделан в пользу меньшего размера скрипта. Потенциально возможны пересечения со стилями внешней страницы, но маловероятны.
