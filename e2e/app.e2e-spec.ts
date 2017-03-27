import { IconfigPage } from './app.po';

describe('iconfig App', () => {
  let page: IconfigPage;

  beforeEach(() => {
    page = new IconfigPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
