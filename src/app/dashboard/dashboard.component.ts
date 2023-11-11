import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { ICard } from '../fake-api.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit, OnDestroy
{
    public cards: Array<ICard>;
    public loading$: Observable<boolean> = of(false);

    public sub: Subscription = new Subscription();

    constructor(private httpClient: HttpClient)
    { }

    public ngOnDestroy(): void
    {
        this.sub.unsubscribe();
    }

    public ngOnInit(): void
    {
        this.loading$ = of(true);
        this.sub.add(
            this.httpClient.get('/api/skills').subscribe((ret: Array<ICard>) =>
            {
                this.cards = ret;
                this.loading$ = of(false);
            })
        );
    }
}
