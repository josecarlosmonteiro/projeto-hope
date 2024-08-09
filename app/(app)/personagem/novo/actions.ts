"use server";

import { DATA_BASE_URL } from "@/app/constants/url";
import { Character } from "@/app/types/characters";
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
    const name = data.get("name")?.toString();
    const classId = Number(data.get("classId") || 0);

    if (!name || !classId) return null;

    const newCharPayload: Omit<Character, "id"> = {
      name,
      classId,
      level: 1,
      hp: 100,
      sp: 100,
      st: 100,
    };

    await fetch(url, {
      method: "POST",
      body: JSON.stringify(newCharPayload),
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
