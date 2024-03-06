
export class AppUser {
    id;
    firstName = '';
    lastName = '';
    studentType = '';
    
    constructor(tempId, tempFirstName, tempLastName, tempStudentType) {
        this.id = tempId;
        this.firstName = tempFirstName;
        this.lastName = tempLastName;
        this.studentType = tempStudentType;
    }
}

export const appUserConverter = {
    toFirestore: (appUser) => {
        return {
                id: appUser.id,
                firstName: appUser.firstName,
                lastName: appUser.lastName,
                studentType: appUser.studentType,
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new AppUser(data.id, data.firstName, data.lastName, data.studentType);
    }
};