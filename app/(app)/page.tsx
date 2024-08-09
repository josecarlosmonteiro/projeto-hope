import Link from "next/link";
import { Button } from "../components/ui/display/Button";
import { Typography } from "../components/ui/display/Typography";
import { Center } from "../components/ui/layout/Center"
import { Column } from "../components/ui/layout/Column";
import { Container } from "../components/ui/layout/Container";
import { Divider } from "../components/ui/layout/Divider";

export default function Home() {
  return (
    <main className="h-screen">
      <Center>
        <Container>
          <Column gap="lg" align="center">
            <div>
              <Typography variation="title" className="font-[Papyrus]">
                Projeto HOPE
              </Typography>

              <Divider />
            </div>

            <Column align="center">
              <Button disabled>
                <Link href={'/personagem/novo'}>
                  Começar
                </Link>
              </Button>
              <Button disabled>Instruções</Button>
              <Button disabled>Sobre</Button>
            </Column>
          </Column>
        </Container>
      </Center>
    </main>
  );
}
