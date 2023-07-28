import localeEN from '../i18n/locales/en'
import localeRU from '../i18n/locales/ru'
import { highlightJSON } from '../utils'

test('highlightJSON', () => {
  const str = JSON.stringify({ a: 1, b: '2' })
  expect(highlightJSON(str)).toMatch('key')
  expect(highlightJSON(str)).toMatch('number')
  expect(highlightJSON(str)).toMatch('string')
})

const getKeys = (target: Record<string, any>) => {
  const keys: string[] = []

  for (const key in target) {
    if (typeof target[key] === 'object') {
      keys.push(...getKeys(target[key]))
    } else {
      keys.push(key)
    }
  }

  return keys
}

test('check locales completeness', () => {
  const ru = getKeys(localeRU).sort()
  const en = getKeys(localeEN).sort()
  expect(ru).toEqual(en)
})
