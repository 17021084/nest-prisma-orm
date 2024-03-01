import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateSettingDto {
  @IsBoolean()
  @IsNotEmpty()
  notificationsOn?: boolean;

  @IsBoolean()
  @IsOptional()
  smsEnabled?: boolean;
}
