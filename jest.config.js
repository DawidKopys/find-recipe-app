module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '^Assets(.*)$': '<rootDir>/src/assets$1',
    '^GlobalContext$': '<rootDir>/src/context.js',
    '^Components(.*)$': '<rootDir>/src/components$1',
    '^CustomHooks(.*)$': '<rootDir>/src/custom-hooks$1',
  },
};
