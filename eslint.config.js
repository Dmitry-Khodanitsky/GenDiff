import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin'

export default [
  stylistic.configs.recommended, // Стилистические правила для всех файлов

  // ЕДИНЫЙ блок для JS-файлов
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      // js: ← это лишнее, @eslint/js не нужно регистрировать как плагин
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
    rules: {
      // Все JS-специфичные правила здесь
    },
  },
]
