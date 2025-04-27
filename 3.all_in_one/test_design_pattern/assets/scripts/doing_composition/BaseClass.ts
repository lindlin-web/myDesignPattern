export class BaseClass {
   
    public homeBase()
    {
        console.log("This is from the Base Class");
    }
}


class Media 
{
    protected playMedia:PlayMedia;
    protected recordMedia:RecordMedia;

    public constructor()
    {

    }

    public doPlayMedia():void 
    {
        this.playMedia.playNow();
    }
    public doRecordMedia():void
    {
        this.recordMedia.recordNow();

    }
}

class MP3 extends Media
{
    constructor()
    {
        super();
        this.playMedia = new PlayAudio();
        this.recordMedia = new RecordAudio();
    }
}




class VideoFlash extends Media
{
    constructor()
    {
        super();
        this.playMedia = new PlayVideo();
        this.recordMedia = new RecordVideo();
    }
}


interface RecordMedia 
{
    recordNow():void;
}

interface PlayMedia 
{
    playNow():void;
}

class PlayVideo implements PlayMedia
{
    public playNow(): void {
        console.log("Playing my video. Look at that!");
    }
}

class PlayAudio implements PlayMedia 
{
    public playNow(): void {
        console.log("My MP3 is cranking out great music!");
    }
}

class RecordAudio implements RecordMedia 
{
    public recordNow(): void {
        console.log("Rats! I can't record MP3 by itself.\n");
    }
}

class RecordVideo implements RecordMedia
{
    public recordNow(): void {
        console.log("I'm recording this tornado live! Holy....crackle, crackle\n");
    }
}

import { _decorator, Component, Delaunay, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TestMedia')
export class TestMedia extends Component {
    start() {

        let delVideo:Media = new VideoFlash();
        delVideo.doPlayMedia();
        delVideo.doRecordMedia();

        let delAudio:Media = new MP3();
        delAudio.doPlayMedia();
        delAudio.doRecordMedia();
    }

    update(deltaTime: number) {
        
    }
}

