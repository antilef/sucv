import { Test, TestingModule } from "@nestjs/testing";
import { AuthService } from "./auth.service";
import { JwtService } from "@nestjs/jwt";
import { UserRepository } from "../user/user.repository";
import { HashService } from "./hash.service";

describe('AuthService', () => {
    let authService: AuthService;
    let jwtMock: Partial<JwtService>;
    let mockUserRepository: Partial<UserRepository>;
    let mockHashService: Partial<HashService>
  
    beforeEach(async () => {
        jwtMock = {
            signAsync: jest.fn().mockReturnValue('resultado A'),
        };
      
        mockUserRepository = {
            getUserBy: jest.fn().mockReturnValue('resultado B'),
        };
        mockHashService = {
            hash: jest.fn().mockReturnValue('hash'),
            compare: jest.fn().mockReturnValue(true)
        };


      const app: TestingModule = await Test.createTestingModule({
        providers: [
            AuthService,
            {provide: JwtService,useValue: jwtMock},
            {provide:UserRepository, useValue: mockUserRepository},
            {provide:HashService, useValue: mockHashService}
        ],
      })
      .compile();
  
      authService = app.get<AuthService>(AuthService);
    });
  
    describe('root', () => {
      it('should return true to valid run', () => {
        expect(authService.checkRun('19862480-2')).toBeTruthy();
      });

      // it('should signIn',async () => {
      //   const res = await authService.signIn('19862480-2','password')
      //   expect(res).toBe('works')
      // })
    });
  });
  