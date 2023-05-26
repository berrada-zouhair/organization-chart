import { Hierarchy, Member } from "./types";

const abdellah: Member = {
  info: {
    id: 15,
    firstName: "Abdellah",
    lastName: "BERRADA",
    position: "CTO",
    description: "",
    image:
      "https://media.istockphoto.com/id/529278045/photo/working-on-something-great.jpg?s=170667a&w=0&k=20&c=XT9z1yOr2-bw4lLxb7FneBPzqGkFtiKI1PBbnGyYQSs=",
  },
  subordinates: [],
};

// const marouane: Member = {
//   info: {
//     id: 16,
//     firstName: "Marouane",
//     lastName: "BERRADA",
//     position: "CTO",
//     description: "",
//     image:
//       "https://media.istockphoto.com/id/529278045/photo/working-on-something-great.jpg?s=170667a&w=0&k=20&c=XT9z1yOr2-bw4lLxb7FneBPzqGkFtiKI1PBbnGyYQSs=",
//   },
//   subordinates: [],
// };

// const hakim: Member = {
//   info: {
//     id: 17,
//     firstName: "Hakim",
//     lastName: "BERRADA",
//     position: "CTO",
//     description: "",
//     image:
//       "https://media.istockphoto.com/id/529278045/photo/working-on-something-great.jpg?s=170667a&w=0&k=20&c=XT9z1yOr2-bw4lLxb7FneBPzqGkFtiKI1PBbnGyYQSs=",
//   },
//   subordinates: [],
// };

// const anass: Member = {
//   info: {
//     id: 19,
//     firstName: "Anass",
//     lastName: "BERRADA",
//     position: "CTO",
//     description: "",
//     image:
//       "https://media.istockphoto.com/id/529278045/photo/working-on-something-great.jpg?s=170667a&w=0&k=20&c=XT9z1yOr2-bw4lLxb7FneBPzqGkFtiKI1PBbnGyYQSs=",
//   },
//   subordinates: [],
// };

const soufiane: Member = {
  info: {
    id: 20,
    firstName: "Soufiane",
    lastName: "BERRADA",
    position: "CTO",
    description: "",
    image:
      "https://media.istockphoto.com/id/529278045/photo/working-on-something-great.jpg?s=170667a&w=0&k=20&c=XT9z1yOr2-bw4lLxb7FneBPzqGkFtiKI1PBbnGyYQSs=",
  },
  subordinates: [],
};

const driss: Member = {
  info: {
    id: 3,
    firstName: "Driss",
    lastName: "BERRADA",
    position: "CTO",
    description: "",
    image:
      "https://media.istockphoto.com/id/529278045/photo/working-on-something-great.jpg?s=170667a&w=0&k=20&c=XT9z1yOr2-bw4lLxb7FneBPzqGkFtiKI1PBbnGyYQSs=",
  },
  subordinates: [abdellah, soufiane],
};

const hassan: Member = {
  info: {
    id: 13,
    image:
      "https://media.istockphoto.com/id/1141906656/photo/home-office.jpg?s=612x612&w=0&k=20&c=ZKiSPtFiLaxVxVy22Dy9ytZYgk7qEJ0AEhodz5EkViQ=",

    firstName: "Hassan",
    lastName: "BERRADA",
    position: "Developer",
    description: "",
  },
  subordinates: [],
};

const amine: Member = {
  info: {
    id: 14,
    image:
      "https://media.istockphoto.com/id/1141906656/photo/home-office.jpg?s=612x612&w=0&k=20&c=ZKiSPtFiLaxVxVy22Dy9ytZYgk7qEJ0AEhodz5EkViQ=",

    firstName: "Amine",
    lastName: "BERRADA",
    position: "Developer",
    description: "",
  },
  subordinates: [],
};

const mehdi: Member = {
  info: {
    id: 12,
    image:
      "https://media.istockphoto.com/id/1141906656/photo/home-office.jpg?s=612x612&w=0&k=20&c=ZKiSPtFiLaxVxVy22Dy9ytZYgk7qEJ0AEhodz5EkViQ=",

    firstName: "Mehdi",
    lastName: "BERRADA",
    position: "Developer",
    description: "",
  },
  subordinates: [],
};

const othmane: Member = {
  info: {
    id: 4,
    image:
      "https://us.123rf.com/450wm/fizkes/fizkes2009/fizkes200901023/156165274-vue-rapproch%C3%A9e-de-l-%C3%A9cran-de-la-t%C3%AAte-d-un-homme-caucasien-souriant-dans-des-lunettes-ayant-une.jpg?ver=6",

    firstName: "Othmane",
    lastName: "BERRADA",
    position: "CFO",
    description: "",
  },
  subordinates: [mehdi],
};

const hamza: Member = {
  info: {
    id: 11,
    image:
      "https://media.istockphoto.com/id/1141906656/photo/home-office.jpg?s=612x612&w=0&k=20&c=ZKiSPtFiLaxVxVy22Dy9ytZYgk7qEJ0AEhodz5EkViQ=",

    firstName: "Hamza",
    lastName: "BERRADA",
    position: "Developer",
    description: "",
  },
  subordinates: [],
};

const ahmed: Member = {
  info: {
    id: 10,
    image:
      "https://media.istockphoto.com/id/1141906656/photo/home-office.jpg?s=612x612&w=0&k=20&c=ZKiSPtFiLaxVxVy22Dy9ytZYgk7qEJ0AEhodz5EkViQ=",

    firstName: "Ahmed",
    lastName: "BERRADA",
    position: "Manager",
    description: "",
  },
  subordinates: [hassan, amine, hamza],
};

const mouhsine: Member = {
  info: {
    id: 5,
    image:
      "https://media.istockphoto.com/id/1141906656/photo/home-office.jpg?s=612x612&w=0&k=20&c=ZKiSPtFiLaxVxVy22Dy9ytZYgk7qEJ0AEhodz5EkViQ=",

    firstName: "Mouhsine",
    lastName: "BERRADA",
    position: "Coach",
    description: "",
  },
  subordinates: [ahmed],
};

const zouhair: Member = {
  info: {
    id: 2,
    firstName: "Zouhair",
    lastName: "BERRADA",
    position: "VP",
    description: "",
    image:
      "https://media.istockphoto.com/id/1309328823/fr/photo/verticale-headshot-de-lemploy%C3%A9-masculin-de-sourire-dans-le-bureau.jpg?b=1&s=612x612&w=0&k=20&c=Y8DpRjL_WZSVmV9LEMAJgogYMGMkqQsvcZ2Nb5LBmrk=",
  },
  // subordinates: [hassan, amine, hamza],
  subordinates: [],
};

const zakaria: Member = {
  info: {
    id: 1,
    firstName: "Zakaria",
    lastName: "BERRADA",
    position: "CEO",
    description: "",
    image:
      "https://media.istockphoto.com/id/538264373/photo/success-and-nothing-less.jpg?s=170667a&w=0&k=20&c=_HiOCHlczf5p3rSVAK2a4qUhC-pUThmr88A2bnB7tq0=",
  },
  subordinates: [mouhsine, othmane, driss, zouhair],
};

export const hierarchy: Hierarchy = {
  root: zakaria,
};
