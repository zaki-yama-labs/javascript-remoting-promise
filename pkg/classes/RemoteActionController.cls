public class RemoteActionController {

	@RemoteAction
	public static String greeting() {
		return 'Hello, World';
	}
}