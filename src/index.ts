import { Observable } from 'rxjs'
import 'rxjs/add/operator/switchMap';

console.log('switchMap: ', (new Observable()).switchMap);
