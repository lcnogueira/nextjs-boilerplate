/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */

// For some reason TS is unable to augment jest.Matchers when importing jest-styled-components
// https://github.com/styled-components/jest-styled-components/issues/291
declare namespace jest {
  interface AsymmetricMatcher {
    $$typeof: symbol
    sample?: string | RegExp | object | Array<any> | Function
  }

  type Value = string | number | RegExp | AsymmetricMatcher | undefined

  interface Options {
    media?: string
    modifier?: string
    supports?: string
  }

  interface Matchers<R> {
    toHaveStyleRule(property: string, value?: Value, options?: Options): R
  }
}
