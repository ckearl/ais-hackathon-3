
class ClubEvent {
    #id;
    title = '';
    description = '';
    location = '';
    imgUrl = '';
    handshakeUrl = '';
    category = '';
    datetime;

    constructor(tempTitle, tempDescription, tempLocation, tempImgUrl, tempHandshakeUrl, tempCategory, tempDateTime) {
        this.title = tempTitle;
        this.description = tempDescription;
        this.location = tempLocation;
        this.imgUrl = tempImgUrl;
        this.handshakeUrl = tempHandshakeUrl;
        this.tempCategory = tempCategory;
        this.datetime = tempDateTime;
    }
    
    toFirestore() {
        return {
            title: this.title,
            description: this.description,
            location: this.location,
            imgUrl: this.imgUrl,
            handshakeUrl: this.handshakeUrl,
            tempCategory: this.tempCategory,
            datetime: this.datetime,
        };
    }
}

export { ClubEvent };