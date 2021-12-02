const observe = jest.fn();

window.IntersectionObserver = jest.fn(function () {
  this.observe = observe;
});
