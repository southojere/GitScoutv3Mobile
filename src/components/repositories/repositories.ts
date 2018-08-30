import { Component, Input } from '@angular/core';
import { Repository } from '../../models/repository';
import { Http, Response } from '@angular/http';
@Component({
    selector: 'repositories',
    templateUrl: 'repositories.html'
})
export class RepositoriesComponent {

    @Input() repository: Repository;

    constructor(private http: Http) {

    }

    /**
     * TODO
     * 
     * used in template view of this component.
     * Used to receieve the languages which was used to create this repo.
     * @param languagesUrl url from github api which stores json object of languages
     * @returns list of strings of languages
     */
    getLanguages() {
    }
} 