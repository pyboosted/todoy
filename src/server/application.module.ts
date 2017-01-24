import { Module, Router, Logger, Inject, IAfterConstruct, Methods } from 'typeix'
import { CoreController } from './controllers/core.controller';
import { DbService } from './services/db.service';

import { LoginModule } from './modules/login/login.module';

@Module({
  imports: [LoginModule],
  controllers: [CoreController],
  providers: [Logger, Router, DbService],
  exports: [DbService]
})
export class Application implements IAfterConstruct {

  @Inject(Router)
  private router: Router;

  afterConstruct() {

    console.log('app module');

    this.router.addRules([{
      methods: [Methods.GET],
      route: 'core/index',
      url: '/api/1/'
    }, {
      methods: [Methods.GET],
      route: 'core/async',
      url: '/api/1/async'
    }]);
    this.router.setError('core/error');
  }

}