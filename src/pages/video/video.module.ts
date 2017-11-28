import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoPage } from './video';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { VideoPlayer } from '@ionic-native/video-player';

@NgModule({
  declarations: [
    VideoPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoPage),
  ],
  providers: [
    MediaCapture,
    VideoPlayer
  ]
})
export class VideoPageModule {}
