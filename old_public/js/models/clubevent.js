class ClubEvent {
  id;
  title = "";
  description = "";
  location = "";
  imgUrl = "";
  handshakeUrl = "";
  category = "";
  datetime;

  constructor(
    tempId,
    tempTitle,
    tempDescription,
    tempLocation,
    tempImgUrl,
    tempHandshakeUrl,
    tempCategory,
    tempDateTime
  ) {
    this.id = tempId;
    this.title = tempTitle;
    this.description = tempDescription;
    this.location = tempLocation;
    this.imgUrl = tempImgUrl;
    this.handshakeUrl = tempHandshakeUrl;
    this.tempCategory = tempCategory;
    this.datetime = tempDateTime;
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
      data.datetime
    );
  },
};

export { ClubEvent, clubEventConverter };
