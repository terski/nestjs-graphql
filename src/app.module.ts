import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';

@Module({
    imports: [
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql'],
            definitions: {
                path: join(process.cwd(), 'src/app.schema.ts'),
                outputAs: 'class',
            },
        }),
    ],
    providers: [AppService, AppResolver],
})
export class AppModule {}
