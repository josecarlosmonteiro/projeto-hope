'use client'

import { Input } from "../ui/forms/Input";
import { Row } from "../ui/layout/Row";
import { Select } from "../ui/forms/Select";
import { Button } from "../ui/display/Button";
import { Column } from "../ui/layout/Column";
import { createChar } from "@/app/(app)/personagem/novo/actions";
import { useFormStatus } from "react-dom";

const CreateBtnComponent = () => {
  const { pending } = useFormStatus();
  return <Button type="submit" isLoading={pending}>Create</Button>
}

export function CreateCharForm() {

  return (
    <form action={createChar}>
      <Column>
        <Row>
          <Input name="name" label="Name" placeholder="Char name..." required />
          <Select name="classId" label="Class">
            <option value="1">Fortran</option>
            <option value="2">Pascal</option>
            <option value="3">Cobol</option>
          </Select>
        </Row>

        <CreateBtnComponent />
      </Column>
    </form>
  );
}