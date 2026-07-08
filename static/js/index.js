window.HELP_IMPROVE_VIDEOJS = false;

const sampleSets = {
  libri2mix: [
    {
      group: "Female voices / clean",
      label: "Female clean sample 01",
      files: {
        mixture: "static/audio/libri2mix/female/clean/sample_01/mixture.wav",
        tunetA: "static/audio/libri2mix/female/clean/sample_01/tunet_speaker_1.wav",
        tunetB: "static/audio/libri2mix/female/clean/sample_01/tunet_speaker_2.wav"
      }
    },
    {
      group: "Female voices / clean",
      label: "Female clean sample 02",
      files: {
        mixture: "static/audio/libri2mix/female/clean/sample_02/mixture.wav",
        tunetA: "static/audio/libri2mix/female/clean/sample_02/tunet_speaker_1.wav",
        tunetB: "static/audio/libri2mix/female/clean/sample_02/tunet_speaker_2.wav"
      }
    },
    {
      group: "Female voices / noise",
      label: "Female noise sample 01",
      files: {
        mixture: "static/audio/libri2mix/female/noise/sample_01/mixture.wav",
        tunetA: "static/audio/libri2mix/female/noise/sample_01/tunet_speaker_1.wav",
        tunetB: "static/audio/libri2mix/female/noise/sample_01/tunet_speaker_2.wav"
      }
    },
    {
      group: "Female voices / noise",
      label: "Female noise sample 02",
      files: {
        mixture: "static/audio/libri2mix/female/noise/sample_02/mixture.wav",
        tunetA: "static/audio/libri2mix/female/noise/sample_02/tunet_speaker_1.wav",
        tunetB: "static/audio/libri2mix/female/noise/sample_02/tunet_speaker_2.wav"
      }
    },
    {
      group: "Male voices / clean",
      label: "Male clean sample 01",
      files: {
        mixture: "static/audio/libri2mix/male/clean/sample_01/mixture.wav",
        tunetA: "static/audio/libri2mix/male/clean/sample_01/tunet_speaker_1.wav",
        tunetB: "static/audio/libri2mix/male/clean/sample_01/tunet_speaker_2.wav"
      }
    },
    {
      group: "Male voices / clean",
      label: "Male clean sample 02",
      files: {
        mixture: "static/audio/libri2mix/male/clean/sample_02/mixture.wav",
        tunetA: "static/audio/libri2mix/male/clean/sample_02/tunet_speaker_1.wav",
        tunetB: "static/audio/libri2mix/male/clean/sample_02/tunet_speaker_2.wav"
      }
    },
    {
      group: "Male voices / noise",
      label: "Male noise sample 01",
      files: {
        mixture: "static/audio/libri2mix/male/noise/sample_01/mixture.wav",
        tunetA: "static/audio/libri2mix/male/noise/sample_01/tunet_speaker_1.wav",
        tunetB: "static/audio/libri2mix/male/noise/sample_01/tunet_speaker_2.wav"
      }
    },
    {
      group: "Male voices / noise",
      label: "Male noise sample 02",
      files: {
        mixture: "static/audio/libri2mix/male/noise/sample_02/mixture.wav",
        tunetA: "static/audio/libri2mix/male/noise/sample_02/tunet_speaker_1.wav",
        tunetB: "static/audio/libri2mix/male/noise/sample_02/tunet_speaker_2.wav"
      }
    }
  ],
  voxconverse: [
    {
      label: "VoxConverse sample 01",
      files: {
        mixture: "static/audio/voxconverse/sample_01/mixture.wav",
        tunetA: "static/audio/voxconverse/sample_01/tunet_speaker_1.wav",
        tunetB: "static/audio/voxconverse/sample_01/tunet_speaker_2.wav"
      }
    }
  ],
  realRecorded: [
    {
      label: "Real recording sample 01",
      files: {
        mixture: "static/audio/real_recorded/sample_01/mixture.wav",
        tunetA: "static/audio/real_recorded/sample_01/tunet_speaker_1.wav",
        tunetB: "static/audio/real_recorded/sample_01/tunet_speaker_2.wav"
      }
    }
  ]
};

const sampleColumns = [
  ["mixture", "Mixture"],
  ["tunetA", "Separated speaker 1"],
  ["tunetB", "Separated speaker 2"]
];

function copyBibTeX() {
  const bibtexElement = document.getElementById("bibtex-code");
  const button = document.querySelector(".copy-bibtex-btn");
  const copyText = button.querySelector(".copy-text");

  if (!bibtexElement) {
    return;
  }

  navigator.clipboard.writeText(bibtexElement.textContent).then(() => {
    button.classList.add("copied");
    copyText.textContent = "Copied";
    setTimeout(() => {
      button.classList.remove("copied");
      copyText.textContent = "Copy";
    }, 2000);
  }).catch(() => {
    const textArea = document.createElement("textarea");
    textArea.value = bibtexElement.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    button.classList.add("copied");
    copyText.textContent = "Copied";
    setTimeout(() => {
      button.classList.remove("copied");
      copyText.textContent = "Copy";
    }, 2000);
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function createAudioCell(label, src) {
  const cell = document.createElement("div");
  cell.className = "audio-cell";

  const title = document.createElement("span");
  title.textContent = label;

  const audio = document.createElement("audio");
  audio.controls = true;
  audio.preload = "none";
  audio.src = src;
  audio.setAttribute("aria-label", `${label}: ${src}`);

  cell.append(title, audio);
  return cell;
}

function renderSamples() {
  document.querySelectorAll("[data-dataset]").forEach((mount) => {
    const samples = sampleSets[mount.dataset.dataset] || [];
    let currentGroup = "";

    samples.forEach((sample) => {
      if (sample.group && sample.group !== currentGroup) {
        currentGroup = sample.group;
        const group = document.createElement("h4");
        group.className = "sample-group-title";
        group.textContent = sample.group;
        mount.append(group);
      }

      const row = document.createElement("article");
      row.className = "sample-row";

      const title = document.createElement("div");
      title.className = "sample-title";
      title.textContent = sample.label;
      row.append(title);

      sampleColumns.forEach(([key, label]) => {
        row.append(createAudioCell(label, sample.files[key]));
      });

      mount.append(row);
    });
  });
}

window.addEventListener("scroll", () => {
  const scrollButton = document.querySelector(".scroll-to-top");
  if (!scrollButton) {
    return;
  }
  scrollButton.classList.toggle("visible", window.pageYOffset > 300);
});

document.addEventListener("DOMContentLoaded", () => {
  renderSamples();

  if (window.bulmaCarousel) {
    bulmaCarousel.attach(".carousel", {
      slidesToScroll: 1,
      slidesToShow: 1,
      loop: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000
    });
  }

  if (window.bulmaSlider) {
    bulmaSlider.attach();
  }
});
