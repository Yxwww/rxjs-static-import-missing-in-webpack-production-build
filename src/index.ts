import { Observable } from 'rxjs'
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

console.log('switchMap: ', (Observable.of({})).switchMap);
