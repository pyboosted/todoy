import { Module, Router, Logger, Inject, IAfterConstruct, Methods } from 'typeix'
import { SigninController } from './controllers/signin.controller';
import { RecoverController } from './controllers/recover.controller';

@Module({
  name: "login",
  controllers: [SigninController, RecoverController],
})
export class LoginModule implements IAfterConstruct {

  @Inject(Router)
  private router: Router;

  afterConstruct() {

    console.log('login module');

    this.router.addRules([{
      methods: [Methods.GET],
      route: 'login/signin/signin',
      url: '/api/1/auth/signin'
    }, {
      methods: [Methods.GET],
      route: 'login/recover/recover',
      url: '/api/1/auth/recover'
    }]);
  }

}