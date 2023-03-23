export class PermissionError extends Error {
  constructor() {
    super(`PermissionError`);
    this.name = "PermissionError";
  }
}
