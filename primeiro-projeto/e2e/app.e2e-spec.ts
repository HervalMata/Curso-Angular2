import { CursoAngular2Page } from './app.po';

describe('curso-angular2 App', () => {
  let page: CursoAngular2Page;

  beforeEach(() => {
    page = new CursoAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
