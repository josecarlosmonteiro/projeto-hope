"use server";

import { DATA_BASE_URL } from "@/app/constants/url";
import { revalidateTag } from "next/cache";

export async function getAllCharacters() {
  const url = `${DATA_BASE_URL}/characters`;

  try {
    const response = await fetch(url, {
      next: {
        tags: ["get-characters"],
      },
    });

    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function createChar(data: FormData) {
  const url = `${DATA_BASE_URL}/characters`;

  try {
    const name = data.get("name");
    const classId = data.get("classId");

    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        name,
        classId,
      }),
    });

    revalidateTag("get-characters");
  } catch (error) {}
}

export async function removeCharacter(charId: string) {
  await fetch(`${DATA_BASE_URL}/characters/${charId}`, {
    method: "DELETE",
  });

  revalidateTag("get-characters");
}
