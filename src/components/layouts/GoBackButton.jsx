"use client";

import { useRouter } from "next/navigation";

export default function GoBackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="text-gray-600 hover:text-black transition mb-8"
    >
      ← Go Back
    </button>
  );
}
