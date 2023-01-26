## Storybook

Webpack для сторибука настраивался на основе сборки webpack всего проекта

### main.js

Помимо основных аддонов, были установлены еще 2: `storybook-addon-mock` - для моков запросов на сервер и `storybook-addon-themes` - для удобного переключения темы проекта прямо в запущенном сторибуке.

Также, для отображения и переключения переводов i18next указана опция `staticDirs: ['../../public']`, ведущая к местонахождению всех переводов.

### preview.js

Кроме параметров по умолчанию, указаны `layout: 'fullscreen` - чтобы убрать внешние отступы компонентов themes - для настройки `storybook-addon-themes`:

```javascript
themes: {
    default: 'dark',
    list: [
      { name: 'dark', class: Themes.DARK, color: '#3d3d3d' },
      { name: 'light', class: Themes.LIGHT, color: '#efefef' },
      { name: 'orange', class: Themes.ORANGE, color: '#deb34f' },
    ],
  },
```

Настройка переключения языков переводов:

```javascript
export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'ru', title: 'Russian' },
      ],
      title: 'Translate',
    },
  },
};
```

#### Декораторы - [decorators](../src/shared/config/storyBook)

1. `addDecorator(I18nextDecorator)` - обертка для корректого отображения переводов
2. `addDecorator(StyleDecorator)` - обертка для корректого отображения стилей
3. `addDecorator(ThemeDecorator(Themes.LIGHT))` - обертка для корректого отображения тем (по умолчанию light_theme)
4. `addDecorator(RouterDecorator)` - обертка для корректой обработки `react-router`
5. `addDecorator(SuspenseDecorator)` - обертка для корректой обработки lazy загрузки компонентов
