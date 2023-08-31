import add from '../add';
import chai, { should, expect } from 'chai';

chai.should();

describe('add function', () => {
  it('Sum should be equal to 3', () => {
    add(1, 2).should.equal(3);
  });
});

describe('Null and Zero check', () => {

  it('null checks', () => {
    const n = null;
    expect(n).to.be.null;
    expect(n).to.not.be.undefined;
    expect(n).to.not.be.true;
  });

  it('zero checks', () => {
    const z = 0;
    expect(z).to.not.be.null;
    expect(z).to.exist;
    expect(z).to.not.be.undefined;
    expect(z).to.not.be.true;
    expect(z).to.equal(0);
  });
});

function compileCode() {
  throw new Error('you are using the wrong JDK!');
}

describe('checking compileCode() function', () => {
  it('compiling code goes as expected', () => {
    expect(() => compileCode()).to.throw();
    expect(() => compileCode()).to.throw(Error);

    // You can also use a string that must be contained in the error message or a regexp
    expect(() => compileCode()).to.throw('JDK');
    expect(() => compileCode()).to.throw(/JDK/);

    // Or you can match an exact error message using a regexp like below
    // expect(() => compileCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
    expect(() => compileCode()).to.throw(/^you are using the wrong JDK!$/); // Test pass
  });
});