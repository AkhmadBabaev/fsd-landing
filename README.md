Руководство
============

Тестовое задание компании FSD.
Страницы: [Cards](https://akhmadbabaev.github.io/fsd-landing/), [Colors & Types](https://akhmadbabaev.github.io/fsd-landing/colors.html).

## 🏷️ Содержание

- [Требования](#requirements)
- [Установка](#installation)
- [Команды](#commands)
- [Структура проекта](#structure)
- [Технологии](#technologies)
- [Лицензия](#license)


## <a name="requirements"></a> ✒️ Требования

Прежде чем приступить к установке убедитесь что у вас имеются следующие компоненты списка:

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com)
- [Git](https://git-scm.com/)


##  <a name="installation"></a> 💾 Установка

Инcтрукции данного раздела следует выполнять в командной строке.

```bash
# Скачайте репозиторий
git clone https://github.com/AkhmadBabaev/fsd-landing

# Перейдите в папку с репозиторием
cd fsd-landing

# Установите зависимости
yarn install
```


##  <a name="commands"></a> 📗 Команды

- `yarn dev` - запускает *development* сборку, поднимает локальный сервер с результатом cборки. Не сохраняет результат в файловой системе. Детали работы в [webpack.dev.js](./config/webpack.dev.js).

- `yarn start` - дополняет команду `yarn dev` тем, что запускает ваш браузер по умолчанию (если он не запущен), создает вкладку с адресом лок. сервера и переходит к ней.

- `yarn prod` - запускает *production* сборку и сохраняет результат в папку `/docs`. Детали работы в [webpack.prod.js](./config/webpack.prod.js).

- `yarn deploy` - Развертывает содержимое папки `/docs` в `git` ветку *gh-pages*.


##  <a name="structure"></a> 🗂️ Структура проекта

**/src** - служит для хранения исходников.
    - **assets:** вспомогательные файлы проекта
    - **components:** компоненты проекта
    - **pages:** страницы

**/public** - для хранения файлов которые не нужно обрабатывать *webpack'ом*.

**/docs** - для результата сборки проекта.

**/config** - предназначен для конфигурационных файлов *webpack* и файлов имеющих к ним отношение.


##  <a name="technologies"></a> 🛠️ Технологии

Сборка проекта осуществляется с помощью [Webpack](https://webpack.js.org). 

* Разметка: [Pug](https://pugjs.org/api/getting-started.html).
* Стили: [SCSS](https://sass-lang.com), [PostCSS](https://postcss.org), [BEM](https://ru.bem.info).
* Сценарии: JS, [ESLint](https://eslint.org/), [Babel](https://babeljs.io).
* Настройки редактора: [EditorConfig](https://editorconfig.org).


##  <a name="license"></a> 📃 Лицензия

Этот проект лицензирован на условиях лицензии **MIT**.

> Вы можете ознакомиться с содержанием лицензии [здесь](./LICENSE.md).
