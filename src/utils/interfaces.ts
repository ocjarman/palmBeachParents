
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

  export {UserType}