import { AuthGuardGuard } from './guards/auth-guard.guard';
import { InboxLayoutComponent } from './inbox-layout/inbox-layout.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { InboxComponent } from './inbox/inbox.component';
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const appRoute: Routes = [
  {
    path: '',
    component: InboxLayoutComponent,
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuardGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'inbox', component: InboxComponent },
      { path: 'message/:id', component: MessageComponent },
    ]
  },
  { path: 'login', component: LoginComponent },

  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
