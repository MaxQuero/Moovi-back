import { Body, Controller, Param, Post } from '@nestjs/common';
import { UserService } from "./user.service";
import { UserModelService } from '../helpers/user.model.service';
@Controller('user')
export class UserController {
    constructor(
        private userService: UserService,
        private userModelService: UserModelService
    ) {
    }

    @Post('create')
    async createUser(@Body() body): Promise<any> {
        console.info('body', body)
        const sessionId = await this.userService.getSession(body).then(
            (session) => {
                console.info('session', session)

                if (session.success) {
                    console.info('return')
                    return session.sessionId;
                } else {
                    //TODO: error
                }
            }
        );

        console.info('sessionId', sessionId)


        return this.userService.getUserFromSessionId(sessionId).then(
            (user) => {
                this.userModelService.addUser(user);
                return JSON.stringify(
                    {
                        id: user.id,
                        username: user.username,
                        sessionId: sessionId
                    });
            },
            (err) => {
                return err;
            }
        )
    }

}
