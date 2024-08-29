import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../users.model';
import { BehaviorSubject, Observable, pipe, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {
  private httpClient = inject(HttpClient); // Correctly inject HttpClient
  private url = "https://jsonplaceholder.typicode.com/users";
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  constructor()
  {
    this.fetchUsers().subscribe()
  }
  fetchUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url).pipe(
      tap(users => this.usersSubject.next(users)) // Update the subject with new data
    );
  }

  addUser(user:User) {
    return this.httpClient.post<User>(this.url, user).pipe(
      tap(newUser => {
        const currentUsers = this.usersSubject.value;
        this.usersSubject.next([...currentUsers, newUser]); // Update the subject
      })
    );
  }

  removeUser(id: number): Observable<void> {

      return this.httpClient.delete<void>(`${this.url}/${id}`);
      }

      updateUser(updatedUser: User): Observable<User> {
        if (!updatedUser.id) {
          throw new Error('User ID is required for updating');
        }
    
        return this.httpClient.put<User>(`${this.url}/${updatedUser.id}`,updatedUser)
          // , updatedUser).pipe(
        //   tap(user => {
        //     const currentUsers = this.usersSubject.value;
        //     const index = currentUsers.findIndex(u => u.id === user.id);
        //     if (index > -1) {
        //       const updatedUsers = [...currentUsers];
        //       updatedUsers[index] = user;
        //       this.usersSubject.next(updatedUsers); // Update the subject with the modified user
        //     }
        //   })
        // );
      }
      getUserById(id: number): Observable<User> {
        return this.httpClient.get<User>(`${this.url}/${id}`);
      }
  } 

