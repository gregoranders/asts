import {NAME} from '../Version';
import {BaseHttpService} from '../../../library/BaseHttpService';

export class AuthenticationService extends BaseHttpService<number> {

  static identifier: string = NAME + '.service';

  static LOGIN_URL: string = '/auth/login';

  static LOGOUT_URL: string = '/auth/logout';

  login(username: string, password: string): any {

    var req: any = {
      method: 'POST',
      url: AuthenticationService.LOGIN_URL,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      crossDomain: true,
      xhrFields: {withCredentials: true},
      transformRequest: function(obj:any) {
        var str: string[] = [];
        for(var p in obj) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
        return str.join("&");
      },
      data: {
        username: username,
        password: password
      }
    };

    this.$http(req).then((response: any): any => {
      if (response.status !== 200) {
        return this.$q.reject(response);
      }

      return response.data;
    }).catch( (response: any): void => {
      return this.$q.reject(response);
    });
  }

  logout(): void {

    var req: any = {
      method: 'POST',
      url: AuthenticationService.LOGOUT_URL,
      data: {}
    };

    this.$http(req).then((response: any): any => {
      return response.data;
    }).catch( (response: any): void => {
      return this.$q.reject(response);
    });
  }
}
