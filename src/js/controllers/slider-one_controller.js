import { Controller } from "stimulus";
import { tns } from "tiny-slider/src/tiny-slider"

export default class extends Controller {
  static targets = [ `next`, `prev`, `list` ]

  initialize() {
    this.init();
  }

  init() {
    const slider = tns({
      container: this.listTarget,
      items: 1,
      controls: true,
      nav: false,
      loop: true,
      swipeAngle: false,
      speed: 400,
      nextButton: this.nextTarget,
      prevButton: this.prevTarget,
      responsive: {
        600: {
          items: 1
        },
        1200: {
          fixedWidth: 1185,
          center: true
        }
      }
    });
  }
}