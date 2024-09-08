type TCard = {
  _id?: string;
  name: string;
  link: string;
  likes?: TUser[];
  owner?: TUser;
}

type TUser = {
  _id?: string;
  name?: string;
  avatar?: string;
  about?: string;
}

export type { TCard, TUser };
