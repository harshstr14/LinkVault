import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { ReactNode } from "react";

interface Props {
  header?: string;
  text?: string;
  className?: string;
  children: ReactNode;
  "data-testid"?: string;
}

export default function CenteredForm({
  header,
  text,
  children,
  className,
  "data-testid": dataTestId,
}: Props) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen justify-center items-center p-5 overflow-hidden",
        className
      )}
      data-testid={dataTestId}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
      />
      <div className="relative m-auto flex flex-col gap-3 w-full">
        <Image
          src={"/icon-small-150x150.png"}
          width={150}
          height={150}
          alt="LinkVault"
          className="h-14 w-auto mx-auto mb-2 drop-shadow-lg"
          priority
        />
        {header && (
          <p className="text-3xl text-base-content text-center font-semibold tracking-tight">
            {header}
          </p>
        )}
        {text && (
          <p className="text-base text-base-content/60 max-w-[30rem] min-w-80 w-full mx-auto px-2 text-center">
            {text}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
