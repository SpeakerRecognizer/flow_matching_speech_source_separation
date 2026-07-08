# Flow Matching Speech Separation Demo

Static demo page for the paper, based on
[`eliahuhorwitz/Academic-project-page-template`](https://github.com/eliahuhorwitz/Academic-project-page-template):

**Flow Matching-Based Speech Source Separation with Best-of-N Biometric Sampling**

Open `index.html` locally or publish the `repo/` directory with GitHub Pages.

## Replace before release

- Add final project URL in Open Graph metadata if needed.

## Structure

- `index.html` - project page content.
- `static/css/` - Bulma/template styles and local custom styles.
- `static/js/` - template scripts and audio sample rendering.
- `static/images/` - paper figures used by the page.
- `static/audio/` - placeholder folders for future demo audio.

## Audio layout

Each sample directory is expected to contain:

- `mixture.wav`
- `tunet_speaker_1.wav`
- `tunet_speaker_2.wav`

Current prepared directories for Libri2Mix:

- `static/audio/libri2mix/female/clean/sample_01/`
- `static/audio/libri2mix/female/clean/sample_02/`
- `static/audio/libri2mix/female/noise/sample_01/`
- `static/audio/libri2mix/female/noise/sample_02/`
- `static/audio/libri2mix/male/clean/sample_01/`
- `static/audio/libri2mix/male/clean/sample_02/`
- `static/audio/libri2mix/male/noise/sample_01/`
- `static/audio/libri2mix/male/noise/sample_02/`

Current prepared directories for VoxConverse:

- `static/audio/voxconverse/sample_01/`

Current prepared directories for real recordings:

- `static/audio/real_recorded/sample_01/`
