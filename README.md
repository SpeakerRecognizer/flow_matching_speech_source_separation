# Flow Matching-Based Speech Source Separation with Best-of-N Biometric Sampling

Demo page for the ICML 2026 Workshop paper on flow matching-based two-speaker source separation.

[Paper](http://arxiv.org/pdf/2607.06088) · [arXiv](http://arxiv.org/abs/2607.06088)

## Abstract

Single-channel speech separation remains challenging for real-world deployment due to source permutation ambiguity, sampling variability of generative models, and the difficulty of processing long recordings with chunk-wise inference. We address these issues with a conditional flow-matching-based method that produces an ordered two-source output conditioned on the mixture. A frozen speaker encoder defines the source order during training and is reused at inference for biometric best-of-N candidate selection and chunk-level channel alignment.

## Results

Objective separation metrics on Libri2Mix, reported as clean / both:

| Model | SI-SDR ↑ | PESQ ↑ | ESTOI ↑ |
|---|---:|---:|---:|
| ConvUnet (ours) | 14.42 / 9.28 | 2.64 / 1.65 | 0.90 / 0.75 |
| TUnet (ours) | 17.30 / 11.25 | 3.11 / 1.92 | 0.93 / 0.79 |
| DiffSep | 9.60 / - | 2.58 / - | 0.78 / - |
| SepReformer (chunk) | 11.30 / - | 2.45 / - | 0.88 / - |
| SepReformer (full) | 19.22 / 13.70 | 3.02 / 2.14 | 0.92 / 0.83 |
| MeanFlow-TSE (full) | 17.56 / 11.68 | 3.27 / 2.18 | 0.91 / 0.80 |

Downstream ASR and speaker verification on Libri2Mix clean:

| Model | Whisper V3 cpWER ↓ | Parakeet cpWER ↓ | ResNet EER ↓ | Wav2Vec 2.0 EER ↓ | DistilWhisper EER ↓ |
|---|---:|---:|---:|---:|---:|
| ConvUnet (ours) | 4.99 | 25.51 | 3.17 | 0.51 | 1.28 |
| TUnet (ours) | 3.84 | 21.31 | 2.81 | 0.39 | 1.05 |
| MeanFlow-TSE (full) | 9.05 | 24.84 | 4.61 | 2.94 | 3.25 |
| SepReformer (full) | 5.02 | - | 2.92 | 0.72 | 1.29 |
| SepReformer (chunk) | 12.90 | - | 3.76 | 1.45 | 1.97 |

## Audio Samples

The demo includes examples from [Libri2Mix](https://github.com/JorisCos/LibriMix), [VoxConverse](https://www.robots.ox.ac.uk/~vgg/data/voxconverse/), and a real recording. Each example contains the input mixture and two separated output channels.

## Citation

```bibtex
@inproceedings{zorkina2026flowmatchingseparation,
  title     = {Flow Matching-Based Speech Source Separation with Best-of-N Biometric Sampling},
  author    = {Zorkina, Anastasia and Anikin, Alexandr and Khmelev, Nikita and Korenevskaya, Anastasiya and Novoselov, Sergey and Volokhov, Vladimir and Korenevsky, Maxim and Matveev, Yuriy},
  booktitle = {ICML 2026 Workshop on Machine Learning for Audio},
  year      = {2026},
  url       = {http://arxiv.org/abs/2607.06088}
}
```
