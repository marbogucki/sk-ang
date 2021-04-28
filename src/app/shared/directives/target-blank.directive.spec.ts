import { TargetDirective } from './target-blank.directive';

fdescribe('TargetDirective', () => {
  let directive: TargetDirective;

  beforeEach(() => {
    directive = new TargetDirective();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should set default "_blank" value for attr.target', () => {
    // Arrange
    const target = '_blank';

    // Act
    directive.sbappTarget = null;

    // Assert
    expect(directive.target).toBe(target);
  });

  it('should set "_self" value for attr.target', () => {
    // Arrange
    const target = '_self';

    // Act
    directive.sbappTarget = target;

    // Assert
    expect(directive.target).toBe(target);
  });
});
