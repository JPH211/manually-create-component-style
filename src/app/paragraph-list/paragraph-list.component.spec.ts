import { TestBed } from '@angular/core/testing';
import { ParagraphListComponent } from './paragraph-list.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ParagraphListComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ParagraphListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'manually-create-component-style'`, () => {
    const fixture = TestBed.createComponent(ParagraphListComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('manually-create-component-style');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ParagraphListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('manually-create-component-style app is running!');
  });
});
