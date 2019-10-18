import { Component, OnInit } from "@angular/core";
import { TaskService } from "src/app/task.service";
import { Params, ActivatedRoute, Router } from "@angular/router";
import { Task } from "src/app/models/task.model";

@Component({
  selector: "app-new-task",
  templateUrl: "./new-task.component.html",
  styleUrls: ["./new-task.component.scss"]
})
export class NewTaskComponent implements OnInit {
  constructor(
    private taskservice: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  listId: string;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.listId = params["listId"];
    });
  }

  createTask(title: string) {
    this.taskservice
      .createTask(title, this.listId)
      .subscribe((newtask: Task) => {
        this.router.navigate(["../"], { relativeTo: this.route });
      });
  }
}
