import { Ex1Week2Page } from './app.po';

describe('ex1-week2 App', function() {
  let page: Ex1Week2Page;

  beforeEach(() => {
    page = new Ex1Week2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
