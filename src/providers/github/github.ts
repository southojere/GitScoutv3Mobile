import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { User } from '../../models/user';
import { Repository } from '../../models/repository';

//API key=?access_token=360719705897abcc1da2564786e709ed160734a5

/**
 * Provider deals with interacting with GitHub API, return appropriate json objects to the components that called them
 * 
 */
@Injectable()
export class GithubProvider {
  baseUrl: string = 'https://api.github.com/users';
  reposUrl: string = 'repos';

  constructor(private http: Http) {
  }

  /*
    Returns user information for the username parameter.
  */
  getUserInformation(username: string): Observable<User> {
    let usersUrl = this.baseUrl + "/" + username;
    return this.http.get(usersUrl + "").map((data: Response) => data.json());
  }

  /* 
    Returns user repository information for the username parameter
  */
  getRepositoryInformation(username: string): Observable<Repository[]> {
    let usersRepoUrl = this.baseUrl + "/" + username + "/repos";
    return this.http.get(usersRepoUrl).map((data: Response) => data.json() as Repository[]);
  }

  /*
    Returns json of users in location in the given location and sorted based on sortBy
      */
  getSortedResults(location: string, sortBy: string, numOfResultsWanted: string) {
    let sortedUsers = "https://api.github.com/search/users?q=location:" + location + "+sort:" + sortBy + "+&per_page=" + numOfResultsWanted;
    return this.http.get(sortedUsers).map((data: Response) => data.json());
  }

}
