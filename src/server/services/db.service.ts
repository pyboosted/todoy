import { MongoClient, Db as MongoDb, Collection as MongoCollection } from 'mongodb';
import { Injectable } from 'typeix';

@Injectable()
export class DbService {

  client: MongoClient;
  constructor() {
    this.client = new MongoClient();
  }

  private connectionPromise: Promise<MongoDb>;
  private connect():Promise<MongoDb> {
    return this.connectionPromise || (this.connectionPromise = this.client.connect('mongodb://localhost:27017/todoy'));
  }

  get(collection: string):Promise<MongoCollection> {
    return this.connect().then((db: MongoDb) => {
      return db.collection(collection);
    });
  }
}
