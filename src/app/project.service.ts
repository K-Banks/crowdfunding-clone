import { Injectable } from '@angular/core';
import { Project } from './models/project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ProjectService {

  projects: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase){
    this.projects = database.list('projects');
    console.log(this.projects);
  }

  getProjects() {
    return this.projects;
  }

}
