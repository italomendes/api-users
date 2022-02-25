/* eslint-disable prettier/prettier */
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../typeorm/repositories/UserRepository';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import path from 'path';
import AppError from '@shared/errors/AppError';
import User from '../typeorm/entities/User';

dotenv.config({ path: path.join(__dirname, '..', '.env') });

interface IRequest {
  username: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class AuthUserService {
  public async authenticate({ username, password }: IRequest): Promise<IResponse | AppError> {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findByUserName(username);

    if (!user) {
      return Promise.reject(new AppError('Usuário não encontrado.', 404));
    }

    const isValidPassword = await userRepository.isValidPassword(
      user.passhash,
      password,
    );

    if (!isValidPassword) {
      throw new AppError('Incorrect password.');
    }

    console.log(process.env.APP_SECRET);

    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET!, {expiresIn: process.env.JWT_EXPIRATION_TIME});

    return {
      user: user,
      token
    };
  }
}

export default AuthUserService;
