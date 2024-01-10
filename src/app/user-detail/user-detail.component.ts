import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  user: any;
  loading: boolean = true;
  private subscriptions = new Subscription(); // Manage all subscriptions
  

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router // Inject Router for navigation
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.route.params.subscribe(params => {
        const userId = params['id'];
        this.userService.getUserById(userId).subscribe(
          user => {
            this.user = user;
            this.loading = false; // Set loading to false when data is received
          },
          error => {
            // Handle error state
            console.error('Error fetching user:', error);
            this.loading = false; // Set loading to false even on error
          }
        );
      })
    );
  }

  // Implement the closeDetail method
  closeDetail(): void {
    this.router.navigate(['/']); // Navigate back to the user list
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe(); // Unsubscribe from all subscriptions
  }
}
