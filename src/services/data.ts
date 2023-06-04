import { Member } from "./types";

const images: string[] = [
  "https://media.istockphoto.com/id/538264373/photo/success-and-nothing-less.jpg?s=170667a&w=0&k=20&c=_HiOCHlczf5p3rSVAK2a4qUhC-pUThmr88A2bnB7tq0=",
  "https://media.istockphoto.com/id/1141906656/photo/home-office.jpg?s=612x612&w=0&k=20&c=ZKiSPtFiLaxVxVy22Dy9ytZYgk7qEJ0AEhodz5EkViQ=",
  "https://media.istockphoto.com/id/529278045/photo/working-on-something-great.jpg?s=170667a&w=0&k=20&c=XT9z1yOr2-bw4lLxb7FneBPzqGkFtiKI1PBbnGyYQSs=",
  "https://us.123rf.com/450wm/fizkes/fizkes2009/fizkes200901023/156165274-vue-rapproch%C3%A9e-de-l-%C3%A9cran-de-la-t%C3%AAte-d-un-homme-caucasien-souriant-dans-des-lunettes-ayant-une.jpg?ver=6",
  "https://media.istockphoto.com/id/1309328823/fr/photo/verticale-headshot-de-lemploy%C3%A9-masculin-de-sourire-dans-le-bureau.jpg?b=1&s=612x612&w=0&k=20&c=Y8DpRjL_WZSVmV9LEMAJgogYMGMkqQsvcZ2Nb5LBmrk=",
];
export const createMembers = (count: number): Member[] =>
  Array.from({ length: count }).map(
    (_, index) =>
      ({
        info: {
          id: index,
          firstName: `first${index}`,
          lastName: `last${index}`,
          description: "",
          position: `position${index}`,
          image: images[index % images.length],
        },
        subordinates: [],
      } as Member)
  );

export const createRoot = (): Member => {
  const members = createMembers(12);
  members[0].subordinates = [members[1], members[2], members[3], members[4]];
  members[1].subordinates = [members[5]];
  members[2].subordinates = [members[6]];
  members[3].subordinates = [members[7], members[8]];
  members[5].subordinates = [members[9], members[10], members[11]];
  return members[0];
};
