import { ApiProperty } from "@nestjs/swagger";

export class RegisterDto {
  @ApiProperty({ description: 'Full name of the user' })
  fullName: string;

  @ApiProperty({ description: 'Username of the user' })
  username: string;

  @ApiProperty({ description: 'Password of the user' })
  password: string;
}

export class LoginDto {
  @ApiProperty({ description: 'Username of the user' })
  username: string;

  @ApiProperty({ description: 'Password of the user' })
  password: string;
}