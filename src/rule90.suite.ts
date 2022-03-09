/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable, Path } from '@minimouli/framework'

suite('Rule 90', () => {

    test('Big', async () => {

        const exec = new Executable('wolfram', [
            '--rule', '90',
            '--lines', '64'
        ])

        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(Path.fromMouli('/res/rule90/big'))
    })

    test('Bigger', async () => {

        const exec = new Executable('wolfram', [
            '--rule', '90',
            '--lines', '128'
        ])

        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(Path.fromMouli('/res/rule90/bigger'))
    })

    test('With start', async () => {

        const exec = new Executable('wolfram', [
            '--rule', '90',
            '--lines', '64',
            '--start', '64'
        ])

        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(Path.fromMouli('/res/rule90/with-start'))
    })

})
