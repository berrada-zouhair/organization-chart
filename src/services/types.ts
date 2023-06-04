export type MemberInfo = {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  position: string;
  description: string;
};

export type Member = {
  info: MemberInfo;
  subordinates: Member[];
};
