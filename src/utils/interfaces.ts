
interface UserType {
  id?: string;
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  accountType?: string;
  phoneNum: string;
  email: string;
  birthday: Date;
  address: string;
  avatarUrl: string | null;
  isAdmin?: boolean;
  companyName?: string | null;
  }

  interface EventType {
    id?: string;
    name?: string | null;
    address: string | null;
    date: Date | null;
    time: string| null;
    description: string | null;
    url: string | null;
    hostName: string | null;
    hostNumber: string | null;
    hostEmail: string | null;
    cost: number | null;
    imageUrl: string | null;
    recurring: boolean | null;
    users: UserType[]
  }

  export {UserType, EventType}