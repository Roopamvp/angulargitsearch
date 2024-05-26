import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitService } from '../git.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})

export class UserProfileComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private githubService: GitService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const username = params['username'];
      this.fetchUser(username);
    });
  }

  fetchUser(username: string): void {
    this.githubService.getUser(username).subscribe(user => {
      this.user = user;
    });
  }
}
