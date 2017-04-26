public class RemoteActionController {

	@RemoteAction
	public static String sayHello() {
		return 'Hello, World';
	}
}