import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

const VIGIE_AQUI_ENDPOINT = 'https://s3.amazonaws.com/vigieaqui-static-files/database.json';

@Injectable()
export class PoliticService {

  constructor(private http: HttpClient) { }

  get() {

    return this.http.get(this.getProxyUrl(VIGIE_AQUI_ENDPOINT)).map((res: any) => JSON.parse(res.body));

  }

  private getProxyUrl(url) {
    return `http://cors-proxy.htmldriven.com/?url=${url}`;
  }

}
