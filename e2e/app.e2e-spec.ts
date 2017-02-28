import { GithubProfileSearchPage } from './app.po';

describe('github-profile-search App', () => {
  let page: GithubProfileSearchPage;

  beforeEach(() => {
    page = new GithubProfileSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
