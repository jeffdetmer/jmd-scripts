import cases from 'jest-in-case'

jest.mock('jest', () => ({run: jest.fn()}))
jest.mock('../../config/jest.config', () => ({builtInConfig: true}))

// this removes the quotes around strings...
expect.addSnapshotSerializer({
  print: val => val,
  test: val => typeof val === 'string',
})

cases(
  'format',
  ({
    args = [],
    utils = require('../../utils'),
    pkgHasJestProp = false,
    hasJestConfigFile = false,
    setup = () => () => {},
    ci = 'false',
    precommit = 'false',
  }) => {
    // beforeEach
    const {run: jestRunMock} = require('jest')
    const originalArgv = process.argv
    const prevCI = process.env.CI
    const prevPrecommit = process.env.SCRIPTS_PRECOMMIT
    process.env.CI = ci
    process.env.SCRIPTS_PRECOMMIT = precommit
    Object.assign(utils, {
      hasPkgProp: () => pkgHasJestProp,
      hasFile: () => hasJestConfigFile,
    })
    process.exit = jest.fn()
    const teardown = setup()

    process.argv = ['node', '../test', ...args]
    jestRunMock.mockClear()

    try {
      // tests
      require('../test')
      expect(jestRunMock).toHaveBeenCalledTimes(1)
      const [firstCall] = jestRunMock.mock.calls
      const [jestArgs] = firstCall
      expect(jestArgs.join(' ')).toMatchSnapshot()
    } catch (error) {
      throw error
    } finally {
      teardown()
      // afterEach
      process.argv = originalArgv
      process.env.CI = prevCI
      process.env.SCRIPTS_PRECOMMIT = prevPrecommit
      jest.resetModules()
    }
  },
  {
    'calls jest.run with default args': {},
    'does not watch on CI': {
      ci: 'true',
    },
    'does not watch on SCRIPTS_PRECOMMIT': {
      precommit: 'true',
    },
    'does not watch with --no-watch': {
      args: ['--no-watch'],
    },
    'does not watch with --coverage': {
      args: ['--coverage'],
    },
    'does not watch --updateSnapshot': {
      args: ['--updateSnapshot'],
    },
    'uses custom config with --config': {
      args: ['--config', './my-config.js'],
    },
    'uses custom config with jest prop in pkg': {
      pkgHasJestProp: true,
    },
    'uses custom config with jest.config.js file': {
      hasJestConfigFile: true,
    },
    'forwards args': {
      args: ['--coverage', '--watch'],
    },
  },
)
