import { Character } from "@/app/types/characters";
import { Row } from "../ui/layout/Row";
import { Container } from "../ui/layout/Container";
import Link from "next/link";
import { Button } from "../ui/display/Button";
import { RemoveChar } from "./RemoveChar";
import { Column } from "../ui/layout/Column";
import { Typography } from "../ui/display/Typography";
import { CLASSES_BY_ID } from "@/app/constants/classes";

interface Props {
  charList: Array<Character>;
}

export function CreatedCharList({ charList }: Props) {
  return (
    <Row justify="center" gap="lg">
      {
        charList.map((char: Character) => (
          <Container key={char.id}>
            <Column align="center">
              <div>[charImg]</div>

              <Typography>{char.name} - {CLASSES_BY_ID[char.classId]} {char.level}</Typography>

              <Row justify="center" gap="lg">
                <Typography className="font-[papyrus]">
                  HP: <span className="text-red-500">{char.hp}</span>
                </Typography>
                <Typography className="font-[papyrus]">
                  SP: <span className="text-blue-500">{char.sp}</span>
                </Typography>
                <Typography className="font-[papyrus]">
                  STM: <span className="text-green-500">{char.st}</span>
                </Typography>
              </Row>

              <Row className="mt-4" justify="center" gap="lg">
                <Link href={`/personagem/${char.id}`}>
                  <Button className="w-full">choose</Button>
                </Link>
                <RemoveChar charId={char.id} />
              </Row>
            </Column>
          </Container>
        ))
      }
    </Row>
  );
}