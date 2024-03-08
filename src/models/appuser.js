export class AppUser {
  id;
  firstName = "";
  lastName = "";
  studentType = "";
  isOfficer = false;

  constructor(
    tempId,
    tempFirstName,
    tempLastName,
    tempStudentType,
    tempIsOfficer
  ) {
    this.id = tempId;
    this.firstName = tempFirstName;
    this.lastName = tempLastName;
    this.studentType = tempStudentType;
    this.isOfficer = tempIsOfficer;
  }
}

export const appUserConverter = {
  toFirestore: (appUser) => {
    return {
      id: appUser.id,
      firstName: appUser.firstName,
      lastName: appUser.lastName,
      studentType: appUser.studentType,
      isOfficer: appUser.isOfficer,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new AppUser(
      data.id,
      data.firstName,
      data.lastName,
      data.studentType,
      data.isOfficer
    );
  },
};
