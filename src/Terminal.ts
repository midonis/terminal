import process from "node:process";

export class Terminal {
  /**
   * Get the Terminal width.
   *
   * @returns number
   */
  public static width(): number {
    if (!process.stdout.isTTY) return 0;

    return process.stdout.getWindowSize()[0];
  }

  /**
   * Get the Terminal height.
   *
   * @returns number
   */
  public static height(): number {
    if (!process.stdout.isTTY) return 0;

    return process.stdout.getWindowSize()[1];
  }
}
