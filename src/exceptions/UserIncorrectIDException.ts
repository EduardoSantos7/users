import HttpException from './HttpException';

class UserIncorrectIDException extends HttpException {

	constructor(id: string) {
		super(400, `ID: ${id} has not a correct format`);
	}
}

export default UserIncorrectIDException;
