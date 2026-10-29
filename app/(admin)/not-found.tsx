import Link from "next/link";

export default function NotFound() {
  return (
    <div className="card flex flex-col items-center justify-center gap-3 px-6 py-20 text-center">
      <p className="text-5xl font-bold text-primary-600">404</p>
      <h2 className="text-xl font-semibold">Page not found</h2>
      <p className="text-sm text-muted">
        This page is not available.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-700"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}