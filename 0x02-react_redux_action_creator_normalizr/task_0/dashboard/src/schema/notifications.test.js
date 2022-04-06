import getAllNotificationsByUser from './notifications';


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
});