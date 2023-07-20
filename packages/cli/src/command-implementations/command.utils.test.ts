import * as mock from 'ts-mockito'
import { Logger, SingleLineLogger } from '../logger'
import { GlobalCommandDefinition } from './global-command'
import { CommandArgv } from '../typings'
import { ProjectCommandDefinition } from './project-command'
import { CLI_ROOT_DIR } from '../root'
import * as consts from '../consts'

const singleLineLoggerMock = mock.mock(SingleLineLogger)
const stubSingleLineLogger = mock.instance(singleLineLoggerMock)

const loggerMock = mock.mock(Logger)
mock.when(loggerMock.line()).thenReturn(stubSingleLineLogger)
export const stubLogger = mock.instance(loggerMock)

type GlobalArgvProps = { botpressHome: string }
type ProjectArgvProps = GlobalArgvProps & { workDir: string }

export const globalArgv = (props: GlobalArgvProps): CommandArgv<GlobalCommandDefinition> => ({
  botpressHome: props.botpressHome,
  cliRootDir: CLI_ROOT_DIR,
  confirm: false,
  json: false,
  verbose: false,
})

export const projectArgv = (props: ProjectArgvProps): CommandArgv<ProjectCommandDefinition> => ({
  ...globalArgv(props),
  entryPoint: consts.defaultEntrypoint,
  outDir: consts.defaultOutputFolder,
  workDir: props.workDir,
})
