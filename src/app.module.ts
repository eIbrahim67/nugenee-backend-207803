import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { CoursesModule } from './courses/courses.module';
import { CourseProjectsModule } from './course-projects/course-projects.module';
import { LearningPathsModule } from './learning-paths/learning-paths.module';
import { PathProjectsModule } from './path-projects/path-projects.module';
import { StudentCertificatesModule } from './student-certificates/student-certificates.module';
import { CourseContentModule } from './course-content/course-content.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    CategoriesModule,
    CoursesModule,
    CourseProjectsModule,
    LearningPathsModule,
    PathProjectsModule,
    StudentCertificatesModule,
    CourseContentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
