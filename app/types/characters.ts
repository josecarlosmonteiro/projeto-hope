export interface NewCharacterBody {
  name: string;
  classId: number;
}

export interface Character extends NewCharacterBody {
  id: string;
}
