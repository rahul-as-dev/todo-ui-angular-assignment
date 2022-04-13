import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getTaskList() {
    return this.http.get(`${environment.BASE_APU_URL}tasks/`);
  }

  addNewTask(payload) {
    return this.http.post(`${environment.BASE_APU_URL}task/`, payload);
  }
}
