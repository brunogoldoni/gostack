import { v4 as uuid } from 'uuid';

class Appointment {
  id: string;

  provider: string;

  date: Date;

  constructor({ provider, date }: Omit<Appointment, 'id'>) {
    this.provider = provider;
    this.date = date;
    this.id = uuid();
  }
}

export default Appointment;
