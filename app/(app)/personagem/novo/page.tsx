import { Container } from "@/app/components/ui/layout/Container";
import { Row } from "@/app/components/ui/layout/Row";
import { getAllCharacters, removeCharacter } from "./actions";
import { Column } from "@/app/components/ui/layout/Column";
import { CreateCharForm } from "@/app/components/characters/CreateCharForm";
import { Character } from "@/app/types/characters";
import { Button } from "@/app/components/ui/display/Button";
import { RemoveChar } from "@/app/components/characters/RemoveChar";
import Link from "next/link";

export default async function CreateCharPage() {
  const savedChars = await getAllCharacters();

  return (
    <main className="p-4">
      <Column align="center" gap="lg">
        <Container>
          <CreateCharForm />
        </Container>

        <div className="grid grid-cols-3 gap-8">
          {
            savedChars.map((char: Character) => (
              <Container key={char.id}>
                <pre>
                  {JSON.stringify(char, null, 2)}
                </pre>
                <br />

                <Row gap="lg">
                  <Link href={`/personagem/${char.id}`}>
                    <Button className="w-full">choose</Button>
                  </Link>
                  <RemoveChar charId={char.id} />
                </Row>
              </Container>
            ))
          }
        </div>
      </Column>
    </main>
  );
}