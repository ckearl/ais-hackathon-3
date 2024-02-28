
class ClubEvent {
    #id;
    title = '';
    description = '';
    location = '';
    imgUrl = '';
    handshakeUrl = '';
    datetime;

    constructor(tempTitle, tempDescription, tempLocation, tempImgUrl, tempHandshakeUrl, tempDateTime) {
        this.title = tempTitle;
        this.description = tempDescription;
        this.location = tempLocation;
        this.imgUrl = tempImgUrl;
        this.handshakeUrl = tempHandshakeUrl;
        this.datetime = tempDateTime;
    }
    
    toFirestore() {
        return {
            title: this.title,
            description: this.description,
            location: this.location,
            imgUrl: this.imgUrl,
            handshakeUrl: this.handshakeUrl,
            datetime: this.datetime,
        };
    }
}

export { ClubEvent };