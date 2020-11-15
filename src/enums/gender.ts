enum Gender {
	Male,
	Female,
	Other
}

const Genders = new Map<number, string>([
	[ Gender.Male, 'male' ],
	[ Gender.Female, 'famale' ],
	[ Gender.Other, 'other' ]
]);

export { Gender, Genders };
