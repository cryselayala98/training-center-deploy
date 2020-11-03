import { inject, observable } from "aurelia-framework";

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
}
