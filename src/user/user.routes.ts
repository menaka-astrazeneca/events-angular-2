
import { ProfileComponent } from "user/profile/profile.component";
import { Routes } from "@angular/router/router";
import { LoginComponent } from "user/login/login.component";

export const userRoutes: Routes = [
    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: LoginComponent}
]