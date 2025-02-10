import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from "../card/card.component";
import {FooterComponent} from "../footer/footer.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {AdvertisementsComponent} from "../advertisements/advertisements.component";
import {IonicModule} from "@ionic/angular";
import {RouterModule} from "@angular/router";
import {SidebarComponent} from "../sidebar/sidebar.component";




@NgModule({
  declarations: [
    CardComponent,
    FooterComponent,
    NavbarComponent,
    AdvertisementsComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
      IonicModule,
      RouterModule
  ],
  exports: [
    CardComponent,
    FooterComponent,
    NavbarComponent,
    AdvertisementsComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
