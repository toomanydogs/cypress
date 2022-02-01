import dedent from 'dedent'
import type { ErrorWrapper } from '../generated/test-graphql-types.gen'
import type { MaybeResolver } from './clientTestUtils'

export const StubErrorWrapper = {
  __typename: 'ErrorWrapper',
  title: 'Support File Missing or Invalid',
  description: dedent`
    The support file is missing or invalid.

    Your \`supportFile\` is set to \`foo.bar.js\`, but either the file is missing or it's invalid. The \`supportFile\` must be a \`.js\`, \`.ts\`, \`.coffee\` file or be supported by your preprocessor plugin (if configured).

    Correct your \`foo.bar.js\`, create the appropriate file, or set \`supportFile\` to \`false\` if a support file is not necessary for your project.

    Or you might have renamed the extension of your \`supportFile\` to \`.ts\`. If that's the case, restart the test runner.

    Learn more at https://on.cypress.io/support-file-missing-or-invalid
  `,
  isUserCodeError: true,
  isRetryable: false,
  errorType: 'SUPPORT_FILE_NOT_FOUND',
  originalError: {
    __typename: 'OriginalError',
    name: 'Error',
    message: 'Error: foobar',
    stack: dedent`
      Error: foobar
        at module.exports (/Users/bmann/Dev/cypress-playground/v9.0.0/cypress/plugins/index.js:22:9)
        at /Users/bmann/Library/Caches/Cypress/9.1.1/Cypress.app/Contents/Resources/app/packages/server/lib/plugins/child/run_plugins.js:90:12
        at tryCatcher (/Users/bmann/Library/Caches/Cypress/9.1.1/Cypress.app/Contents/Resources/app/packages/server/node_modules/bluebird/js/release/util.js:16:23)
        at Function.Promise.attempt.Promise.try (/Users/bmann/Library/Caches/Cypress/9.1.1/Cypress.app/Contents/Resources/app/packages/server/node_modules/bluebird/js/release/method.js:39:29)
        at load (/Users/bmann/Library/Caches/Cypress/9.1.1/Cypress.app/Contents/Resources/app/packages/server/lib/plugins/child/run_plugins.js:87:7)
        at EventEmitter.<anonymous> (/Users/bmann/Library/Caches/Cypress/9.1.1/Cypress.app/Contents/Resources/app/packages/server/lib/plugins/child/run_plugins.js:198:5)
        at EventEmitter.emit (events.js:314:20)
        at process.<anonymous> (/Users/bmann/Library/Caches/Cypress/9.1.1/Cypress.app/Contents/Resources/app/packages/server/lib/plugins/util.js:19:22)
        at process.emit (events.js:314:20)
        at emit (internal/child_process.js:877:12)
        at processTicksAndRejections (internal/process/task_queues.js:85:21)    
    `,
  },
} as const

// For type checking
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _typeCheck: MaybeResolver<ErrorWrapper> = StubErrorWrapper