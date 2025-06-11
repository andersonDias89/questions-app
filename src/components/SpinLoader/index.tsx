import clsx from "clsx";

type SpinLoaderProps = {
  containerClasses?: string;
};

export function SpinLoader({ containerClasses }: SpinLoaderProps) {
  const classes = clsx(
    "flex",
    "items-center",
    "justify-center",
    containerClasses
  );
  return (
    <div className={classes}>
      <div
        className={clsx(
          "animate-spin",
          "rounded-full",
          "w-7 h-7",
          "border-4 border-t-transparent border-slate-900"
        )}
      ></div>
    </div>
  );
}
