public class RemoteActionController {

	public class MyException extends Exception {}

	@RemoteAction
	public static String sayHello() {
		sleep(3000);
		return 'Hello, World';
	}

	@RemoteAction
	public static void sayHelloError() {
		sleep(3000);
		throw new MyException();
	}

	private static void sleep(Integer msec) {
		Long startTime = System.now().getTime();
		while (System.now().getTime() - startTime < msec)  {
			// Do nothing until desired delay has passed
		}
	}
}
