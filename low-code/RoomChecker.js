export default {
  NOW: 540,
  bookings: Object.freeze([{ start: 600, end: 660 }]),
  parseTime(value) {
    const match = /^(\d{1,2}):(\d{2})$/.exec(String(value).trim());
    if (!match) return null;
    const hour = Number(match[1]), minute = Number(match[2]);
    if (hour > 24 || minute > 59 || (hour === 24 && minute !== 0)) return null;
    return hour * 60 + minute;
  },
  check(startText, durationText, blocked) {
    const start = this.parseTime(startText);
    if (start === null || start >= 1440)
      return {available:false, reason:"invalid", message:"Enter a valid start time (HH:MM)."};
    if (!/^\d+$/.test(String(durationText).trim()) || Number(durationText) === 0 || !Number.isSafeInteger(Number(durationText)))
      return {available:false, reason:"invalid", message:"Duration must be a whole number between 1 and 120."};
    const duration = Number(durationText);
    if (duration > 120) return {available:false,reason:"too-long",message:"Duration must not exceed 120 minutes."};
    if (blocked) return {available:false,reason:"blocked",message:"Study Room A is blocked."};
    if (start <= this.NOW) return {available:false,reason:"not-future",message:"Start time must be after 09:00."};
    if (start + duration > 1440) return {available:false,reason:"bad-bounds",message:"Requested interval must end by 24:00."};
    if (this.bookings.some(b => start < b.end && start + duration > b.start))
      return {available:false,reason:"overlap",message:"The slot overlaps booking 10:00–11:00."};
    return {available:true,reason:null,message:"Study Room A is available."};
  },
  run() {
    const result = this.check(StartInput.text, DurationInput.text, BlockedSwitch.isSwitchedOn);
    storeValue("lastVerdict",result,false);
    return result;
  }
};