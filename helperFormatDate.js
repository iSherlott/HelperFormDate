module.exports = class FormatDate {
  constructor(time) {
    this.time = new Date(time);
    this.day = new Date(time).getDate();
    this.month = new Date(time).getMonth() + 1;
    this.fullYear = new Date(time).getFullYear();
    this.hours = new Date(time).getHours();
    this.minutes = new Date(time).getMinutes();
    this.seconds = new Date(time).getSeconds();
    this.errors = [];
  }

  formatDay() {
    try {
      let day = this.day;
      if (this.day >= 0 && this.day <= 9) day = "0" + this.day;

      return day;
    } catch (error) {
      this.errors.push(error);
      return "error";
    }
  }

  formatMonth() {
    try {
      let month = this.month;
      if (this.month >= 0 && this.month <= 9) month = "0" + this.month;

      return month;
    } catch (error) {
      this.errors.push(error);
      return "error";
    }
  }

  formatHours() {
    try {
      let hours = this.hours;
      if (this.hours >= 0 && this.hours <= 9) hours = "0" + this.hours;

      return hours;
    } catch (error) {
      this.errors.push(error);
      return "error";
    }
  }

  formatMinutes() {
    try {
      let minutes = this.minutes;
      if (this.minutes >= 0 && this.minutes <= 9) minutes = "0" + this.minutes;

      return minutes;
    } catch (error) {
      this.errors.push(error);
      return "error";
    }
  }

  formatSeconds() {
    try {
      let seconds = this.seconds;
      if (this.seconds >= 0 && this.seconds <= 9) seconds = "0" + this.seconds;

      return seconds;
    } catch (error) {
      this.errors.push(error);
      return "error";
    }
  }

  formatDate() {
    try {
      return `${this.formatDay()}/${this.formatMonth()}/${this.fullYear}`;
    } catch (error) {
      this.errors.push(error);
      return "error";
    }
  }

  formatTime() {
    try {
      return `${this.formatHours()}:${this.formatMinutes()}:${this.formatSeconds()}`;
    } catch (error) {
      this.errors.push(error);
      return "error";
    }
  }

  makeMask() {
    try {
      return `${this.formatDate()} ${this.formatTime()}`;
    } catch (error) {
      this.errors.push(error);
      return "error";
    }
  }

  genMaskDay(genDay) {
    try {
      let _genDay = genDay;
      if (_genDay >= 0 && _genDay <= 9) _genDay = "0" + _genDay;

      return _genDay;
    } catch (error) {
      this.errors.push(error);
      return "error";
    }
  }

  genMaskMonth(genMonth) {
    try {
      let _genMonth = genMonth;
      if (_genMonth >= 0 && _genMonth <= 9) _genMonth = "0" + _genMonth;

      return _genMonth;
    } catch (error) {
      this.errors.push(error);
      return "error";
    }
  }

  genMaskDateNow() {
    try {
      let dateNow = new Date();

      dateNow = `${this.genMaskDay(dateNow.getDate())}/${this.genMaskMonth(
        dateNow.getMonth() + 1
      )}/${dateNow.getFullYear()}`;

      return dateNow;
    } catch (error) {
      this.errors.push(error);
      return "error";
    }
  }

  genMask() {
    try {
      let _genMask;
      if (this.genMaskDateNow() == this.formatDate())
        _genMask = this.formatTime();
      else _genMask = this.makeMask();

      return _genMask;
    } catch (error) {
      this.errors.push(error);
      return "error";
    }
  }

  timeStamp() {
    return this.time.getTime();
  }

  timeStampNow() {
    return new Date().getTime();
  }

  all() {
    if (this.errors.length > 0) return this.errors;
    else {
      console.log(`Clean Date: ${this.time}`);
      console.log(`formatDate: ${this.formatDate()}`);
      console.log(`formatTime: ${this.formatTime()}`);
      console.log(`makeMask: ${this.makeMask()}`);
      console.log(`genMaskDateNow: ${this.genMaskDateNow()}`);
      console.log(`genMask: ${this.genMask()}`);
      console.log(`timeStamp ${this.timeStamp()}`);
      console.log(`timeStampNow: ${this.timeStampNow()}`);
    }
  }
};
