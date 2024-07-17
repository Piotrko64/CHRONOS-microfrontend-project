import { calculateDifferentDates } from 'src/app/utils/calculateDifferentDates';
describe('checks correcting dates', () => {
  beforeEach(() => {
    const baseTime = new Date('2022-11-18T14:47:33.172Z');
    jasmine.clock().mockDate(baseTime);
  });

  it("tests for '2022-11-18T14:48:33.172Z' date", () => {
    const objectDateFromFunction = calculateDifferentDates(
      '2022-11-18T14:48:33.172Z'
    );

    const expectObject = {
      end: false,
      days: 0,
      hours: 0,
      minutes: 1,
      seconds: 0,
    };

    expect(objectDateFromFunction).toEqual(expectObject);
  });

  it("tests for '2022-11-24T15:49:34.172Z' date", () => {
    const objectDateFromFunction = calculateDifferentDates(
      '2022-11-24T15:49:34.172Z'
    );

    const expectObject = {
      end: false,
      days: 6,
      hours: 1,
      minutes: 2,
      seconds: 1,
    };

    expect(objectDateFromFunction).toEqual(expectObject);
  });

  it("tests for '2022-11-24T15:49:34.172Z' date", () => {
    const objectDateFromFunction = calculateDifferentDates(
      '2022-11-24T15:49:34.172Z'
    );

    const expectObject = {
      end: false,
      days: 6,
      hours: 1,
      minutes: 2,
      seconds: 1,
    };

    expect(objectDateFromFunction).toEqual(expectObject);
  });

  it('tests for earlier date', () => {
    const objectDateFromFunction = calculateDifferentDates(
      '2021-11-24T15:49:34.172Z'
    );

    expect(objectDateFromFunction.end).toBeTrue();
  });
});
