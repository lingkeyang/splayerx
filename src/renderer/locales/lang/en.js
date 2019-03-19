export default {
  msg: {
    titleName: 'SPlayer',
    file: {
      name: 'File',
      open: 'Open…',
      openURL: 'Open URL…',
      openRecent: 'Open Recent',
      clearHistory: 'Clear Playback History',
      closeWindow: 'Close Window',
    },
    playback: {
      name: 'Playback',
      fullScreen: 'Full Screen',
      keepPlayingWindowFront: 'Float When Playing',
      increasePlaybackSpeed: 'Increase Playback Speed',
      decreasePlaybackSpeed: 'Decrease Playback Speed',
      resetSpeed: 'Reset Playback Speed',
      captureScreen: 'Capture Screen',
      captureVideoClip: 'Capture Video Clip',
      play: 'Play',
      pause: 'Pause',
      forwardS: 'Step Forward +5s',
      backwardS: 'Step Backward -5s',
      forwardL: 'Step Forward +60s',
      backwardL: 'Step Backward -60s',
      singleCycle: 'Repeat One',
    },
    audio: {
      name: 'Audio',
      increaseAudioDelay: 'Audio Delay',
      decreaseAudioDelay: 'Audio Delay',
      mute: 'Mute',
      switchAudioTrack: 'Switch Audio Track',
      defaultAudioTrack: 'Default',
      increaseVolume: 'Increase Volume',
      decreaseVolume: 'Decrease Volume',
    },
    subtitle: {
      name: 'Subtitles',
      subtitleSelect: 'Translation',
      AITranslation: 'Reload Smart Translation',
      loadSubtitleFile: 'Load Subtitle File…',
      menuLoading: 'Loading ...',
      langZhCN: 'Chinese',
      langEn: 'English',
      notToShowSubtitle: 'None',
      noSubtitle: 'Not Found',
      mainSubtitle: 'Primary Subtitle',
      secondarySubtitle: 'Secondary Subtitle',
      subtitleStyle: 'Font Style',
      style1: 'Movie Style',
      style2: 'Anime Style',
      style3: 'Retro Style',
      style4: 'Japanese Style',
      style5: 'Modern Classic',
      subtitleSize: 'Font Size',
      size1: 'Small',
      size2: 'Standard',
      size3: 'Large',
      size4: 'Extra Large',
      uploadSelectedSubtitle: 'Upload Selected Subtitle',
      increaseSubtitleDelayS: 'Subtitle Delay +0.1s',
      decreaseSubtitleDelayS: 'Subtitle Delay -0.1s',
      enabledSecondarySub: 'Enable Secondary Subtitle',
      // increaseSubtitleDelayL: 'Subtitle Delay +0.5s',
      // decreaseSubtitleDelayL: 'Subtitle Delay -0.5s',
    },
    window: {
      name: 'Window',
      minimize: 'Minimize',
      enterFullScreen: 'Enter Full Screen',
      exitFullScreen: 'Exit Full Screen',
      bossKey: 'Boss Key',
      originSize: '100%',
      doubleSize: '200%',
      maxmize: 'Zoom',
      halfSize: '50%',
    },
    help: {
      name: 'Help',
      splayerxHelp: 'Help',
    },
    splayerx: {
      about: 'About SPlayer',
      preferences: 'Preferences',
      homepage: 'Website',
      feedback: 'Feedback',
      hide: 'Hide',
      hideOthers: 'Hide Others',
      quit: 'Quit SPlayer',
    },
    update: {
      title: 'update dialog',
      message: 'Restart the app now to install update?',
      yes: 'yes',
      no: 'no',
      updateInstalled: 'has successfully installed update!',
    },
  },
  css: {
    titleFontSize: { fontSize: '21px' },
    versionFontSize: { fontSize: '14px' },
  },
  preferences: {
    general: {
      others: 'Others',
      generalSetting: 'General',
      displayLanguage: 'Display Language',
      clearHistory: 'Always clear playback history on exit',
      switchDisplayLanguages: 'Display Language controls the language you see in SPlayer.',
    },
    privacy: {
      privacySetting: 'Translation',
      none: 'None',
      settings: 'Settings',
      privacyConfirm: 'Allow anonymous data / Smart Translation',
      setAsDefault: 'Set SPlayer as the Default Application',
      languagePriority: 'Language Priority',
      languageDescription: 'Find translation results in the following language sequence while the video is being played.',
      primary: 'Primary',
      secondary: 'Secondary',
    },
  },
  advance: {
    rateTitle: 'Play Speed',
    subMenu: 'Subtitle Settings',
    audioMenu: 'Audio Settings',
    fontSize: 'Font Size',
    fontStyle: 'Font Style',
    subDelay: 'Subtitle Delay',
    fontItems: ['S', 'M', 'L', 'XL'],
    audioDelay: 'Audio Delay',
    changeTrack: 'Audio Track',
    chosenTrack: 'Default',
    track: 'Track',
  },
  errorFile: {
    fileNonExist: {
      title: 'File Not Found',
      content: 'It will be removed from the list.',
    },
    emptyFolder: {
      title: 'Open Failed',
      content: 'Cannot find playable file',
    },
    default: {
      title: 'Open Failed',
      content: 'Video type unsupported.',
    },
    loadFailed: {
      title: 'Load Subtitle Failed',
      content: 'Subtitle type unsupported.',
    },
    offLine: {
      title: 'No Network Access',
      content: 'Please check network and try again.',
    },
    timeout: {
      title: 'Request Timeout',
      content: 'Network delay or server error.',
    },
  },
  loading: {
    title: '',
    content: 'Loading Translations ...',
  },
  uploading: {
    title: '',
    content: 'Subtitle Uploading ...',
  },
  uploadingSuccess: {
    title: 'Upload Successfully',
    content: 'Subtitle has been uploaded.',
  },
  uploadingFailed: {
    title: 'Upload Failed',
    content: 'Please try later.',
  },
  privacyBubble: {
    masVersion: {
      content: 'Smart Translation function needs your consent for uploading anonymous media info to the server  side, and you will not receive translation results if you disagree. There is no privacy information will be collected.',
      agree: 'Enable',
      disagree: 'Disable',
    },
    tryToDisable: {
      partOne: 'SPlayer uses anonymous data to enhance user experience. Smart Translation will be disabled if you ',
      partTwo: '.',
      underlinedContent: 'disagree',
      button: 'OK',
    },
    confirmDisable: {
      partOne: 'Confirm to ',
      partTwo: ' anonymous data and Smart Translation.',
      underlinedContent: 'disable',
      button: 'CANCEL',
    },
  },
  recentPlaylist: {
    folderSource: 'Folder',
    playlistSource: 'Playlist',
    playing: 'Playing',
  },
  nextVideo: {
    nextInFolder: 'Next in Folder',
    nextInPlaylist: 'Next in Playlist',
  },
  subtitle: {
    embedded: 'Embed',
    language: {
      zh: 'Chinese (Simplified)',
      'zh-CN': 'Chinese (Simplified)',
      'zh-TW': 'Chinese (Traditional)',
      en: 'English',
      es: 'Spanish',
      ja: 'Japanese',
      fr: 'French',
      ko: 'Korean',
      pt: 'Portuguese (Portugal, Brazil)',
      ar: 'Arabic',
      de: 'German',
      ru: 'Russian',
      hi: 'Hindi',
      it: 'Italian',
    },
  },
};

