import process from 'node:process';

export class Terminal {
	public static width(): number
	{
		if (! process.stdout.isTTY)
			return 0;

		return process.stdout.getWindowSize()[0];
	}

	public static height(): number
	{
		if (! process.stdout.isTTY)
			return 0;

		return process.stdout.getWindowSize()[1];
	}
}
