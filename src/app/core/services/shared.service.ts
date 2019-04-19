import { Injectable } from '@angular/core';
// import { SecureLayoutComponent} from '../layouts/secure.component';
import { Subject } from 'rxjs';

@Injectable()
export class SharedService{
	// Observable string sources
  	private missionAnnouncedSource = new Subject<any>();
 	// Observable string streams
  	missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  	getSecure(data: any) {
		  console.log('============>')
	    this.missionAnnouncedSource.next(data);
	}
	
}