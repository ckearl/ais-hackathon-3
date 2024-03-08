import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
  Timestamp,
} from "firebase/firestore";

class ClubEvent {
  id: string | null;
  title: string = "";
  description: string = "";
  location: string = "";
  imgUrl: string = "";
  externalUrl: string = "";
  category: string = "";
  datetime: Timestamp;
  userAttendees: string[] = [];
  additionalAttendance: number = 0;

  constructor(
    tempId: string | null,
    tempTitle: string,
    tempDescription: string,
    tempLocation: string,
    tempImgUrl: string,
    tempExternalUrl: string,
    tempCategory: string,
    tempDateTime: Timestamp,
    tempUserAttendees: string[],
    tempAdditionalAttendance: number
  ) {
    this.id = tempId;
    this.title = tempTitle;
    this.description = tempDescription;
    this.location = tempLocation;
    this.imgUrl = tempImgUrl;
    this.externalUrl = tempExternalUrl;
    this.category = tempCategory;
    this.datetime = tempDateTime;
    this.userAttendees = tempUserAttendees;
    this.additionalAttendance = tempAdditionalAttendance;
  }
}

const clubEventConverter = {
  toFirestore: (event: ClubEvent) => {
    return {
      id: event.id,
      title: event.title,
      description: event.description,
      location: event.location,
      imgUrl: event.imgUrl,
      externalUrl: event.externalUrl,
      category: event.category,
      datetime: event.datetime,
      userAttendees: event.userAttendees,
      additionalAttendance: event.additionalAttendance,
    };
  },
  fromFirestore: (
    snapshot: QueryDocumentSnapshot<DocumentData>,
    options: SnapshotOptions
  ) => {
    const data = snapshot.data(options);
    return new ClubEvent(
      data.id,
      data.title,
      data.description,
      data.location,
      data.imgUrl,
      data.externalUrl,
      data.category,
      data.datetime,
      data.userAttendees,
      data.additionalAttendance
    );
  },
};

export { ClubEvent, clubEventConverter };
