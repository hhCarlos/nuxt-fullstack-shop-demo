import eslint from '@eslint/js'
import vue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'

export default [
  // JS base rules
  eslint.configs.recommended,

  // TS recommended
  ...tseslint.configs.recommended,

  // Vue rules
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: (await import('vue-eslint-parser')).default,
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        useRoute: 'readonly',
        useRouter: 'readonly',
        useFetch: 'readonly',
        useState: 'readonly',
        useAsyncData: 'readonly',
        definePageMeta: 'readonly',
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineNuxtPlugin: 'readonly',
        $fetch: 'readonly',
      },
    },
    plugins: { vue },
    rules: {
      ...vue.configs.essential.rules,
      'vue/multi-word-component-names': 'off',
    },
  },

  // Global custom rules
  {
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-unused-vars': 'warn',
    },
  },

  // Ignores
  {
    ignores: [
      '.nuxt/',
      '.output/',
      'dist/',
      '.nitro/',
      'node_modules/',
      '.cache/',
      'coverage/',
      'server/',
      'data/',
      '.DS_Store',
      '.idea/',
      '.fleet/',
      '.vscode/',
      '*.log',
      'eslint.config.js',
      'nuxt.config.ts',
    ],
  },
]
