/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable } from '@minimouli/framework'

suite('Error handling', () => {

    test('Bad rule number', async () => {

        const exec = new Executable('wolfram', [
            '--rule', '300'
        ])

        await exec.execute()

        expect(exec).toExitWith(84)
    })

    test('Bad option value', async () => {

        const exec = new Executable('wolfram', [
            '--rule', '30',
            '--lines', 'abc'
        ])

        await exec.execute()

        expect(exec).toExitWith(84)
    })

    test('No argument', async () => {

        const exec = new Executable('wolfram', [])

        await exec.execute()

        expect(exec).toExitWith(84)
    })

    test('Option with no value', async () => {

        const exec = new Executable('wolfram', [
            '--rule', '30',
            '--lines'
        ])

        await exec.execute()

        expect(exec).toExitWith(84)
    })

    test('Unknown option', async () => {

        const exec = new Executable('wolfram', [
            '--rule', '30',
            '--anything'
        ])

        await exec.execute()

        expect(exec).toExitWith(84)
    })

})
