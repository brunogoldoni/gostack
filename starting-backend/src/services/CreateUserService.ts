import { getRepository } from 'typeorm';

import User from '../models/User';

interface Request {
  date: Date;
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({
    date,
    name,
    email,
    password,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new Error('Email addres already used.');
    }

    const user = usersRepository.create({
      date,
      name,
      email,
      password,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
