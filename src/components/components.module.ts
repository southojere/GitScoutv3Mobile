import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { SearchResultsComponent } from './search-results/search-results';
import { RepositoriesComponent } from './repositories/repositories';
import { UsersCardComponent } from './users-card/users-card';

@NgModule({
    declarations: [
        SearchResultsComponent,
        RepositoriesComponent,
        UsersCardComponent
    ],
    imports: [
        IonicModule
    ],
    exports: [
        SearchResultsComponent,
        RepositoriesComponent,
        UsersCardComponent
    ]
})
export class ComponentsModule { } 