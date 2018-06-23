import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor() { }

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
    // this.authService.logout();
  }

  isAuthenticated(): boolean {
    return false;
    // return this.authService.isAuthenticated();
  }
}
