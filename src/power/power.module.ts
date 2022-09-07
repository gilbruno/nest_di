import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

/**
 * NB : without "exports" property, the 'PowerService' is only accessible 
 * in the 'PowerModule'
 * With "exports" property, the 'PowerService' is accessible by any modules
 */
@Module({
  providers: [PowerService],
  exports: [PowerService] 
})
export class PowerModule {}
