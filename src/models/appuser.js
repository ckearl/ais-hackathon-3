export class AppUser {
  id = null;
  firstName = "";
  lastName = "";
  netID = "";
  studentType = "";
  isOfficer = false;

  constructor(
    tempId,
    tempFirstName,
    tempLastName,
    tempNetID,
    tempStudentType,
    tempIsOfficer
  ) {
    this.id = tempId;
    this.firstName = tempFirstName;
    this.lastName = tempLastName;
    this.netID = tempNetID;
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
      netID: appUser.netID,
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
      data.netID,
      data.studentType,
      data.isOfficer
    );
  },
};
