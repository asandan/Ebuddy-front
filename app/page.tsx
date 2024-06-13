"use client";

export async function getData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/data`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return { props: { label: data.label, success: true } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { label: "Failed to fetch data", success: false } };
  }
}

export type HomeProps = {
  label: string;
  success: boolean;
};

export default function Home({ label, success }: HomeProps) {
  return (
    <>
      {label} {success ? "✅" : "❌"}
    </>
  );
}
