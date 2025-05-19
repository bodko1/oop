class Database {
  save(data) {
    throw new Error('Method must be implemented');
  }
}

class MySQLDatabase extends Database {
  save(data) {
    console.log('Saving to MySQL',data);
  }
}

class SqlLite extends Database {
  save(data) {
    console.log('Saving to SqlLite',data);
  }
}




class UserService {
  constructor(database) {
    this.db = database;
  }

  register(user) {
    this.db.save(user);
  }
}

const db = new SqlLite();
const service = new UserService(db);
service.register({ name: 'Bohdan' });
