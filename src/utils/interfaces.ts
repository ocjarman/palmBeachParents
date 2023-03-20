interface UserType {
  id?: string;
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  accountType?: string;
  phoneNum: string;
  email: string;
  birthday: Date | null;
  address: string;
  imageUrl: string | null;
  isAdmin?: boolean;
  companyName?: string | null;
}

interface EventType {
  id?: string;
  name?: string | null;
  address: string | null;
  date: Date | null;
  time: string | null;
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
  users: UserType[] | null;
}

interface RecType {
  id?: string;
  name: string | null;
  image_url: string | null;
  review_count: number | null;
  rating: number | null;
  url: string | null;
  display_phone: string | null;
  distance: number | null;
  categories: string[] | null;
  is_closed: boolean | null;
  location: LocationType;
}

interface LocationType {
  display_address: string[] | null;
}

export { UserType, EventType, RecType };
