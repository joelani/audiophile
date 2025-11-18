"use client";

import { useRouter } from "next/navigation";

export default function GoBackButton() {
  const router = useRouter();
  return (
    <div className="flex justify-start items-center mt-7">
      <button
        onClick={() => router.back()}
        className="text-gray-600 hover:text-black transition mb-8 ml-7 "
      >
        <span className="font-bold text-lg">←</span> Go Back
      </button>
    </div>
  );
}
