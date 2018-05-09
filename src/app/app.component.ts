import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProjectService]
})
export class AppComponent implements OnInit {
  title = 'CrowFundus';
  projects;

  constructor(private projectService: ProjectService){  }

  ngOnInit(){
    this.projects = this.projectService.getProjects();
  }

}
