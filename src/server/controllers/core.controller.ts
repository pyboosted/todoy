import { Controller, Action, isPresent, ErrorMessage, HttpError, Inject } from 'typeix';
import { readFile } from 'fs';
import { normalize } from 'path';

import { DbService } from '../services/db.service';

@Controller({
  name: "core" // route controller
})
export class CoreController {

  @Inject(DbService)
  db: DbService;

  @Action('index')
  async indexAction() {
    return await <Promise<string>> this.db.get('test').then((collection) => {
      return collection.findOneAndUpdate({ name: 'test'}, { $inc: { counter: 1 }}, { upsert: true }).then((result) => {
        console.log(result);
        return `Counter value is ${result.value.counter}`;
      });
    });
  }

  @Action('error')
  errorAction(@ErrorMessage error: HttpError) {
    return 'ERROR -> ' + error.getCode() + ' : ' + error.getMessage();
  }

  @Action('async')
  async asyncAction() {
    return await <Promise<String>> new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hello with a timeout');
      }, 1000);
    });
  }
}