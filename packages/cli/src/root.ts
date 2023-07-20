import * as utils from './utils'

/**
 * Important:
 *
 * This file must be kept at the root of the `src` directory. This is because the `cliRootDir` is
 * used to resolve the `package.json` file of the CLI, which is used to determine the version of
 * the CLI.
 */

export const CLI_ROOT_DIR = utils.path.join(__dirname as utils.path.AbsolutePath, '..')
