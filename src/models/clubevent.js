class ClubEvent {
  id;
  title = "";
  description = "";
  location = "";
  imgUrl = "";
  handshakeUrl = "";
  category = "";
  datetime;
  userAttendees = [];
  additionalAttendance = 0;

  constructor(
    tempId,
    tempTitle,
    tempDescription,
    tempLocation,
    tempImgUrl,
    tempHandshakeUrl,
    tempCategory,
    tempDateTime,
    tempUserAttendees,
    tempAdditionalAttendance
  ) {
    this.id = tempId;
    this.title = tempTitle;
    this.description = tempDescription;
    this.location = tempLocation;
    this.imgUrl = tempImgUrl;
    this.handshakeUrl = tempHandshakeUrl;
    this.tempCategory = tempCategory;
    this.datetime = tempDateTime;
    this.userAttendees = tempUserAttendees;
    this.additionalAttendance = tempAdditionalAttendance;
  }
}

const clubEventConverter = {
  toFirestore: (event) => {
    return {
      id: event.id,
      title: event.title,
      description: event.description,
      location: event.location,
      imgUrl: event.imgUrl,
      handshakeUrl: event.handshakeUrl,
      tempCategory: event.tempCategory,
      datetime: event.datetime,
      userAttendees: event.userAttendees,
      additionalAttendance: event.additionalAttendance,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new ClubEvent(
      data.id,
      data.title,
      data.description,
      data.location,
      data.imgUrl,
      data.handshakeUrl,
      data.category,
      data.datetime,
      data.userAttendees,
      data.additionalAttendance
    );
  },
};

export { ClubEvent, clubEventConverter };
