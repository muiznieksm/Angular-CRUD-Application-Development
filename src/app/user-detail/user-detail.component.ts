import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit, OnDestroy {
  user: any;
  loading: boolean = true;
  private subscriptions = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.route.params.subscribe((params) => {
        const userId = params['id'];
        this.userService.getUserById(userId).subscribe(
          (user) => {
            this.user = user;
            this.loading = false;
          },
          (error) => {
            console.error('Error fetching user:', error);
            this.loading = false;
          }
        );
      })
    );
  }

  getCountryFlagUrl(country: string): string {
    return `https://cdn.countryflags.com/thumbs/${country
      ?.toLowerCase()
      .replaceAll(' ', '-')}/flag-400.png`;
  }

  closeDetail(): void {
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
