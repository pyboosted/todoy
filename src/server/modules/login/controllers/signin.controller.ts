import { Controller, Action, Inject } from 'typeix';

import { DbService } from '../../../services/db.service';

@Controller({
  name: "signin" // route controller
})
export class SigninController {

  @Inject(DbService)
  db: DbService;

  @Action('signin')
  async signinAction() {
    let collection = await this.db.get('test');
    let result = await collection.findOneAndUpdate(
      { name: 'test'}, 
      { $inc: { counter: 1 }}, 
      { upsert: true }
    );
    return `Counter value is ${result.value.counter}`;
  }

}