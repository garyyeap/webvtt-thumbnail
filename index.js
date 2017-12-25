import Webvtt from 'webvtt-core';

export default class ThumbnailSeeker extends Webvtt {
  constructor(text) {
    super(text);
  }

  contentParser(raw) {
    const X = 0;
    const Y = 1;
    const W = 2;
    const H = 3;
    const arr = raw.split('#');
    const rect = arr[1].split('=')[1].split(',');
    return {
      name: arr[0],
      x: parseInt(rect[X]),
      y: parseInt(rect[Y]),
      w: parseInt(rect[W]),
      h: parseInt(rect[H])
    };
  }
}
