interface Identity {
  id: string;
  name: string;
  character: string;
  grade: number;
  affiliation: string; // 소속
  beforeImage: string; // 동기화 전 이미지
  afterImage: string; // 동기화 후 이미지
  keyword: string[]; // ["마비","공격 레벨 감소","공격 위력 감소"]
  recources: string[]; // ["나태","오만","우울","탐식"],
  types: string[]; // ["관통","타격","회피"]
  minSpeed: number;
  maxSpeed: number;
  minWeight: number;
  maxWeight: number;
}
