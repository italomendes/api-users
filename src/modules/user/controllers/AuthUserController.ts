import AppError from '@shared/errors/AppError';
import { Request, Response } from 'express';
import AuthUserService from '../services/AuthUserService';

export default class AuthUserController {
  async authenticate(
    request: Request,
    response: Response,
  ): Promise<Response | AppError> {
    const { username, password } = request.body;

    const authenticateService = new AuthUserService();

    const login = await authenticateService.authenticate({
      username,
      password,
    });

    return response.json(login);
  }
}
