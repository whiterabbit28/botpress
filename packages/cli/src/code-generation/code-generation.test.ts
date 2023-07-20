import tsc from 'typescript'
import * as vt from 'vitest'
import fs from 'fs'
import pathlib from 'path'
import tmp from 'tmp'
import * as codegen from '.'

const writeFiles = async (files: codegen.File[]) => {
  for (const file of files) {
    const dirPath = pathlib.dirname(file.path)
    await fs.promises.mkdir(dirPath, { recursive: true })
    await fs.promises.writeFile(file.path, file.content)
  }
}

const build = (fileNames: string[], options: tsc.CompilerOptions): void => {
  let program = tsc.createProgram(fileNames, options)
  let emitResult = program.emit()

  const allDiagnostics = tsc.getPreEmitDiagnostics(program).concat(emitResult.diagnostics)
  if (allDiagnostics.length) {
    throw new Error('Build failed')
  }
}

vt.describe('code-generation', () => {
  let tmpDir: tmp.DirResult
  vt.beforeAll(() => {
    tmpDir = tmp.dirSync({ unsafeCleanup: true })
  })
  vt.afterAll(() => {
    tmpDir.removeCallback()
  })

  vt.test('generateIntegrationImplementationTypings should always build', async () => {
    const files = await codegen.generateIntegrationImplementationTypings(
      {
        name: 'test',
        version: '0.0.1',
        icon: 'test',
        description: 'test',
        title: 'test',
        readme: 'test',
        secrets: [],
        configuration: {
          schema: {
            type: 'object',
            properties: {
              foo: {
                type: 'string',
              },
              bar: {
                type: 'number',
              },
            },
          },
        },
        actions: {},
        channels: {},
        events: {},
        states: {},
        user: {},
      },
      tmpDir.name
    )

    await writeFiles(files)
    build(
      files.map((f) => f.path),
      {}
    )
  })
})
