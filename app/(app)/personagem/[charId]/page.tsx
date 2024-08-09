import { Typography } from "@/app/components/ui/display/Typography";
import { Container } from "@/app/components/ui/layout/Container";
import { getCharacterById } from "./actions";
import { Row } from "@/app/components/ui/layout/Row";
import { Column } from "@/app/components/ui/layout/Column";
import { Center } from "@/app/components/ui/layout/Center";
import Link from "next/link";

type Props = {
  params: {
    charId: string;
  }
}

const NotFoundCharacterComponent = () => {
  return (
    <main className="h-screen">
      <Center>
        <Column align="center">
          <Typography variation="title">Algo saiu errado!</Typography>
          <Typography>Aparentemente o personagem selecionado não existe!</Typography>
          <Typography>
            <Link className="underline text-blue-300" href={'/personagem/novo'}>Retorne</Link> à página anterior e selecione novamente seu personagem ou crie um novo personagem.
          </Typography>
        </Column>
      </Center>
    </main>
  );
}

export default async function CharacterPage({ params }: Props) {
  const charData = await getCharacterById(params.charId);

  if (!charData) return <NotFoundCharacterComponent />

  return (
    <main>
      <Container>
        <Typography variation="title">Bem-vindo!</Typography>
        <Typography>
          ID de personagem: {params.charId}
        </Typography>

        <br />

        <pre>
          {JSON.stringify(charData, null, 2)}
        </pre>
      </Container>
    </main>
  );
}