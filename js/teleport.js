/*
	Source:
	van Creij, Maurice (2019). "teleport.js: Teleport DOM elements", http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// establish the class
var Teleport = function (cfg) {

	// PROPERTIES

	this.cfg = cfg;

	// METHODS

	this.onUpdate = function() {
    var breakpoint, storedNode;
    // recheck all breakpoints
    for (var idx in this.cfg.breakpoints) {
      // if the breakpoint matches and it's not in the right container
      breakpoint = this.cfg.breakpoints[idx];
      if (window.matchMedia(breakpoint.condition).matches && breakpoint.container !== this.cfg.element.parentNode) {
        // move the element to this container
        storedNode = this.cfg.element.parentNode.removeChild(this.cfg.element);
        if (breakpoint.before && breakpoint.container.firstChild) {
          breakpoint.container.insertBefore(storedNode, breakpoint.before);
        } else {
          breakpoint.container.appendChild(storedNode);
        }
      }
    }
  };

	// EVENTS

	window.addEventListener('resize', this.onUpdate.bind(this));
  this.onUpdate();

};

// return as a require.js module
if (typeof define != 'undefined') define([], function () { return Teleport });
if (typeof module != 'undefined') module.exports = Teleport;
