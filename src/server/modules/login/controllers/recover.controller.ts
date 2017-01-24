import { Controller, Action, Inject } from 'typeix';

import { DbService } from '../../../services/db.service';

@Controller({
  name: "recover" // route controller
})
export class RecoverController {

  @Inject(DbService)
  db: DbService;

  @Action('recover')
  async recoverAction() {
    let collection = await this.db.get('test');
    let result = await collection.findOneAndUpdate(
      { name: 'test'}, 
      { $inc: { counter: 1 }}, 
      { upsert: true }
    );
    
    return `Counter value is ${result.value.counter}`;
  }

}