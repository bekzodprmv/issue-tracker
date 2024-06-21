export const cx = (...args: (string | boolean | undefined | null | 0)[]) => {
  return args.filter(Boolean).join(" ");
};
