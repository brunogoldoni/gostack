import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

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

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      date: new Date(),
      name,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
