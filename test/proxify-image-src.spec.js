/* eslint-disable */

import {expect} from 'chai';

import proxifyImageSrc, {setProxyBase, getLatestUrl, extractPHash} from '../src/proxify-image-src';


describe('getLatestUrl', () => {
  it('1- should get the latest url', () => {
    const input = 'https://i.imgur.com/muESb0B.png';

    expect(getLatestUrl(input)).to.deep.equal('https://i.imgur.com/muESb0B.png');
  });

  it('2- should get the latest url', () => {
    const input = 'https://images.ecency.com/0x0/https://i.imgur.com/muESb0B.png';

    expect(getLatestUrl(input)).to.deep.equal('https://i.imgur.com/muESb0B.png');
  });

  it('3- should get the latest url', () => {
    const input = 'https://images.ecency.com/0x0/https://images.hive.io/0x0/https://i.imgur.com/muESb0B.png';

    expect(getLatestUrl(input)).to.deep.equal('https://i.imgur.com/muESb0B.png');
  });
});


describe('extractPHash', () => {
  it('1- should extract hash', () => {
    const input = 'https://images.ecency.com/p/RGgukq5E6HBNvuPpuJoWwfXPpi5ckcLESTB3nmmnMt8YnPwgHbJegFaUzokkErqT8JVe4zPL7GD3gy6aaZQERs3MF5KAGJQ1AL4MmhLWfmceyk6XXSqWaECh1YXC7aV?format=match&mode=fit';

    expect(extractPHash(input)).to.deep.equal('RGgukq5E6HBNvuPpuJoWwfXPpi5ckcLESTB3nmmnMt8YnPwgHbJegFaUzokkErqT8JVe4zPL7GD3gy6aaZQERs3MF5KAGJQ1AL4MmhLWfmceyk6XXSqWaECh1YXC7aV');
  });

  it('2- no hash. should return null ', () => {
    const input = 'https://i.imgur.com/muESb0B.png';

    expect(extractPHash(input)).to.deep.equal(null);
  });
})


describe('Proxify image src', () => {

  it('1- should proxify image src', () => {
    const input = 'https://i.imgur.com/muESb0B.png';
    const expected = 'https://images.ecency.com/p/2bP4pJr4wVimqCWjYimXJe2cnCgnJdyHYxb4dfF6gmC?format=match&mode=fit';

    expect(proxifyImageSrc(input)).to.deep.equal(expected);
  });


  it('2- should not proxify if already proxified', () => {
    const input = 'https://images.ecency.com/0x0/https://i.imgur.com/muESb0B.png';
    const expected = 'https://images.ecency.com/p/2bP4pJr4wVimqCWjYimXJe2cnCgnJdyHYxb4dfF6gmC?format=match&mode=fit';

    expect(proxifyImageSrc(input)).to.deep.equal(expected);
  });


  it('3- set proxy base', () => {
    setProxyBase('https://img.esteem.app');

    const input = 'https://i.imgur.com/muESb0B.png';
    const expected = 'https://img.esteem.app/p/2bP4pJr4wVimqCWjYimXJe2cnCgnJdyHYxb4dfF6gmC?format=match&mode=fit';

    expect(proxifyImageSrc(input)).to.deep.equal(expected);
  });
});
