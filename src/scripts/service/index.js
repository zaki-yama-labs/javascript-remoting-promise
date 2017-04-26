// export function createRemoting(funcName) {
  // return {
    // execute: (funcName, ...args) => {

    // return remoting.greeting((result, event) => {
        // console.log('result:', result);
        // console.log('event:', event);
    // });
  // });
// }

export default class SfRemoting {
  getRemoting() {
    // eslint-disable-next-line
    return zakiyama.RemoteActionController;
  }

  sayHello(callback) {
    this.getRemoting().sayHello((result, event) => {
      console.log('result:', result);
      console.log('event:', event);
      callback(result);
    });
  }

}
