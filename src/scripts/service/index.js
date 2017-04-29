export default class SfRemoting {
  getRemoting() {
    // eslint-disable-next-line
    return zakiyama.RemoteActionController;
  }

  createRemoting() {
    return {
      execute: (funcName, ...args) => {
        return new Promise((resolve, reject) => {
          this.getRemoting()[funcName](...args, (result, event) => {
            if (event.status) {
              resolve(result);
            } else {
              console.log('Remote Action error occured:', event);
              reject({ message: event.message, where: event.where });
            }
          });
        });
      },
    };
  }

  sayHelloCallback(callback) {
    this.getRemoting().sayHello((result, event) => {
      console.log('result:', result);
      console.log('event:', event);
      callback(result);
    });
  }

  sayHelloPromise() {
    return this.createRemoting().execute('sayHello');
  }

  sayHelloError() {
    return this.createRemoting().execute('sayHelloError');
  }
}
