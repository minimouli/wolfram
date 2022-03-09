/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable, Path } from '@minimouli/framework'

suite('Basic', () => {

    test('Rule 30 simple', async () => {

        const exec = new Executable('wolfram', [
            '--rule', '30',
            '--lines', '16'
        ])

        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(Path.fromMouli('/res/rule30/simple'))
    })

})
