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

  /**
   * Get the Terminal size in width and height.
   *
   * @returns object
   */
  public static size(): { width: number; height: number } {
    return {
      width: this.width(),
      height: this.height(),
    };
  }
}
