export default class SfRemoting {
  getRemoting() {
    // eslint-disable-next-line
    return __NAMESPACE__RemoteActionController;
  }

  execute(methodName, ...args) {
    return new Promise((resolve, reject) => {
      this.getRemoting()[methodName](...args, (result, event) => {
        if (event.status) {
          resolve(result);
        } else {
          console.log('Remote Action error occured:', event);
          reject({ message: event.message, where: event.where });
        }
      });
    });
  }

  sayHelloCallback(callback) {
    this.getRemoting().sayHello((result, event) => {
      console.log('result:', result);
      console.log('event:', event);
      callback(result);
    });
  }

  sayHelloPromise() {
    return this.execute('sayHello');
  }

  sayHelloError() {
    return this.execute('sayHelloError');
  }
}
