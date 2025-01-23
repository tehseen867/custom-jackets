// app/subcategory/[category]/[subCategory]/error.ts
"use client";

export default function Error() {
  return (
    <div className="text-red-600 text-lg flex h-screen justify-center">
      Error loading products. Please try again.
    </div>
  );
}