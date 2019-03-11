
/**
 * Expose `logit`.
 */

module.exports = logit;

/**
 * logit.
 *
 * 	- Non-linear, continuous, and differentiable logistic function. Inverse of sigmoid
 *
 * @param {Number} z
 */

function logit(z) {
  return Math.log(z / (1 - z));
}
