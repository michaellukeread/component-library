import '@testing-library/jest-dom/extend-expect'
import '@testing-library/react-hooks/dont-cleanup-after-each'

global.console = {
  debug: jest.fn(), // mock out debug lines

  // Keep native behaviour for other methods
  log: console.log,
  error: console.error,
  warn: console.warn,
  info: console.info // use this to emit test info
}
