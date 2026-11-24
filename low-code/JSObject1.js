export default {
 NOW:540,
 bookings:[{start:600,end:660}],
 parseTime(value){const m=/^(\d{1,2}):(\d{2})$/.exec(String(value).trim()); if(!m)return null;const h=Number(m[1]),n=Number(m[2]);return h<24&&n<60?h*60+n:null;},
 check(startText,durationText,blocked){const start=this.parseTime(startText),duration=Number(durationText);let reason=null,message='Study Room A is available.';
 if(start===null){reason='invalid';message='Enter a valid start time (HH:MM).';}else if(!/^\d+$/.test(String(durationText).trim())||!Number.isSafeInteger(duration)||duration<1){reason='invalid';message='Duration must be a whole number between 1 and 120.';}else if(duration>120){reason='too-long';message='Duration must not exceed 120 minutes.';}else if(blocked){reason='blocked';message='Study Room A is blocked.';}else if(start<=this.NOW){reason='not-future';message='Start time must be after 09:00.';}else if(start+duration>1440){reason='bad-bounds';message='Requested interval must end by 24:00.';}else if(this.bookings.some(b=>start<b.end&&start+duration>b.start)){reason='overlap';message='The slot overlaps booking 10:00–11:00.';}return {available:reason===null,reason,message};},
 run(){return this.check(StartInput.text, DurationInput.text, BlockedSwitch.isSwitchedOn);}
}
