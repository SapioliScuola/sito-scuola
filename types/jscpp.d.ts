declare module 'JSCPP' {
  const JSCPP: {
    run: (
      code: string,
      input?: string,
      config?: {
        stdio?: {
          write?: (s: string) => void;
        };
        unsigned_overflow?: 'error' | 'warn' | 'ignore';
      }
    ) => number;
  };
  export default JSCPP;
}