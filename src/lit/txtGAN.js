export default  String.raw`

Generative adversarial networks (GANs) allow for the learning of a deep 
representation without fully annotated data. GANs are implemented as two competing
networks, where the *generator* is trained to counterfeit output data and the 
*discriminator* is trained to detect fakes. During learning both networks improve
their trade, the result of which is a more meaningful 
representation compared to what would be achieved 
by basic convolutional network. The representation learned
is the manifold defined by the Nash equilibrium.
 The key achievement of the GAN model 
is to not only learn to label data, but to isolate this manifold on
which real data lies.

## Links
[2016 NIPS Tutorial](https://arxiv.org/pdf/1701.00160.pdf)

[In DSP Terms](https://arxiv.org/pdf/1710.07035.pdf)

[Survey of Architectures](https://arxiv.org/pdf/1807.04720.pdf)

[Seminal Paper](https://arxiv.org/pdf/1406.2661.pdf)

## Generative Models
Generative models provide an estimate of a probability distribution parametrized with parameters $\bm{\theta}$. For a likelihood model, one considers the likelihood of observed data $x$ as $\prod_{i=1}^m p_\text{model}(x^{(i)};\bm{\theta})$ for $m$ samples. To train a model like this, if the density function (PDF) is explicit just maximize the log-likelihood.

GANs are in a family with other deep generative models, like some likelihood-based ones below:

| Model | Description | Example |
|:---|:---:|---:|
| (FVBN) Fully visible belief networks | $p_\text{model}(\bm{x}) = \prod_{i=1}^n p_\text{model}(x^{(i)} ; x_1,...,x_{i-1})$ (explicit PDF) | DeepMind WaveNet |
| (ICA) Nonlinear independent component ana.  | $p_x(\bm{x}) = p_z(g^{-1}(\bm{x}))\vert\text{det}\frac{\partial g^{-1}(\bm{x})}{\partial \bm{x}}\vert$ (explicit PDF) | real NVP |
 


## Formulation



`;
