import {BSON} from 'realm';

class Task {
  constructor({
    id = new BSON.ObjectId(),
    description,
    newDescription,
    isComplete = false,
  }) {
    this._id = id;
    this.description = description;
    this.newDescription = newDescription;
    this.isComplete = isComplete;
  }

  // To use a class as a Realm object type, define the object schema on the static property "schema".
  static schema = {
    name: 'Task',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      description: 'string',
      newDescription: 'string', // Novo campo adicionado
      isComplete: {type: 'bool', default: false},
    },
  };
}

export default Task;
