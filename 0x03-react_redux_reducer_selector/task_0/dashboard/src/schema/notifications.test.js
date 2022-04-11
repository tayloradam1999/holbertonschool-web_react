import { getAllNotificationsByUser, normalizedData } from './notifications';


describe('getAllNotificationsByUser', () => {
  it(`Verifies that getAllNotificationsByUser returns the correct data 
  when an id is passed as a parameter`, () => {
    const userId = '5debd764a7c57c7839d722e9';

    const expected = [
      {
        guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
        isRead: true,
        type: "urgent",
        value:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      },
      {
        guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
        isRead: false,
        type: "urgent",
        value:
          "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed"
      }
    ];

    // should only get back context from the user object that matches userId
    expect(getAllNotificationsByUser(userId)).toBeTruthy();

    expect(getAllNotificationsByUser(userId)).toEqual(expected);

    expect(getAllNotificationsByUser(userId)).toEqual(
      expect.arrayContaining(expected)
    );

    expect(getAllNotificationsByUser(userId)).toMatchObject(expected);
    expect(getAllNotificationsByUser(userId)).toHaveProperty('length', 2);
    expect(getAllNotificationsByUser(userId)).not.toEqual([]);
  });

  it(`Verifies that our normalized data has a correct 'result' array`, () => {
    const expected = [
      "5debd76480edafc8af244228",
      "5debd764507712e7a1307303",
      "5debd76444dd4dafea89d53b",
      "5debd76485ee4dfd1284f97b",
      "5debd7644e561e022d66e61a",
      "5debd7644aaed86c97bf9d5e",
      "5debd76413f0d5e5429c28a0",
      "5debd7642e815cd350407777",
      "5debd764c1127bc5a490a4d0",
      "5debd7646ef31e0861ec1cab",
      "5debd764a4f11eabef05a81d",
      "5debd764af0fdd1fc815ad9b",
      "5debd76468cb5b277fd125f4",
      "5debd764de9fa684468cdc0b",
    ];

    const resultsArray = normalizedData.result;

    expect(resultsArray).toEqual(expect.arrayContaining(expected));
    expect(resultsArray).toHaveProperty('length', 14);
    expect(resultsArray[0]).toEqual('5debd76480edafc8af244228');
  })

  it(`Verifies that our normalized data has the correct 'users' entity`, () => {
    const expected = {
      age: 25,
      email: "poole.sanders@holberton.nz",
      id: "5debd764a7c57c7839d722e9",
      name: { first: "Poole", last: "Sanders" },
      picture: "http://placehold.it/32x32"
    };

    const usersEntity = normalizedData.entities.users;

    // isolate the user object with id '5debd764a7c57c7839d722e9'
    const user = usersEntity['5debd764a7c57c7839d722e9'];

    expect(user).toBeTruthy();
    expect(user).toMatchObject(expected);
    expect(user).toHaveProperty('age', 25);
    expect(user).toEqual(expect.objectContaining(expected));
  })

  it(`Verifies that our normalized data has the correct 'messages' entity`, () => {
    const expected = {
        guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
        isRead: false,
        type: "default",
        value: "Cursus risus at ultrices mi."
    };

    const messagesEntity = normalizedData.entities.messages['efb6c485-00f7-4fdf-97cc-5e12d14d6c41'];

    expect(messagesEntity).toBeTruthy();
    expect(messagesEntity).toMatchObject(expected);
    expect(messagesEntity).toHaveProperty('isRead', false);
    expect(messagesEntity).toEqual(expect.objectContaining(expected));
  });

  it(`Verifies that our normalized data has the correct 'notifications' entity`, () => {
    const expected = {
      author: "5debd764f8452ef92346c772",
      context: "3068c575-d619-40af-bf12-dece1ee18dd3",
      id: "5debd7642e815cd350407777"
    };

    const notificationsEntity = normalizedData.entities.notifications['5debd7642e815cd350407777'];

    expect(notificationsEntity).toBeTruthy();
    expect(notificationsEntity).toMatchObject(expected);
    expect(notificationsEntity).toHaveProperty('author', '5debd764f8452ef92346c772');
    expect(notificationsEntity).toEqual(expect.objectContaining(expected));
  });
});