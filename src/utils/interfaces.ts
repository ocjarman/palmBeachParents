
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
    hostPhone: string | null;
    hostEmail: string | null;
    price: number | null;
    imageUrl: string | null;
    recurring: boolean | null;
    category: string | null;
    age: string | null;
    users: UserType[]
  }

  export {UserType, EventType}