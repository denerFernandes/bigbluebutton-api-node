class Record {

    constructor(xml) {
        this.recordId                               = xml.recordID._text;
        this.meetingId                              = xml.meetingID._text;
        this.name                                   = xml.name._cdata;
        this.isPublished                            = xml.published._text;
        this.state                                  = xml.state._text;
        this.startTime                              = parseFloat(xml.startTime._text);
        this.endTime                                = parseFloat(xml.endTime._text);
        this.playbackType                           = xml.playback.format.type._text;
        this.playbackUrl                            = xml.playback.format.url._text;
        this.playbackLength                         = parseInt(xml.playback.format.length._text);
        this.metas                                  = [];
        this.metas['bbb-context']                   = xml.metadata['bbb-context']._cdata;
        this.metas['bbb-origin-version']            = xml.metadata['bbb-origin-version']._cdata;
        this.metas['bn-origin']                     = xml.metadata['bn-origin']._cdata;
        this.metas['bbb-origin-tag']                = xml.metadata['bbb-origin-tag']._cdata;
        this.metas['bbb-origin-server-common-name'] = xml.metadata['bbb-context']._cdata;
        this.metas['bbb-origin-server-name']        = xml.metadata['bbb-origin-server-name']._cdata;
        this.metas['bbb-recording-description']     = xml.metadata['bbb-recording-description']._cdata;
        this.metas['bbb-recording-name']            = xml.metadata['bbb-recording-name']._cdata;
        this.metas['bbb-recording-tags']            = xml.metadata['bbb-recording-tags']._cdata;

    }

    getRecordId() {
        return this.recordId;
    }

    getMeetingId() {
        return this.meetingId;
    }

    getName() {
        return this.name;
    }

    getIsPublished() {
        return this.isPublished;
    }

    getState() {
        return this.state;
    }

    getStartTime() {
        return this.startTime;
    }

    getEndTime() {
        return this.endTime;
    }

    getPlaybackType() {
        return this.playbackType;
    }

    getPlaybackUrl() {
        return this.playbackUrl;
    }

    getPlaybackLength() {
        return this.playbackLength;
    }

    getMetas() {
        return this.metas;
    }
}
module.exports=Record;