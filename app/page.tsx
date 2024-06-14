"use server";

import { DataContainer } from "@/components/DataContainer";

async function getLabel() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/data/get-label`,
      {
        method: "GET",
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return { label: data.label, success: true };
  } catch (error) {
    console.error("Error fetching label:", error);
    return { label: "Failed to fetch label", success: false };
  }
}

export default async function Home() {
  const { label, success } = await getLabel();

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="flex flex-col gap-3">
        <span>
          {label} {success ? "✅" : "❌"}
        </span>
        <DataContainer />
      </div>
    </div>
  );
}
