document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('video').forEach(function (video) {
    var track = video.querySelector('track[kind="captions"]');
    if (track) {
      track.mode = 'showing';
    }
  });

  var video = document.querySelector('video');
  var scrollEl = document.querySelector('.transcript__scroll');
  var lines = Array.prototype.slice.call(document.querySelectorAll('.transcript__line'));

  if (!video || !scrollEl || lines.length === 0) {
    return;
  }

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function activeIndexAt(time) {
    for (var i = 0; i < lines.length; i++) {
      var start = parseFloat(lines[i].getAttribute('data-start')) || 0;
      var end = parseFloat(lines[i].getAttribute('data-end')) || 0;
      if (time >= start && time < end) {
        return i;
      }
    }
    return -1;
  }

  function sync(time) {
    var active = activeIndexAt(time);

    lines.forEach(function (line, i) {
      var isActive = i === active;
      line.classList.toggle('is-active', isActive);

      if (isActive) {
        var lineRect = line.getBoundingClientRect();
        var scrollRect = scrollEl.getBoundingClientRect();
        var top = scrollEl.scrollTop + (lineRect.top - scrollRect.top)
          - (scrollEl.clientHeight / 2) + (lineRect.height / 2);

        if (reduceMotion) {
          scrollEl.scrollTop = top;
        } else {
          scrollEl.scrollTo({ top: top, behavior: 'smooth' });
        }
      }
    });
  }

  video.addEventListener('timeupdate', function () {
    sync(video.currentTime);
  });
});
