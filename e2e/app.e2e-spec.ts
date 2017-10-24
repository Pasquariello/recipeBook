import { RecipeBookProjPage } from './app.po';

describe('recipe-book-proj App', () => {
  let page: RecipeBookProjPage;

  beforeEach(() => {
    page = new RecipeBookProjPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
