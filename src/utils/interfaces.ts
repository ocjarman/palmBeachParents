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
    category: string | null;
    cost: string | null
    location: LocationType;
    description: string | null;
    is_free: boolean | null;
    event_site_url: string | null;
    tickets_url: string | null;
    time_start: Date | null;
    time_end: Date | null;
    image_url: string | null;
}

interface RecType {
  id?: string;
  name: string | null;
  image_url: string | null;
  review_count: number | null;
  rating: number | null;
  url: string | null;
  display_phone: string | null;
  distance: number;
  categories: string[] | null;
  is_closed: boolean | null;
  location: LocationType;
  isFavorite: boolean;
}
interface FavType {
  id?: string;
  yelp_id: string;
  name: string | null;
  imageUrl: string | null;
  yelp_review_count: number | null;
  yelp_rating: number | null;
  yelp_url: string | null;
  description: string | null;
  display_phone: string | null;
  distance: number;
  categories: string[] | null;
  is_closed: boolean | null;
  address: LocationType;
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

export { UserType, UserToEdit, EventType, RecType, AddressType, FavType, LocationType };
