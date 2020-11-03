import { inject, observable } from "aurelia-framework";
import { Router } from 'aurelia-router'
import { MESSAGES } from "config/config";

@inject(Alert, Auth)
export class Principal {
  @observable page
  @observable filterChange

  /**
   * Inicializa una instancia de Admin.
   * @param {service} alertService - Servicio de notificaciones
   * @param {service} authService - Servicio de autenticación y validación
   */
 constructor (alertService, authService, problemService, rankingService) {
  this.alertService = alertService
  this.authService = authService
  this.routerService = routerService
}

/**
 * Método que toma los parametros enviados en el link y configura la página para adaptarse
 * al contenido solicitado. Este método hace parte del ciclo de vida de la aplicación y se
 * ejecuta automáticamente luego de lanzar el constructor.
 * @param {any} params
 * @param {any} routeConfig
 */
activate (params, routeConfig) {
  this.routeConfig = routeConfig
  this.id = params.id
}
}
