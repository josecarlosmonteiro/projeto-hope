import { Container } from "@/app/components/ui/layout/Container";
import { getAllCharacters } from "./actions";
import { Column } from "@/app/components/ui/layout/Column";
import { CreateCharForm } from "@/app/components/characters/CreateCharForm";
import { CreatedCharList } from "@/app/components/characters/CreatedCharList";

export default async function CreateCharPage() {
  const charList = await getAllCharacters();

  return (
    <main className="p-4">
      <Column align="center" gap="lg">
        <Container>
          <CreateCharForm />
        </Container>

        <CreatedCharList charList={charList} />
      </Column>
    </main>
  );
}