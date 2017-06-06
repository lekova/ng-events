import { NgEventsAppPage } from './app.po';

describe('ng-events-app App', () => {
  let page: NgEventsAppPage;

  beforeEach(() => {
    page = new NgEventsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
