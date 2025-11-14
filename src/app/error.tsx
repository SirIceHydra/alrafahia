"use client";

type ErrorProps = {
   error: Error & { digest?: string };
   reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
   return (
      <div className="container flex min-h-[50vh] flex-col items-center justify-center gap-4 py-12 text-center">
         <h1 className="text-h2 font-heading">Something went wrong</h1>
         <p className="max-w-xl text-p text-secondary">
            {error.message || "An unexpected error occurred. Please try again."}
         </p>
         <button
            type="button"
            onClick={() => reset()}
            className="rounded-md bg-secondary px-6 py-3 font-medium text-tertiary transition hover:bg-primary hover:text-secondary"
         >
            Try again
         </button>
      </div>
   );
}


