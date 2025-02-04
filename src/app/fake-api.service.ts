import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService implements InMemoryDbService
{

  public createDb() {

    let skills: Array<ICard> = [
      { id: 1, name: 'Communication', description: 'A nível organizacional, o desenvolvimento contínuo de distintas formas de atuação apresenta tendências no sentido de aprovar a manutenção das posturas dos órgãos dirigentes com relação às suas atribuições.', pic: 'https://cdn.pixabay.com/photo/2016/10/25/18/41/design-1769698_960_720.png', likes: 1 },
      { id: 2, name: 'Coding', description: 'O desenvolvimento contínuo de distintas formas de atuação dos órgãos dirigentes com relação às suas atribuições atuam diretamente a nível organizacional.', pic: 'https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_960_720.jpg', likes: 1 },
      { id: 3, name: 'Time Management', description: 'No sentido de aprovar a manutenção das posturas distintas dos órgãos dirigentes com relação às suas atribuições distintas formas de atuação.', pic: 'https://cdn.pixabay.com/photo/2016/11/19/00/12/wave-1837426_960_720.png', likes: 1 },
      { id: 4, name: 'Problem Solving', description: 'Distintas autuações distintas no sentido de aprovar as atribuições.', pic: 'https://cdn.pixabay.com/photo/2017/02/01/20/14/retro-2031321_960_720.png', likes: 1 },
      { id: 5, name: 'UX Design', description: 'An IT professional should be able to accurately assess how long a project should take, and then be able to stick to those timelines. He or she should also be able to help an entire team manage their time, on a daily, weekly, monthly, and project basis.', pic: 'https://cdn.pixabay.com/photo/2014/12/11/22/10/board-564815_960_720.jpg', likes: 1 },
      { id: 6, name: 'Collaboration', description: 'IT professionals often have to provide tech solutions for people who aren’t as savvy. They have to demonstrate leadership at all levels of projects, and with many different groups.', pic: 'https://cdn.pixabay.com/photo/2018/10/04/13/55/note-3723689_960_720.jpg', likes: 1 }
    ];

    return { skills };
  }

  public put(reqInfo: any): Observable<any> {
    const collectionName = reqInfo.collectionName;
    const data = reqInfo.utils.getJsonBody(reqInfo.req);

    if (collectionName === 'skills' && reqInfo.id !== undefined && reqInfo.method === 'put') {
      const skillIndex = reqInfo.collection.findIndex(skill => skill.id === reqInfo.id);

      if (skillIndex !== -1) {
        reqInfo.collection[skillIndex] = data;
      }

      return reqInfo.utils.createResponse$(() => ({
        body: data,
        status: 200,
        statusText: 'OK',
      }));
    }

    return undefined;
  }
}

export interface ICard
{
    id: number;
    name: string;
    description: string;
    pic: string;
    likes: number;
}