interface UserType {
  id?: string;
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  fullName: string;
  accountType?: string;
  phoneNum: string;
  email: string;
  birthday: Date | null;
  address: AddressType;
  imageUrl: string | null;
  isAdmin?: boolean | null;
  companyName?: string | null;
}

interface UserToEdit {
  firstName: string | null;
  lastName: string | null;
  phoneNum: string | null;
  birthday: Date | null;
  address: AddressType;
  imageUrl: string | null;
  companyName: string | null;
}

interface EventType {
  id?: string;
  name?: string | null;
  address: AddressType;
  date: Date | null;
  time: string | null;
  description: string | null;
  webUrl: string | null;
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

interface AddressType {
  id?: number;
  address1: string | null;
  address2: string | null;
  city: string | null;
  state: string | null;
  zipcode: number | null;
}

interface LocationType {
  display_address: string[] | null;
  address1: string | null;
  address2: string | null;
  city: string | null;
  state: string | null;
  zip_code: string | null;
}

export { UserType, UserToEdit, EventType, RecType, AddressType };
