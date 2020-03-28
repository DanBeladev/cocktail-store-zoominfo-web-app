import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public homeUrl = environment.CLIENT_URL;
  public purchasesUrl = `${environment.CLIENT_URL}/purchases`;
}
