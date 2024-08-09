"use server";

import { DATA_BASE_URL } from "@/app/constants/url";
import { Character } from "@/app/types/characters";

export async function getCharacterById(charId: string) {
  try {
    const url = `${DATA_BASE_URL}/characters/${charId}`;

    const response = await fetch(url);
    const charData = await response.json();

    return charData as Character;
  } catch (error) {
    return null;
  }
}
