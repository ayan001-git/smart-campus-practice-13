const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const roomCheckerSource = fs.readFileSync(path.join(root, 'low-code', 'RoomChecker.js'), 'utf8');
const checker = vm.runInNewContext(roomCheckerSource.replace(/^export default /, 'checker = '), {});

const handlers = {};
const fields = {
  roomform: { addEventListener(event, handler) { handlers[event] = handler; } },
  result: {
    replaceChildren() { this.children = []; },
    append(...children) { this.children.push(...children); },
  },
  start: {},
  duration: {},
  blocked: {},
};

assert.match(html, /<form\b[^>]*\bid="roomform"[^>]*\bnovalidate\b/);
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
let htmlBookings;
vm.runInNewContext(
  script.replace('const form=document', 'capture(() => JSON.stringify(bookings));const form=document'),
  {
    capture(readBookings) { htmlBookings = readBookings; },
    document: { getElementById: id => fields[id], createElement: () => ({}) },
  },
);

const cases = [
  ['11:30', '30', false, 'Available', null, /available/i],
  ['10:30', '60', false, 'Unavailable', 'overlap', /overlap/i],
  ['11:30', '30', true, 'Unavailable', 'blocked', /blocked/i],
  ['11:30', '0', false, 'Validation error', 'invalid', /whole number/i],
  ['11:30', '121', false, 'Validation error', 'too-long', /120/],
  ['08:30', '30', false, 'Validation error', 'not-future', /09:00/],
  ['11:00', '60', false, 'Available', null, /available/i],
];

const fixture = '[{"start":600,"end":660}]';
assert.equal(htmlBookings(), fixture);
assert.equal(JSON.stringify(checker.bookings), fixture);

for (const [index, [start, duration, blocked, title, reason, detail]] of cases.entries()) {
  fields.start.value = start;
  fields.duration.value = duration;
  fields.blocked.checked = blocked;
  handlers.submit({ preventDefault() {} });
  const [heading, message] = fields.result.children;
  assert.equal(heading.textContent, title);
  assert.match(message.textContent, detail);

  const verdict = checker.check(start, duration, blocked);
  assert.equal(verdict.available, title === 'Available');
  assert.equal(verdict.reason, reason);
  assert.match(verdict.message, detail);
  console.log(`T${index + 1} PASS | ${title} | HTML: ${message.textContent} | JS: ${verdict.message}`);
}

assert.equal(htmlBookings(), fixture);
assert.equal(JSON.stringify(checker.bookings), fixture);
console.log('T8 PASS | Booking 10:00–11:00 unchanged in both implementations');
