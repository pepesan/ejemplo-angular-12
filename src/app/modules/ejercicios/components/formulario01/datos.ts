export class Datos {
  constructor(
    public username: string = "",
    public password: string = "",
    public repeatPassword: string = "",
    public email: string = "",
    public gender: string = "",
    public orientation: string = "",
    public relationType: string = "",
    public conditionTerms: boolean = false,
  ) {  }
}
/*
nombre de usuario, contraseña, repite contraseña, email, género (radios buttons), orientación sexual (select), tipo de relación buscada (select), condiciones de uso (checkbox) y botón enviar
 */
