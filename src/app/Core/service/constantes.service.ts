import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {constantes} from './constantes';

@Injectable({
  providedIn: 'root'
})
export class ConstantesService {

  constructor() { }

  getConstante(key: string): string {
    return environment.api + constantes[key];
  }
}
