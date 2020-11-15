import express from 'express';
import User from "interfaces/user";
import { v4 as uuidv4 } from 'uuid';


type users = {
    [key: string]: User
}


export default class UsersController {
	public path = '/users';
	public router = express.Router();

	private users: users = {
        '1': {
            profile_name: "Eduardo Luis Santos",
            id: '1',
            status: 'active',
            chats: ['a', 'b'],
            profile_image: "https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/57612568_10218857818333991_4682404239798960128_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_eui2=AeEJLyHn5-dvBM8JI8i4SrSo2BudxjhWIxHYG53GOFYjEe0f59V-xVitOeHz0hd3EQg&_nc_ohc=_qWFI1-NTD4AX91IzPX&_nc_ht=scontent-qro1-1.xx&oh=d4f4b0acb9654009cfcab7355dd2cf96&oe=5FA3BED4"
        },
        '2': {
            profile_name: "Sarith",
            id: '2',
            status: 'active',
            chats: ['d', 'e'],
            profile_image: "https://scontent.fpbc1-1.fna.fbcdn.net/v/t1.0-9/12592504_10205937861392689_1840704728050943129_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGJQ7hVT3jzzdil5RE9xmtOw8e2erRkHZ7Dx7Z6tGQdng4cKI2oSzTYbmnvpAbU9I0&_nc_ohc=SSyRdthDSy4AX9OBjLi&_nc_oc=AQn7_xHOeFNTgyEowX7bw9hlz6lFRyhBddmm-QCdXJLJH06TPSsC4vdG-GUlyY8Mx5x1D-1qXbeiAtPwicXYjV58&_nc_ht=scontent.fpbc1-1.fna&oh=a75d80cd3854a5e085e765e03e4aeea2&oe=5FCC7DBD"
        },
        '3': {
            profile_name: "Eduardo Luis Santos Barreto",
            id: '3',
            status: 'active',
            chats: ['f', 'g'],
            profile_image: "https://scontent.fpbc1-1.fna.fbcdn.net/v/t1.0-9/41556867_10215755713860125_6657897601762852864_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGR-zrKiSff3N3UROxwHUR4X7GUZTcFpXRfsZRlNwWldLSLtwzClP4ggeaGBiNC0Vg&_nc_ohc=BIzxmUKBbEAAX9KkOn_&_nc_ht=scontent.fpbc1-1.fna&oh=56f80e93a846da6b18df824668ba68d7&oe=5FCF016D"
        }
    }

	constructor() {
		this.intializeRoutes();
	}

	public intializeRoutes() {
		this.router.get(this.path, this.getAllUsers);
		this.router.post(this.path, this.createUser);
	}

	getAllUsers = (request: express.Request, response: express.Response) => {
		response.send(this.users);
	};

	createUser = (request: express.Request, response: express.Response) => {
        const user: User = request.body;
        const id = uuidv4();

        user.id = id;
		this.users[user.id] = user;
		response.send(user);
	};
}
