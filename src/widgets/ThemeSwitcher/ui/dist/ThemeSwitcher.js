'use strict';
exports.__esModule = true;
exports.ThemeSwitcher = void 0;
var ThemesProvider_1 = require('app/providers/ThemesProvider');
var Button_1 = require('shared/ui/Button/Button');
var classNames_1 = require('shared/lib/classNames/classNames');
var theme_dark_svg_1 = require('shared/assets/icons/theme-dark.svg');
var theme_light_svg_1 = require('shared/assets/icons/theme-light.svg');
var theme_orange_svg_1 = require('shared/assets/icons/theme-orange.svg');
var react_1 = require('react');
exports.ThemeSwitcher = react_1.memo(function (_a) {
  var className = _a.className;
  var _b = ThemesProvider_1.useThemes(),
    theme = _b.theme,
    toggleTheme = _b.toggleTheme;
  var Component = react_1.useMemo(
    function () {
      var Comp;
      switch (theme) {
        case ThemesProvider_1.Themes.DARK:
          Comp = React.createElement(theme_dark_svg_1['default'], null);
          break;
        case ThemesProvider_1.Themes.LIGHT:
          Comp = React.createElement(theme_light_svg_1['default'], null);
          break;
        case ThemesProvider_1.Themes.ORANGE:
          Comp = React.createElement(theme_orange_svg_1['default'], null);
          break;
        default:
          Comp = React.createElement(theme_light_svg_1['default'], null);
      }
      return Comp;
    },
    [theme],
  );
  return React.createElement(
    Button_1.Button,
    {
      className: classNames_1.classNames('', [className]),
      theme: Button_1.ButtonThemes.CLEAR,
      onClick: toggleTheme,
    },
    Component,
  );
});
