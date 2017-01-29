const Context = require('./../../src/api/config/context');

class DBHelpers {
  constructor(context) {
    if (!context) {
      context = Context.instance();
    }
    this.context = context;
    this.logger = this.context.logger;
  }

  // dropProfileCollection( done ) {
  //  this.context.db.connection.db.dropCollection( 's5r-mw-github.profile', ( err, result ) => {
  //    return done( err, result );
  //  } )
  // }

}

module.exports = DBHelpers;
