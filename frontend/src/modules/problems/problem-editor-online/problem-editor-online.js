import { inject } from 'aurelia-framework'
import { BlocklyCustom } from 'services/services'

// dependencias a inyectar: Servicio de blockly custom (BlocklyCustom)
@inject(BlocklyCustom)
export class ProblemEditorOnline {

    /**
     * Crea una instancia de ProblemEditorOnline.
     * @param {service} blocklyCustomService - Servicio de blockly custom
     */

    constructor(blocklyCustomService) {
        this.blocklyCustomService = blocklyCustomService

        console.log('Jelou');
    }
}