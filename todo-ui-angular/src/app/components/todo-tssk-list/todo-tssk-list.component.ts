import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-task-list",
  templateUrl: "./todo-tssk-list.component.html",
  styleUrls: ["./todo-tssk-list.component.css"],
})
export class TaskListComponent implements OnInit {
  @Input() taskList = [];

  constructor() {}

  ngOnInit() {}
}
