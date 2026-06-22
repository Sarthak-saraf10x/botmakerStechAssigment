export interface EventItem {
  id: string;
  name: string;
  location: string;
  date: string;
  category: string;
  status: 'ongoing' | 'upcoming' | 'completed';
}

export interface FormState {
  name: string;
  location: string;
  enroll: string;
  status: 'idle' | 'loading' | 'success';
}
