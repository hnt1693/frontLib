import {Routes} from '@angular/router';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {UserComponent} from '../../pages/user/user.component';
import {TableComponent} from '../../pages/table/table.component';
import {TypographyComponent} from '../../pages/typography/typography.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapsComponent} from '../../pages/maps/maps.component';
import {NotificationsComponent} from '../../pages/notifications/notifications.component';
import {UpgradeComponent} from '../../pages/upgrade/upgrade.component';
import {LoginComponent} from '../../shared/login/login.component';
import {Page404Component} from '../../pages/page404/page404.component';
import {BookComponent} from '../../pages/book/book.component';

export const AdminLayoutRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent, children: [{component: LoginComponent, path: 'login'}]},
  {path: 'user', component: UserComponent},
  {path: 'table', component: TableComponent},
  {path: 'typography', component: TypographyComponent},
  {path: 'icons', component: IconsComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'upgrade', component: UpgradeComponent},
  {path: 'notfound', component: Page404Component},
  {path: 'book', component: BookComponent}
];
