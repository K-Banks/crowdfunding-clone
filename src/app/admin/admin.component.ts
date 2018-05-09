import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
  }

  submitForm(title: string, description: string, creators: string, goal: number, reward: string) {
    let newProject: Project = new Project(title, description, creators, goal, reward);
    this.projectService.addProject(newProject);
  }

}
