import { inject } from 'aurelia-framework'
import { Router } from 'aurelia-router'
//import { BlocklyCustom } from 'services/services'

//import { Blockly } from '../../../../node_modules/blockly/blockly_compressed'
//import 'blockly/blocks_compressed'
//import 'blockly/msg/es.js'

//import '../../../../node_modules/blockly/blocks_compressed'

/**
 * dependencias a inyectar: Servicio de blockly custom (BlocklyCustom)
 * Blockly custom importa usa los servicios de Blockly por defecto y contiene 
 * bloques personalizados separados por categoría, con su generador en JS y 
 * proporciona también el interpretador de código fuente
 */
//@inject(Blockly, Router)
@inject(Element)
export class ProblemEditorOnline {

    /**
     * Crea una instancia de ProblemEditorOnline. "visitor"
     * @param {service} blocklyCustomService - Servicio de blockly custom
     */

    constructor(element) {

        this.element = element

        /* const toolbox = `
          <xml>
            <block type="controls_if"></block>
            <block type="controls_whileUntil"></block>
          </xml>`*/

        //var blocklyDiva = document.getElementById('.la')

        // console.log(jQuery(this.toolbox))
        // console.log(this.blocklyDiv)
        // this.blocklyCustomService = blocklyCustomService
        //this.router = router

        //console.log(blocklyCustomService);
        //this.workspace = Blockly.inject('blocklyDiv', { toolbox: this.toolbox })
    }

    attached() {
        //  let ww = this.element.querySelector('#toolbox')
        //    console.log(ww)

        //    var workspace = Blockly.inject('blocklyDiv', { toolbox: this.toolbox })
    }
}