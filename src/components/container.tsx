import React from "react";

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`w-full max-w-[1128px] mx-auto lg:px-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});
Container.displayName = "GridContainer";

export { Container };
