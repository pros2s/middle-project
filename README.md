## Запуск проекта

```
npm install - установка зависимостей
npm run start:dev или npm run start:vite:dev - запуск сервера + frontend проекта в dev режиме
```

---

## Скрипты

- `npm start` - Запуск frontend проекта на webpack dev server
- `npm run start:vite` - Запуск frontend проекта на vite
- `npm run start:dev:server` - Запуск backend сервера
- `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend
- `npm run start:vite:dev` - Запуск frontend проекта на vite + backend
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме (не минимизирован)
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером
- `npm run prettier:fix` - Форматирование файлов с помощью prettier
- `npm run project:beauty` - Запуск сразу трех команд форматирования - npm run lint:ts:fix, npm run lint:scss:fix, npm run prettier:fix
- `npm run test:unit` - Запуск unit тестов с jest
- `npm run test:cy` - Запуск e2e тестов с cypress
- `npm run test:loki` - Запуск скриншотных тестов с loki
- `npm run test:loki:ok` - Подтверждение новых скриншотов
- `npm run test:loki:ci` - Запуск скриншотных тестов в CI
- `npm run test:loki:json` - Генерация json отчета для скриншотных тестов
- `npm run test:loki:html` - Генерация HTML отчета для скриншотных тестов
- `npm run test:loki:report` - Генерация полного отчета для скриншотных тестов
- `npm run sb` - запуск Storybook
- `npm run sb:build` - Сборка storybook билда
- `npm run slice` - Скрипт для генерации FSD слайсов
- `npm run prepare` - прекоммит хуки

---

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Работа с переводами

В проекте используется библиотека i18next для работы с переводами.
Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендуем установить плагин для webstorm/vscode

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

---

## Тесты

В проекте используются 4 вида тестов:

1. Обычные unit тесты на jest - `npm run test:unit`
2. Тесты на компоненты с React testing library -`npm run test:unit`
3. Скриншотное тестирование с loki `npm run test:loki`
4. e2e тестирование с Cypress `npm run test:cy`

Подробнее о тестах - [документация тестирование](/docs/tests.md)

---

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin _eslint-plugin-pross-plugin_,
который содержит 3 правила

1. path-watcher - запрещает использовать абсолютные импорты в рамках одного модуля
2. fsd-layer-imports - проверяет корректность использования слоев с точки зрения FSD (например widgets нельзя использовать в features и entitites)
3. public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix

##### Запуск линтеров

- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

---

## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:

- `npm run sb`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
};
```

---

## Конфигурация проекта

Для разработки проект содержит 2 конфига:

1. Webpack - ./config/build
2. vite - vite.config.ts

Оба сборщика адаптированы под основные возможности приложения.

Вся конфигурация хранится в /config

- /config/babel - babel
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

---

## CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

---

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicReducerLoader](/src/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader.tsx)

---

## Сущности (entities)

- [Article](/src/entities/article)
- [Comment](/src/entities/comment)
- [Country](/src/entities/countrySelect)
- [Currency](/src/entities/currencySelect)
- [Notification](/src/entities/notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/raiting)
- [User](/src/entities/user)

## Фичи (features)

- [addComment](/src/features/addComment)
- [articleRaiting](/src/features/articleRaiting)
- [articleTabs](/src/features/articleTabs)
- [articleViewSelector](/src/features/articleViewSelector)
- [authByUsername](/src/features/authByUsername)
- [avatarLogInBtn](/src/features/avatarLogInBtn)
- [editableProfileCard](/src/features/editableProfileCard)
- [notificationBtn](/src/features/notificationBtn)
- [orderArticles](/src/features/orderArticles)
- [profileRating](/src/features/profileRating)
- [searchArticles](/src/features/searchArticles)
- [sortArticles](/src/features/sortArticles)
- [switcherLanguage](/src/features/switcherLanguage)
- [switcherThemes](/src/features/switcherThemes)

## [Shared слой](./src/shared)
