import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../model/todo";
import {environment} from "../environments/environment";

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(environment.api_url_todo);
  }

  saveTodo(todo): Observable<Todo> {
    return this.http.post<Todo>(environment.api_url_todo, todo);
  }

  updateTodo(todo): Observable<Todo> {
    return this.http.patch<Todo>(environment.api_url_todo + "/" + todo.id, todo);
  }

  deleteTodo(todo): Observable<Todo> {
    return this.http.delete<Todo>(environment.api_url_todo + "/" + todo.id);
  }
}
