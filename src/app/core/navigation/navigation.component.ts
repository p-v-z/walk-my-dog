import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(private authService: AuthService) { }

  onSaveData() {
    // this.dataStorageService.storeRecipes()
    //   .subscribe(
    //     (response: Response) => {
    //       console.log(response);
    //     }
    //   );
  }

  onFetchData() {
    // this.dataStorageService.getRecipes();
  }

  onLogout() {
     this.authService.logout();
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}
