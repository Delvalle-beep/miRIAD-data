import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DumpModule } from './domain';
import {
  gene_expression_tcga,
  gene_information,
  mirna_expression_tcga,
  mirna_information,
  tcga_information,
  tcga_sample_information,
} from './shared/entities';

dotenv.config();

@Module({
  imports: [
    DumpModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST || 'localhost',
      port: parseInt(process.env.MYSQL_PORT) || 3306,
      username: process.env.MYSQL_USER || 'postgres',
      password: process.env.MYSQL_PASSWORD || 'postgres',
      database: process.env.MYSQL_DATABASE || 'postgres',
      entities: [
        gene_expression_tcga,
        gene_information,
        mirna_expression_tcga,
        mirna_information,
        tcga_information,
        tcga_sample_information,
      ],
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
