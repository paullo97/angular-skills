import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ICard } from 'src/app/fake-api.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: [ './card.component.css' ]
})
export class CardComponent
{
    @Input()
    public card: ICard;

    constructor(private http: HttpClient)
    { }

    public onLike(card: ICard): void
    {
        card.likes = card.likes + 1;
        const updateLike: ICard = { ...card };

        this.http.put(`/api/skills/${card.id}`, updateLike).subscribe(
            error => { console.log(error) }
        );
    }

    public onShare(): void
    {
        window.open('https://www.linkedin.com/in/paulo-cesar-537396139/');
    }
}
