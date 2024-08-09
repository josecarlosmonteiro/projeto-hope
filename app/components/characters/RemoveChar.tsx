'use client'

import { removeCharacter } from "@/app/(app)/personagem/novo/actions";
import { Button } from "../ui/display/Button";
import { useFormState, useFormStatus } from "react-dom";

interface Props {
  charId: string;
}

const DeleteButtonComponent = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" variation="danger" isLoading={pending}>
      remove
    </Button>
  );
}

export function RemoveChar({ charId }: Props) {
  const [_state, formAction] = useFormState(() => removeCharacter(charId), null);

  return (
    <form action={formAction}>
      <DeleteButtonComponent />
    </form>
  );
}