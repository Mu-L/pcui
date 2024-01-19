/**
 * PCUI is a front-end framework designed for creating user interfaces in web applications. It is
 * particularly well-suited for building browser-based tools. It offers a comprehensive set of UI
 * components like buttons, sliders, menus and data inputs.
 *
 * PCUI is written in TypeScript. The API can be used from both TypeScript and JavaScript. A React
 * wrapper is provided for easy integration with React applications.
 *
 * @module PCUI
 */

export * from './binding';
export * from './components';

// these strings are set by the build script
const version = 'PACKAGE_VERSION';
const revision = 'PACKAGE_REVISION';

export { version };
export { revision };
