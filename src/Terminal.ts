import process from 'node:process';

export class Terminal {
	public static width(): number
	{
		if (process.stdout.isTTY) {
			return process.stdout.getWindowSize()[0];
		} else {
			return 0;
		}
	}

	public static height(): number
	{
		if (process.stdout.isTTY) {
			return process.stdout.getWindowSize()[1];
		} else {
			return 0;
		}
	}
}
